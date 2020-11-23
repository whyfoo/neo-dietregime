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
  TextInput,
} from 'react-native';
import Logo from '../../assets/img/logo.png';

const Register = () => {
  const win = Dimensions.get('window');
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        {/* <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1594890716890-16b1dde476ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80',
            width: win.width,
            height: win.height / 2,
          }}
          style={{}}
        /> */}
        <Image
          source={Logo}
          style={{
            marginVertical: 50,
            padding: 10,
            width: 100,
            height: 80,
            alignSelf: 'center',
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 23,
            marginHorizontal: 20,
            paddingVertical: 20,
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: 'Quicksand',
          }}>
          Sign In
        </Text>

        <TextInput style={[styles.inputBox, {marginVertical: 20}]}>
          Username/email
        </TextInput>

        <TextInput style={styles.inputBox}>Password</TextInput>

        <TouchableOpacity
          style={[styles.tombolawal, {backgroundColor: 'teal'}]}>
          <Text style={{color: 'white'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },

  inputBox: {
    width: 280,
    height: 35,
    backgroundColor: 'gray',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 13,
    color: '#ffffff',
    marginVertical: 12,
  },

  tombolawal: {
    backgroundColor: 'green',
    width: '50%',
    paddingVertical: 10,
    marginVertical: 50,
    borderRadius: 10,
    alignItems: 'center',
  },
});
