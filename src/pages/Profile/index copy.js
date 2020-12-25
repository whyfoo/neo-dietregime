import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  Button,
  Dimensions } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import lines from '../../assets/icons/threeLine.png';
import logo from '../../assets/icons/logo.png';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recommend from '../../components/Recommend';
import { DrawerItem } from '@react-navigation/drawer';


const win = Dimensions.get('window');
const dietName = '50 KG hayo bisa';
const name = 'Haidar Hanif';
const currentUID = auth().currentUser.uid;

const Profile = () => {
    return (
    <View style = {{flex: 1, backgroundColor: 'white'}}>
        
      <View style={{flex: 8, padding: 20, alignItems: 'center'}}>
        <Image source={{uri: 'https://picsum.photos/75'}} 
        style={{
        width: win.width/3, 
        height: win.width/3, 
        borderRadius: 100}}/>
        <Text style={{margin: 20, fontSize: 30}}>{}</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>{dietName}</Text>
        <Button title='Save'/>
      </View>
    </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    inputBox: {
        width: 280,
        height: 35,
        backgroundColor: '#c0c0c0',
        borderRadius: 25,
        paddingHorizontal: 15,
        fontSize: 13,
        color: '#5b5b5b',
        marginVertical: 12,
      },
})
