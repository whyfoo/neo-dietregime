import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Hitung = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text style={{textAlign: 'center', margin: 10, fontSize: 20}}>
        {number}
      </Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class HitungClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', margin: 10, fontSize: 20}}>
          {this.state.number}
        </Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={{textAlign: 'center', margin: 10}}>
        Materi State Dinamis
      </Text>
      <Text> Hooks = const useState</Text>
      <Hitung />
      <Text> Class = State</Text>
      <HitungClass />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});
