import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingRN from './pages/StylingRN';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import BasicJS from './pages/BasicJS';
import Begin from './pages/Begin';
import Login from './pages/Login';
import Main from './pages/Main';
import ProfileContent from './pages/ProfileContent';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <View>
    //   <ScrollView>
    //     {/* <SampleComponent />
    //     {/* <StylingRN /> */}
    //     {/* <FlexBox /> */}
    //     {/* <Position /> */}
    //     {/* <PropsDinamis /> */}
    //     {/* <StateDinamis /> */}
    //     {/* <Communication /> */}
    //     {/* <BasicJS /> */}
    //     {/* <Begin /> */}
    //   </ScrollView>
    // </View>

    <NavigationContainer>
      <Stack.Navigator headerMode ="none" initialRouteName="Begin">
        <Stack.Screen name="Begin" component={Begin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Profile" component={ProfileContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
