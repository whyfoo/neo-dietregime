import React, {Component} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import moon from '../../assets/img/moon.jpg';

const StylingRN = () => {
  return (
    <View>
      <Text style={styles.text}>Styling</Text>

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'aqua',
          borderWidth: 2,
          marginTop: 20,
          marginLeft: 20,
        }}
      />

      <View
        style={{
          padding: 12,
          backgroundColor: 'lightgrey',
          width: 212,
          borderRadius: 8,
        }}>
        <Image source={moon} style={{width: 188, height: 107}} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Sebuah Bulan Aestetik
        </Text>
        <Text
          style={{
            color: 'darkviolet',
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 16,
          }}>
          Rp 69.420.000,-
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          @Senoparty
        </Text>
        <View
          style={{
            backgroundColor: 'hotpink',
            borderRadius: 25,
            paddingVertical: 6,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'teal',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default StylingRN;
