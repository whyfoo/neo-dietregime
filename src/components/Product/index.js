import React, {Component} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import moon from '../../assets/img/moon.jpg';

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={moon} style={{width: 188, height: 107}} />
      <Text style={styles.title}>Sebuah Bulan Aestetik</Text>
      <Text style={styles.price}>Rp 69.420.000,-</Text>
      <Text style={styles.location}>@Senoparty</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.button}>
          <Text style={styles.beli}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: 'lightgrey',
    width: 212,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  price: {
    color: 'darkviolet',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 16,
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  button: {
    backgroundColor: 'hotpink',
    borderRadius: 25,
    paddingVertical: 6,
    marginTop: 20,
  },
  beli: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
