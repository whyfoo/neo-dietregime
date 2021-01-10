/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import lines from '../../assets/icons/threeLine.png';
import logo from '../../assets/icons/logo.png';
import firestore from '@react-native-firebase/firestore';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Recommend from '../../components/Recommend';
import RecommendAlt from '../../components/RecommendAlt';

const Tab = createMaterialTopTabNavigator();
let listDocumentDummy = [];
let listManual= ['applepie', 'ayambakar', 'ayamgoreng', 'buburkacangijo', 'burger', 'buryam', 'fishnchip', 'gadogado', 'greeksalad', 'igabakar'];

class Search extends Component {
  state = {
    input: '',
    listDocument: [],
  };

  async componentDidMount(){
    console.log('component');
    await firestore()
    .collection('food')
    .get()
    .then(querySnapshot => {
      const test = [];
      querySnapshot.forEach(docs => {
        test.push(
          docs.id
        );
      })
      listDocumentDummy = test;
    });
  }

  render() {
    console.log('render');
    return (
      <KeyboardAvoidingView behavior='height' style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fcfcfc',
            alignItems: 'center',
            padding: 15,
          }}>
          <TextInput
            style={styles.inputBox}
            placeholderTextColor="#5b5b5b"
            placeholder="Search Here"
            onChangeText={(seri) => this.setState({input: seri})}
          />
          <Text style={{marginVertical: 2}}>
            Search Result for "{this.state.input}"
          </Text>
        </View>

        <View style={{flex: 6}}>
          <Tab.Navigator
            tabBarOptions={{
              indicatorStyle: {backgroundColor: '#06BB9A'},
            }}>
            <Tab.Screen name="All" component={Result} />
            <Tab.Screen name="Breakfast" component={Result} />
            <Tab.Screen name="Lunch" component={Result} />
            <Tab.Screen name="Dinner" component={Result} />
          </Tab.Navigator>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Search;

class Result extends Component {
  constructor(){
    super();
    let loop = [];
  }

  shouldComponentUpdate(prev, after){
    console.log('test',prev, after);
  }
  componentDidMount(){
    console.log(this.state.loop);
  }

  render(){

    for(let i=0; i<listManual.length; i++){
      this.loop.push(listManual[i]);
    }
    this.props
    return (
      <ScrollView>
        {this.state.loop}
         
      </ScrollView>
    );
  }
}


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
});