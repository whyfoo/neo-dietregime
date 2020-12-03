import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Main from '../Main';
import Profile from '../Profile';
import Search from '../Search';
import Magnify from '../../assets/icons/magnify.png';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function HomePages() {
  return (
      <Tab.Navigator initialRouteName="Main" barStyle = {{
          backgroundColor: '#EDEDED',
      }}>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Main" component={Main}/>
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}