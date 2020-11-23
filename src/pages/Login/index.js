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

const Login = () => {
  const win = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1594890716890-16b1dde476ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80',
            width: "100%",
            height: "100%",
          }}
          style={{}}
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
            margin: 15,
            paddingVertical: 20,
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: 'Quicksand',
          }}>
          Sign in with your account.
        </Text>

        <TextInput style={styles.inputBox}>Username/email</TextInput>

        <TextInput style={styles.inputBox}>Password</TextInput>

        <TouchableOpacity style={styles.tombol}>
          <Text style={{color: 'white'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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

  tombol: {
    backgroundColor: 'teal',
    width: '40%',
    paddingVertical: 10,
    marginTop: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
});
