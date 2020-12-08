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
} from 'react-native';
import lines from '../../assets/icons/threeLine.png';
import logo from '../../assets/icons/logo.png';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Recommend from '../../components/Recommend';

const Tab = createMaterialTopTabNavigator();

class Search extends Component {
  state = {
    input: '',
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#EDEDED',
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              height: '60%',
              width: '15%',
              borderWidth: 2,
              borderColor: 'gray',
              borderRadius: 10,
            }}>
            <TouchableOpacity>
              <Image
                source={lines}
                resizeMode="center"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: '80%',
              width: '20%',
              left: '50%',
              position: 'absolute',
            }}>
            <Image
              source={logo}
              resizeMode="center"
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
        </View>

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
      </View>
    );
  }
}

export default Search;

const Result = () => {
  return (
    <ScrollView>
      <Recommend style={{marginVertical: 15}} />
      <Recommend style={{marginVertical: 15}} />
      <Recommend style={{marginVertical: 15}} />
      <Recommend style={{marginVertical: 15}} />
      <Recommend style={{marginVertical: 15}} />
      <Recommend style={{marginVertical: 15}} />
    </ScrollView>
  );
};

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
