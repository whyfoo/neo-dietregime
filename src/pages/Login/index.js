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
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';

const Login = ({navigation}) => {
  const win = Dimensions.get('window');
  return (
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss();
    }}>
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
              marginTop: 15,
              paddingVertical: 20,
              justifyContent: 'center',
              textAlign: 'center',
              fontFamily: 'Quicksand',
            }}>
            Sign in with your account.
          </Text>

          <TextInput 
          style={styles.inputBox} 
          placeholder = 'Username/Email' 
          placeholderTextColor = 'white'/>

          <TextInput 
          style={styles.inputBox} 
          placeholder = 'Password' 
          placeholderTextColor = 'white' />

          <TouchableOpacity style={styles.tombol} onPress={() => navigation.navigate('Main')}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop: 10}} onPress={() => navigation.goBack()}>
            <Text style={{color: 'tomato'}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    backgroundColor: 'mediumseagreen',
    width: '50%',
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});
