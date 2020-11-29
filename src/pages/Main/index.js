import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { startClock } from 'react-native-reanimated';
import lines from '../../assets/icons/threeLine.png';
import logo from '../../assets/icons/logo.png';
import magnify from '../../assets/icons/magnify.png';
import home from '../../assets/icons/home.png';
import profile from '../../assets/icons/profile.png';

const Main = ({navigation}) => {
  const win = Dimensions.get('window');
  return(
    <View style={{flex: 1}}>
      <View 
        style={{
          flex: 2, 
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#EDEDED', 
          paddingHorizontal: 15, 
          alignItems: 'center'}}>
        <Image source={lines}
        style={{
          width: 39,
          height: 54,
          position: 'absolute',
          left: win.width/20,
        }}/>

        <Image source={logo}
        style={{
          width: '60%',
          height: '60%',
          alignSelf: 'center',
          resizeMode: 'center'
        }}/>
      </View>


      <View style={{flex:3, flexDirection: 'row'}}>
        <View style={{flex: 1, padding: 30}}>
          <Text style={{textAlign: 'center'}}>Current Profile</Text>
        </View>

        <View style={{flex: 1}}>
          
        </View>
        
      </View>

      <View style={{flex:1, flexDirection:'row', justifyContent: 'space-around'}}>
        <View>
          <Text>Breakfast</Text>
        </View>

        <View>
          <Text>Lunch</Text>
        </View>

        <View>
          <Text>Dinner</Text>
        </View>

        
      </View>

      <View style={{flex:6}}>
        <Text style={{textAlign: 'center'}}>Our Recommendation</Text>

        
      </View>



      <View 
      style={{
        flex: 1.5, 
        backgroundColor: '#EDEDED', 
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center'}}>
        <Image source={magnify} 
        style={{
          width: 36,
          height: 36,
        }}/>

        <Image source={home}
        style={{
          width: 43,
          height: 43,
        }} />

        <Image source={profile}
        style={{
          width: 40,
          height: 40,
        }} />

      </View>

    </View>
  )

}

export default Main;