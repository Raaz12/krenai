import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {typography} from '../Typography';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <AntDesign name="arrowleft" color={'black'} size={20} />
        <Text style={(typography.heading, {color: '#000', fontWeight: '700'})}>
          Women
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <FontAwesome name="search" color={'black'} size={20} />
        <AntDesign name="hearto" color={'black'} size={20} />
        <Ionicons name="bag" color={'black'} size={20} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
