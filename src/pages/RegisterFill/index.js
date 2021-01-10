import React, {useState, useEffect, Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableHighlight, 
  ScrollView, 
  Dimensions,
  Alert,
  Picker,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const win = Dimensions.get('window');

class RegisterFill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weight: null,
      height: null,
      age: null,
      target: null,
      day: '',
      selectedGender: 'm',
    }
  }

  render(){
    return(
            <ScrollView>
              <View style={{
                flex:1, 
                alignItems: 'center',
                }}>
                <Text style={styles.forSubTitle}>Tell Us About Yourself</Text>
                
                <Text>Name</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholderTextColor="#5b5b5b"
                  placeholder="Name"
                  defaultValue={this.state.name}
                  onChangeText={(input) => this.setState({name: input})}
                />

                <Text>Gender</Text>
                  <Picker
                    selectedValue={this.state.selectedGender}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => 
                      this.setState({
                        selectedGender: itemValue,
                      })}
                  >
                    <Picker.Item label="Male" value="m" />
                    <Picker.Item label="Female" value="f" />
                  </Picker>

                <Text>Age</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholderTextColor="#5b5b5b"
                  placeholder="Age"
                  keyboardType="numeric"
                  defaultValue={this.state.age}
                  onChangeText={(input) => this.setState({age: input})}
                />

                <Text>Height</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholderTextColor="#5b5b5b"
                  placeholder="Height"
                  keyboardType="numeric"
                  defaultValue={this.state.height}
                  onChangeText={(input) => this.setState({height: input})}
                />

                <Text>Weight</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholderTextColor="#5b5b5b"
                  placeholder="Weight"
                  keyboardType="numeric"
                  defaultValue={this.state.weight}
                  onChangeText={(input) => this.setState({weight: input})}
                />

                <Text>Day</Text> 
                <TextInput
                  style={styles.inputBox}
                  placeholderTextColor="#5b5b5b"
                  placeholder="Days"
                  keyboardType="numeric"
                  defaultValue={this.state.day}
                  onChangeText={(input) => this.setState({day: input})}
                />
                <Text>Target</Text>   
                <TextInput
                  style={styles.inputBox}
                  placeholderTextColor="#5b5b5b"
                  placeholder="Target"
                  keyboardType="numeric"
                  defaultValue={this.state.target}
                  onChangeText={(input) => this.setState({target: input})}
                />

                <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "seagreen" }}
                    onPress={() => {
                      if(
                        this.state.name == null ||
                        this.state.day == null ||
                        this.state.age == null ||
                        this.state.selectedGender == null ||
                        this.state.weight == null ||
                        this.state.height == null ||
                        this.state.target == null 
                      )
                      {
                        Alert.alert('Warning', 'There is something missing');
                      } 
                      else {
                        firestore()
                        .collection('userdata')
                        .doc(`${auth().currentUser.uid}`)
                        .set({
                          name: this.state.name,
                          age: this.state.age,
                          height: this.state.height,
                          target: this.state.target,
                          day: this.state.day,
                          weight: this.state.weight,
                          gender: this.state.selectedGender,
                        });
                        Alert.alert('Registered successfully', `Let the Diet Regime begins!`,[
                          { text: "OK", onPress: () => {
                            this.props.navigation.reset({
                              index: 0,
                              routes: [{name: 'Main'}],
                            });
                            this.props.navigation.navigate('Main');
                          } }
                          ], { cancelable: false }
                        );
                      }
                    }
                  }
                  >
                    <Text style={styles.textStyle}>Finish</Text>
                </TouchableHighlight>
                </View>
              </ScrollView>
    );
  }
}

export default RegisterFill;

const styles = StyleSheet.create({
  inputBox: {
      width: 280,
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
      marginVertical: 40,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      margin: 5,
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

