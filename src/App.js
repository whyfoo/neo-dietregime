import React from 'react';
import {View, ScrollView} from 'react-native';
import Begin from './pages/Begin';
import Login from './pages/Login';
import Main from './pages/Main';
import ProfileContent from './pages/ProfileContent';
import HomePages from './pages/HomePages'

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
        <Stack.Screen name="Main" component={HomePages} />
        <Stack.Screen name="Profile" component={ProfileContent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
