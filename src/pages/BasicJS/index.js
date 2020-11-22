import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJS = () => {
  const nama = 'Haidar H';
  let usia = 24;
  const isShow = true;

  const pet = {
    nama: 'Meong',
    jenis: 'Kucing',
    usia: 2,
    isLokal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'Storm',
      betina: 'Terror',
    },
  };

  const sapaOrang = (name, age) => {
    return console.log('Hello ${name}, usia ${age}');
  };

  const namaOrang = ['Haidar', 'Hanif', 'Heisenberg'];

  typeof namaOrang;

  const sapaHewan = (objectHewan) => {
    // let hasilSapa = '';
    // if (pet.nama == 'Meong') {
    //   hasilSapa = 'Hello Meong';
    // } else {
    //   hasilSapa = 'Kamu Siapa';
    // }
    // return hasilSapa;

    return objectHewan.nama == 'Meong' ? 'Hello Meong' : 'Kamu Siapa';
  };

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>Materi Basic JavaScript</Text>
      <Text>Name: {nama}</Text>
      <Text>Age: {usia}</Text>
      <Text>{sapaHewan(pet)}</Text>

      {namaOrang.map((orang) => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJS;

const styles = StyleSheet.create({
  container: {padding: 20},
});
