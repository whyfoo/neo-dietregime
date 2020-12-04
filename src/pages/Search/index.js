import React from 'react'
import { StyleSheet, Text, View, InputBox } from 'react-native'

const Search = () => {
    return (
    <View style = {{flex: 1}}>
        <View 
        style={{
          flex: 1.5, 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#EDEDED', 
          paddingHorizontal: 15, }}>
        <View 
        style={{
          height: '60%', 
          width: '15%',
          borderWidth: 2,
          borderColor: 'gray',
          borderRadius: 10
          }}>
          <TouchableOpacity>
            <Image source={lines} resizeMode = 'center'
            style={{
              width: '100%',
              height: '100%',
              }}/>
            </TouchableOpacity>
        </View>

        <View 
        style={{
          height: '80%', 
          width: '20%', 
          left: '50%', 
          position: 'absolute'
          }}>
          <Image source={logo} resizeMode = 'center'
          style={{
            height: '100%',
            width: '100%',
            }}/>
        </View>
      </View>

        <View style = {{flex: 1, padding: 20}}>
            <InputBox key="Search here" style={{}}/>

        </View>

    </View>
    )
}

export default Search;

const styles = StyleSheet.create({})
