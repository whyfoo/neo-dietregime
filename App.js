import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './Sample';
import StylingRNComponent from './StylingRN';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingRNComponent />
      </ScrollView>
    </View>
  );
};


export default App;