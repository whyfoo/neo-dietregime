import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
import lines from '../../assets/icons/threeLine.png';
import logo from '../../assets/icons/logo.png';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recommend from '../../components/Recommend';

const Profile = () => {
    return (
    <View style = {{flex: 1, backgroundColor: 'white'}}>
        
      <View style={{flex: 8, padding: 20, alignItems: 'center'}}>
        <Image source={{uri: 'https://picsum.photos/75'}} style={{width: 75, height: 75, borderRadius: 50}}/>
        <Text style={{margin: 20}}>Fullname's Profile Preference</Text>
        <Button title='Save'/>
      </View>
    </View>
    )
}

export default Profile;

const Result = () => {
    return (
        <ScrollView>
            <Recommend style={{marginVertical: 15}}/>
            <Recommend style={{marginVertical: 15}}/>
            <Recommend style={{marginVertical: 15}}/>
            <Recommend style={{marginVertical: 15}}/>
            <Recommend style={{marginVertical: 15}}/>
            <Recommend style={{marginVertical: 15}}/>
        </ScrollView>
    )}

const styles = StyleSheet.create({
    inputBox: {
        width: 280,
        height: 35,
        backgroundColor: '#c0c0c0',
        borderRadius: 25,
        paddingHorizontal: 15,
        fontSize: 13,
        color: '#5b5b5b',
        marginVertical: 12,
      },
})
