import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {typography} from '../Typography';
import {theme} from '../Theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IProps {
  id: string;
  description: string;
  keywords: string;
  mediaUrl: string;
  category: [
    {
      id: string;
      name: string;
    },
  ];
  name: string;
  rating: string;
  variants: [
    {
      variant: string;
      sku: string;
      isOutOfStock: string;
      sellingPrice: string;
      mrp: string;
    },
  ];
  promotionalTag: string;
  addedVariant: [];
  inWishlist: string;
}
const ProductCard = ({item, index}: any) => {
  const data: IProps = item;
  //   console.log(data);

  return (
    <View key={index} style={{margin: 2, width: '50%', marginVertical: 5}}>
      <ImageBackground
        source={{uri: data.mediaUrl}}
        resizeMode="contain"
        style={styles.container}>
        <AntDesign
          name="hearto"
          color={'black'}
          size={20}
          style={{position: 'absolute', right: 10, top: 10}}
        />
        <View style={styles.newContainer}>
          <Text style={{color: 'white'}}>New</Text>
        </View>
      </ImageBackground>
      <View style={{flex: 1, gap: 5}}>
        <Text
          style={[typography.heading, {color: theme.dark, flexWrap: 'wrap'}]}>
          {data.name}
        </Text>
        <Text
          style={[typography.caption, {color: theme.dark, flexWrap: 'wrap'}]}>
          {data.description}
        </Text>
        <Text
          style={[typography.caption, {color: theme.dark, flexWrap: 'wrap'}]}>
          {data.category[0].name}
        </Text>
        <Text
          style={[typography.caption, {color: theme.dark, flexWrap: 'wrap'}]}>
          ₹{data.variants[0].mrp}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').width * 0.45,
    width: Dimensions.get('window').width * 0.45,
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 14,
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  newContainer: {
    width: 50,
    backgroundColor: 'black',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});
