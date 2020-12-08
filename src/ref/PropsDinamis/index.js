import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{marginRight: 40}}>
      <Image
        source={{uri: props.gambar}}
        style={{width: 60, height: 60, borderRadius: 60 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text style={{marginVertical: 15}}>Materi component dinamis</Text>
      <ScrollView horizontal style={{flexDirection: 'row'}}>
        <Story judul="Animal" gambar="https://placeimg.com/640/480/animals" />
        <Story judul="Arch" gambar="https://placeimg.com/640/480/arch" />
        <Story judul="Nature" gambar="https://placeimg.com/640/480/nature" />
        <Story judul="People" gambar="https://placeimg.com/640/480/people" />
        <Story judul="Tech" gambar="https://placeimg.com/640/480/tech" />
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
