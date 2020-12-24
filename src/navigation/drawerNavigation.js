import React from "react";
import { createDrawerMavigator } from "@react-navigation/drawer";
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

const Drawer = createDrawerMavigator();
const DrawerNavigator = () => {
    return(
        <NavigationContainer>    
            <Drawer.Navigator>
                <Drawer.Screen name = "HomeScreen" component = {HomeScreen}/>
                <Drawer.Screen name = "NotificationScreen" component = {NotificationsScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default DrawerNavigator;