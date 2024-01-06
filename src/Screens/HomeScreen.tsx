import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import ProductHeader from '../components/ProductHeader';
import ProductCard from '../Cards/ProductCard';
import {getData} from '../Service';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);
  const [numIndex, setNumIndex] = useState(0);

  const [isLoading, setIsloading] = useState(false);

  const onViewableItemsChanged = ({viewableItems, changed}: any) => {
    setNumIndex(changed[0].index);
  };
  const getDatas = async () => {
    try {
      setIsloading(true);
      const resp = (await getData())?.data?.object;
      setLength(resp?.length);
      setData(resp);
      setIsloading(false);
    } catch (err) {
      console.log(err);
      setIsloading(false);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{height: 0.5, backgroundColor: 'gray'}} />
      <ProductHeader numIndex={numIndex} length={length} />
      <View style={{padding: 10, flex: 1}}>
        <FlatList
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={getDatas}
              colors={['blue', 'green', 'black', 'red', 'yellow']}
            />
          }
          data={data}
          numColumns={2}
          renderItem={ProductCard}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
