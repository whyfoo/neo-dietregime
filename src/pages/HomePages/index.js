import React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Main from '../Main';
import Profile from '../Profile';
import Search from '../Search';
import Magnify from '../../assets/icons/magnify.png';
import Home from '../../assets/icons/home.png';
import Head from '../../assets/icons/profile.png';
import ProfileStack from '../ProfileStack';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function HomePages() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      shifting={true}
      activeColor="teal"
      barStyle={{
        backgroundColor: '#EDEDED',
      }}>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Image source={Magnify} style={{width: 25, height: 25}} />
          ),
        }}
      />

      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={Home} style={{width: 30, height: 30}} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image source={Head} style={{width: 26, height: 26}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
