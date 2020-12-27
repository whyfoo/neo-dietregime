import React, {useState, useEffect, Component} from 'react';
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
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import lines from '../../assets/icons/threeLine.png';
import logo from '../../assets/icons/logo.png';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recommend from '../../components/Recommend';
import { DrawerItem } from '@react-navigation/drawer';


const win = Dimensions.get('window');
const dietName = '50 KG hayo bisa';
const name = 'Haidar Hanif';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], nama: '', cal: '', img: '', weight: null};
  }

  async componentDidMount() {
    const currentUID = auth().currentUser.uid;
    const valueA = await firestore().collection('userdata').doc(`${currentUID}`).get(); 
    this.setState({data: valueA});
    this.setState({nama: this.state.data._data.nama});
  }
  
  // async writeQuery(){
  //   firestore().collection('userdata').doc(`${UID}`).add({})
  // }

    
  render(){
    return (
      <View style = {{flex: 1, backgroundColor: 'white'}}>
          
        <View style={{flex: 8, padding: 20, alignItems: 'center'}}>
          <Image source={{uri: 'https://picsum.photos/75'}} 
          style={{
          width: win.width/3, 
          height: win.width/3, 
          borderRadius: 100}}/>
          <Text style={{margin: 20, fontSize: 30}}>{this.state.nama}</Text>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>{dietName}</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Berat"
            placeholderTextColor="white"
            onChangeText={(berat) => this.state.weight = berat}
          />
          <Button title='Save' onPress = {() => firestore()
  .collection('userdata')
  .doc(`${currentUID}`)
  .set({
    nama: 'Nurhadi Aldo',
    weight: this.state.weight,
  })
  .then(() => {
    console.log('User added!');
  })}/>
        </View>
      </View>
      )
  }
  
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
