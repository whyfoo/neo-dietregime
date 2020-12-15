import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import moon from '../../assets/img/moon.jpg';
import check from '../../assets/icons/checklist.png';

const Recommend = async () => {
  const [data, setData] = useState('');

  // useEffect(() => {
  //   firestore()
  //     .collection('food')
  //     .onSnapshot((querySnapshot) => {
  //       console.log(querySnapshot);
  //     });
  // });

  setData(await firestore().collection('food').doc('nasgor').get());

  console.log(data);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={moon} style={{width: 50, height: 50, borderRadius: 5}} />
        <Text style={{marginLeft: '10%', fontSize: 18}}>Fried Moon</Text>
        <Text style={{marginLeft: '8%', fontSize: 14}}>500 cal</Text>
      </View>

      <TouchableOpacity>
        <Image
          source={check}
          style={{width: 40, height: 40, borderRadius: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Recommend;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    width: '100%',
    height: '25%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
  },
});
