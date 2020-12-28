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
  Dimensions,} from 'react-native';
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
    this.state = {
      data: [],
      nama: '',
      weight: null,
      height: null,
      age: null,
      target: null,
      cal: '',
      img: '',};
  }

  async componentDidMount() {
    const currentUID = auth().currentUser.uid;
    const valueA = await firestore().collection('userdata').doc(`${currentUID}`).get(); 
    this.setState({data: valueA});
    this.setState({nama: this.state.data._data.nama});
    this.setState({weight: this.state.data._data.weight});
    this.setState({height: this.state.data._data.height});
    this.setState({age: this.state.data._data.age});
    this.setState({target: this.state.data._data.target});
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
          width: win.width/4, 
          height: win.width/4, 
          borderRadius: 100,
          marginVertical: 15}}/>
          <Text style={{margin: 20, fontSize: 18, textAlign: 'center'}}>{this.state.nama}'s profile preference</Text>
          
          <View
          style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10

          }}>
            <View style={{flex: 1.5}}></View>

            <View style={{flex: 2, textAlign: 'right'}}>
              <Text style={styles.forSubTitle}>Height</Text>
              <Text style={styles.forSubTitle}>Weight</Text>
              <Text style={styles.forSubTitle}>Age</Text>
              <Text style={styles.forSubTitle}>Target</Text>
            </View>          

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                textAlign: 'center',
              }}>
              <Text style={styles.forFont}>{this.state.height}</Text>
              <Text style={styles.forFont}>{this.state.weight}</Text>
              <Text style={styles.forFont}>{this.state.age}</Text>
              <Text style={styles.forFont}>{this.state.target}</Text>
            </View>
            
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                textAlign: 'center',
              }}>
              <Text style={styles.forFont}>cm</Text>
              <Text style={styles.forFont}>kg</Text>
              <Text style={styles.forFont}>y.o.</Text>
              <Text style={styles.forFont}>kg</Text>
            </View>

            <View style={{flex: 1.5}}>

          </View>

        
      </View>

          {/* <Text style={{fontSize: 25, fontWeight: 'bold'}}>{dietName}</Text> */}

          {/* <TextInput
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
          })}/> */}
        </View>
        <View style = {{flex: 3, alignSelf: 'center'}}>
          <TouchableOpacity 
          style = {{
            backgroundColor: 'darkcyan', 
            padding: 10,
            borderRadius: 7}}>
            <Text style = {{color: 'white'}}>
              Change Preference
            </Text>
          </TouchableOpacity>
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
      forFont: {
        fontSize: 17,
        marginVertical: 10,
      },
      forSubTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginVertical: 10,
      }
})
