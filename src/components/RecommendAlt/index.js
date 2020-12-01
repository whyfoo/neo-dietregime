import React from 'react'
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import moon from '../../assets/img/moon.jpg';
import check from '../../assets/icons/checklist.png';

const RecommendAlt = () => {
    return (
        <View style={{
            backgroundColor: 'lightgray',
            width: '45%',
            height: '25%',
            paddingHorizontal: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'teal',
            }}>

            <View style={{alignItems: "center"}}>
                <Image source={moon} style={{width:40, height:50, borderRadius: 5}} />
            </View>

            <View>
                <Text style={{marginLeft: '5%', fontSize: 18}}>Fried Moon</Text>
                <Text style={{marginLeft: '5%', fontSize: 14}}>500 cal</Text>
            </View>

            <TouchableOpacity>
                <Image source={check} style={{width:35, height:35, borderRadius: 5}}/>
            </TouchableOpacity>

        </View>
    )
}

export default RecommendAlt;

const styles = StyleSheet.create({})
