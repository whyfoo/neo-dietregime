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
} from 'react-native';

const Begin = () => {
  const win = Dimensions.get('window');
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1594890716890-16b1dde476ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80',
            width: win.width,
            height: win.height / 2,
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
            margin: 20,
            paddingVertical: 20,
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: 'Quicksand',
          }}>
          Personalized meal plans to achieve your dream!
        </Text>

        <TouchableOpacity style={styles.tombolawal}>
          <Text>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tombolawal, {backgroundColor: 'lightblue'}]}>
          <Text>Have Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Begin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },

  inputBox: {
    width: 280,
    height: 35,
    backgroundColor: 'tomato',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#ffffff',
    marginVertical: 12,
  },

  tombolawal: {
    backgroundColor: 'pink',
    width: '50%',
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});
