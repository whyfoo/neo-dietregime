import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import Begin from './pages/Begin';
import Login from './pages/Login';
import Main from './pages/Main';
import HomePages from './pages/HomePages';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Header from './header';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const win = Dimensions.get('window');

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
      <Stack.Navigator initialRouteName="Main" >
        <Stack.Screen name="Begin" component={Begin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={HomePages} options={{headerTitle: props => <Header />,
      headerStyle: {
        height: win.height/9,
        backgroundColor: '#EDEDED'
      }}}/> 
        <Stack.Screen name="Profile" component={Profile} options={{headerTitle: props => <Header />}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
