import React, {useState, useEffect, Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  TouchableHighlight, 
  Image, 
  TouchableWithoutFeedback,
  ScrollView, 
  Button,
  Modal,
  Dimensions,
  Alert,
KeyboardAvoidingView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import logo from '../../assets/icons/logo.png';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recommend from '../../components/Recommend';
import ProfileChange from '../ProfileChange';

const win = Dimensions.get('window');

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
      img: '',
      day: '',
      modalVisible: false,
      heightUpdate: null,
      weightUpdate: null,
      dayUpdate: null,
      targetUpdate: null
    }
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  async componentDidMount() {
    const currentUID = auth().currentUser.uid;
    const valueA = await firestore().collection('userdata').doc(`${currentUID}`).get(); 
    this.setState({data: valueA});
    this.setState({nama: this.state.data._data.nama});
    this.setState({weight: this.state.data._data.weight});
    this.setState({height: this.state.data._data.height});
    this.setState({age: this.state.data._data.age});
    this.setState({day: this.state.data._data.day});
    this.setState({target: this.state.data._data.target});
  }
  
  render(){
    const { modalVisible } = this.state;
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
              <Text style={styles.forSubTitle}>Age</Text>
              <Text style={styles.forSubTitle}>Height</Text>
              <Text style={styles.forSubTitle}>Weight</Text>
              <Text style={styles.forSubTitle}>Days</Text>
              <Text style={styles.forSubTitle}>Target</Text>
            </View>          

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                textAlign: 'center',
              }}>
              <Text style={styles.forFont}>{this.state.age}</Text>
              <Text style={styles.forFont}>{this.state.height}</Text>
              <Text style={styles.forFont}>{this.state.weight}</Text>
              <Text style={styles.forFont}>{this.state.day}</Text>
              <Text style={styles.forFont}>{this.state.target}</Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                textAlign: 'center',
              }}>
              <Text style={styles.forFont}>y.o.</Text>
              <Text style={styles.forFont}>cm</Text>
              <Text style={styles.forFont}>kg</Text>
              <Text style={styles.forFont}>days</Text>
              <Text style={styles.forFont}>kg</Text>
            </View>

            <View style={{flex: 1.5}}>

          </View>

            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!modalVisible);
            }}
            >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Your Preference</Text>
                
                <Text>Height</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholderTextColor="#5b5b5b"
                  placeholder="Height"
                  keyboardType="numeric"
                  defaultValue={this.state.height}
                  onChangeText={(input) => this.setState({heightUpdate: input})}
                />

                <Text>Weight</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholderTextColor="#5b5b5b"
                  placeholder="Weight"
                  keyboardType="numeric"
                  defaultValue={this.state.weight}
                  onChangeText={(input) => this.setState({weightUpdate: input})}
                />

                <Text>Day</Text> 
                <TextInput
                  style={styles.inputBox}
                  placeholderTextColor="#5b5b5b"
                  placeholder="Days"
                  keyboardType="numeric"
                  defaultValue={this.state.day}
                  onChangeText={(input) => this.setState({dayUpdate: input})}
                />
                
                <Text>Target</Text>   
                <TextInput
                  style={styles.inputBox}
                  placeholderTextColor="#5b5b5b"
                  placeholder="Target"
                  keyboardType="numeric"
                  defaultValue={this.state.target}
                  onChangeText={(input) => this.setState({targetUpdate: input})}
                />


                <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                      firestore()
                      .collection('userdata')
                      .doc(`${auth().currentUser.uid}`)
                      .update({
                        height: this.state.heightUpdate == null ? this.state.height : this.state.heightUpdate,
                        target: this.state.targetUpdate == null ? this.state.target : this.state.targetUpdate,
                        day: this.state.dayUpdate == null ? this.state.day : this.state.dayUpdate,
                        weight: this.state.weightUpdate == null ? this.state.weight : this.state.weightUpdate,
                      });
                      Alert.alert('Data Updated');
                      this.componentDidMount();
                    }}
                  >
                    <Text style={styles.textStyle}>Save</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "coral" }}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            
                    
      </View>
        </View>
        <View style = {{flex: 2, alignSelf: 'center'}}>
          <TouchableOpacity 
          style = {{
            backgroundColor: 'darkcyan', 
            padding: 10,
            borderRadius: 7}}
          onPress = {() => {
            this.setModalVisible(true);
          }} >
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
        width: 180,
        height: 35,
        backgroundColor: '#c0c0c0',
        borderRadius: 15,
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
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 25,
        padding: 10,
        width: 130,
        height: 35,
        marginVertical: 8,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
