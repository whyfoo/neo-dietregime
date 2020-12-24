import lines from '../assets/icons/threeLine.png';
import logo from '../assets/icons/logo.png';

import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native'

const win = Dimensions.get('window');

const Header = () => {
    return (
    //     <View
    //     style={{
    //       //flex: 1.5,
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //       backgroundColor: '#EDEDED',
    //       paddingHorizontal: 15,
    //     }}>
    //     <View
    //       style={{
    //         height: '100%',
    //         width: '100%',
    //         justifyContent: 'center',
    //         // borderWidth: 2,
    //         // borderColor: 'gray',
    //         // borderRadius: 10
    //       }}>
    //       <TouchableOpacity>
    //         <Image
    //           source={lines}
    //           resizeMode="center"
    //           style={{
    //             width: '80%',
    //             height: '80%',
    //             marginLeft: 5,
    //           }}
    //         />
    //       </TouchableOpacity>
    //     </View>

    //     <View
    //       style={{
    //         height: '80%',
    //         width: '20%',
    //         left: '50%',
    //         position: 'absolute',
    //       }}>
    //       <Image
    //         source={logo}
    //         resizeMode="center"
    //         style={{
    //           height: '100%',
    //           width: '100%',
    //         }}
    //       />
    //     </View>
    //   </View>
    <View style={{
           flex: 1,
           flexDirection: 'row',
           justifyContent: 'space-between',
           alignItems: 'center',
           //paddingHorizontal: 15,
    }}>
        <View style={{flex: 1}}>
          <TouchableOpacity>
            <Image
               source={lines}
               resizeMode="center"
               style={{
                 width: win.height/11,
                 height: win.width/11,
                 //alignSelf: 'flex-start'
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

