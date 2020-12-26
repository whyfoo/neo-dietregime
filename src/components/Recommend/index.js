import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import moon from '../../assets/img/moon.jpg';
import check from '../../assets/icons/checklist.png';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [], nama: '', cal: '', img: null};
  }

  async componentDidMount() {
    const valueA = await firestore().collection('food').doc(this.props.name).get();
    this.setState({data: valueA});
    this.setState({nama: this.state.data._data.name});
    this.setState({cal: this.state.data._data.cal});
    this.setState({img: `${this.state.data._data.img}`});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: `${this.state.img}`}}
            style={{width: 50, height: 50, borderRadius: 5}}
          />
          <Text style={{marginLeft: '10%', fontSize: 18}}>
            {this.state.nama}
          </Text>
          <Text style={{marginLeft: '8%', fontSize: 14}}>
            {this.state.cal} cal
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={check}
            style={{width: 40, height: 40, borderRadius: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

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
