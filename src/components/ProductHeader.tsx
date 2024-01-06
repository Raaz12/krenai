import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {typography} from '../Typography';

const ProductHeader = ({length, numIndex}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Text style={typography.heading}>
          {' '}
          {`${numIndex}/ ${length} Products`}{' '}
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Text style={typography.caption}>
          <MaterialCommunityIcons name="sort" color={'black'} size={16} /> Sort
        </Text>
        <Text style={typography.caption}>
          <MaterialCommunityIcons name="filter" color={'black'} size={16} />{' '}
          Filter
        </Text>
      </View>
    </View>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({});
