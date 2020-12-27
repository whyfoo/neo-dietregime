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
    // await firestore()
    // .collection('food')
    // .get()
    // .then(querySnapshot => {
    //   const dokum = [];
    //   //console.log('----------------------------------');
    //   querySnapshot.forEach(docs => {
    //     dokum.push(
    //       docs.id
    //     );
    //   })
    //   this.setState({listDocument: dokum});
    //   //console.log(this.state.listDocument);
    // });
    await firestore()
    .collection('food')
    .get()
    .then(querySnapshot => {
      const test = [];
      //console.log('----------------------------------');
      querySnapshot.forEach(docs => {
        test.push(
          docs.id
        );
      })
      listDocumentDummy = test;
      // console.log(listDocumentDummy);
    });
  }

  render() {
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

// const Result = () => {
//   async function test(){await firestore()
//     .collection('food')
//     .get()
//     .then(querySnapshot => {
//       const test = [];
//       //console.log('----------------------------------');
//       querySnapshot.forEach(docs => {
//         test.push(
//           docs.id
//         );
//       })
//       listDocumentDummy = test;
//       //console.log(listDocumentDummy);
//     });
//   }
//   test();
//     return (
//       <ScrollView>
//         {/* <Recommend style={{marginVertical: 15}} name = "nasgor"/>
//         <Recommend style={{marginVertical: 15}} name = "nasgor"/>
//         <Recommend style={{marginVertical: 15}} name = "nasgor"/>
//         <Recommend style={{marginVertical: 15}} name = "nasgor"/>
//         <Recommend style={{marginVertical: 15}} name = "nasgor"/>
//         <Recommend style={{marginVertical: 15}} name = "nasgor"/> */}
//          {listDocumentDummy.map((property, key) => {
//             //console.log('INI PRINT PROPERTY');
//             console.log(property);
//             return (
//               <Recommend style={{marginVertical: 15}} name = {property} key = {key}/>
//             );
//         })}
//       </ScrollView>
//     );
// }

class Result extends Component {
  // async componentDidMount(){await firestore()
  //   .collection('food')
  //   .get()
  //   .then(querySnapshot => {
  //     const test = [];
  //     //console.log('----------------------------------');
  //     querySnapshot.forEach(docs => {
  //       test.push(
  //         docs.id
  //       );
  //     })
  //     listDocumentDummy = test;
  //     //console.log(listDocumentDummy);
  //   });
  // }
  render(){
    let loop = [];

    for(let i=0; i<listManual.length; i++){
      loop.push(
        <RecommendAlt name ={listManual[i]} key={i}/>
     );
    }
    return (
      <ScrollView>
        {loop}
         
      </ScrollView>
    );
  }
}

// const GetAll = () => {
//   async function test(){await firestore()
//     .collection('food')
//     .get()
//     .then(querySnapshot => {
//       const test = [];
//       console.log('----------------------------------');
//       querySnapshot.forEach(docs => {
//         test.push(
//           docs.id
//         );
//       })
//       listDocumentDummy = test;
//       console.log(listDocumentDummy);
//     });
//   }
//   test();
//   for(let i = 0; i <= 28; i++){
//     return(
//       <Recommend style={{marginVertical: 15}} name = {listDocumentDummy[i]} />
//     );
//   }
// }


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