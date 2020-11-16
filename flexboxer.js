import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class FlexBoxer extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'tomato', width: 50, height: 50}} />
          <View style={{backgroundColor: 'moccasin', width: 50, height: 50}} />
          <View
            style={{backgroundColor: 'aquamarine', width: 50, height: 50}}
          />
          <View style={{backgroundColor: 'navy', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text>Kiri</Text>
          <Text>Kanan</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1605382165144-9d973352d00f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>A cute doge</Text>
            <Text>1 jt subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBoxer;
