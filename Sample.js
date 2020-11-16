import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width:80, height:80, backgroundColor:'pink'}}/>
      <Text>Hello</Text>
      <Text>World</Text>
      <Hanif />
      <Gambar />
      <TextInput style={{borderWidth: 1}}/>
      <Kelas />
      <Profile />
    </View>
    );
} 

const Hanif = () => {
  return (
    <Text>Hanif</Text>
  );
};

const Gambar = () => {
  return (
    <Image 
      source={{uri: 'https://placeimg.com/100/100/animals'}}
      style={{width: 100, height: 100}}
    />
  );
};

class Kelas extends Component{
  render(){
    return (
      <Text>Ini class ni</Text>
    );
  }
}

class Profile extends Component{
  render(){
    return (
      <View>
        <Image 
          source={{uri: 'https://placeimg.com/100/100/arch'}}
          style={{width: 100, height: 100, borderRadius:50}}
        />
        <Text style={{color: "teal", fontSize: 25}}>Ini profil</Text>
      </View>
    );
  }
}

export default SampleComponent;