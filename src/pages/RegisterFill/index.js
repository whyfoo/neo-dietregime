import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export class RegisterFill extends Component {
    constructor() {
        super();
        this.state = {
          displayName: '',
          email: '',
          password: '',
          isLoading: false,
        };
      }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <TouchableOpacity
                    style={styles.tombol}
                    onPress={() => alert('itsa button')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default RegisterFill;

const styles = StyleSheet.create({
    tombol: {
      backgroundColor: 'pink',
      width: '70%',
      paddingVertical: 10,
      marginTop: 25,
      borderRadius: 10,
      alignItems: 'center',
      alignSelf: 'center',
    },
  });