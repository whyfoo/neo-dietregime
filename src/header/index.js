import logout from '../assets/icons/logout.png';
import logo from '../assets/icons/logo.png';

import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth';

const win = Dimensions.get('window');

const Header = ({navigation}) => {
    return (
    <View style={{
           flex: 1,
           flexDirection: 'row',
           justifyContent: 'space-between',
           alignItems: 'center',
    }}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress = {() => {            
          auth()
          .signOut()
          .then(() => navigation.navigate('Begin'));
          }}>
            <Image
               source={logout}
               resizeMode="center"
               style={{
                 width: win.height/11,
                 height: win.width/11,
               }}
             />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, position: 'absolute', left: '45%'}}>
          <Image
            source={logo}
            style={{
              height: win.height/7,
              width: win.width/7,
              resizeMode: 'center',
            }}
          />
          </View>
        </View>
    )
}

export default Header;

