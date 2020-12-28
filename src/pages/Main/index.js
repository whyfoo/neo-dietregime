import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  BackHandler,
  ToastAndroid
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {startClock} from 'react-native-reanimated';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import lines from '../../assets/icons/threeLine.png';
import logo from '../../assets/icons/logo.png';
import magnify from '../../assets/icons/magnify.png';
import home from '../../assets/icons/home.png';
import profile from '../../assets/icons/profile.png';
import Header from '../../header';
import Recommend from '../../components/Recommend';
import RecommendAlt from '../../components/RecommendAlt';
import gear from '../../assets/icons/setting.png';
import { CurrentRenderContext } from '@react-navigation/native';


const Main = ({navigation}) => {
  const win = Dimensions.get('window');
  const Tab = createMaterialTopTabNavigator();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [target, setTarget] = useState();
  const [gender, setGender] = useState();
  const [day, setDay] = useState();

  const [bmr, setBmr] = useState();
  const [bmrTarget, setBmrTarget] = useState();

  const actRate = 1.55;

  const [currCall, setCurrCal] = useState();
  const [targCall, setTargCal] = useState();

  const [calSelisih, setCalSelisih] = useState();
  const [calorieTarget, setCalTarget] = useState();
  
  
  const currentUID = auth().currentUser.uid;

  const ubahUser = async () => {
    const valueA = await firestore().
                    collection('userdata').
                    doc(`${currentUID}`).
                    get(); 
    setWeight(valueA._data.weight);
    setHeight(valueA._data.height);
    setAge(valueA._data.age);
    setTarget(valueA._data.target);
    setGender(valueA._data.gender);
    setDay(valueA._data.day);
    console.log('ubahUser function berjalan');

    if(gender == 'm'){
      setBmr(66 + (13.7 * weight) + (5 * height) - (6.8 * age));
      setBmrTarget(66 + (13.7 * target) + (5 * height) - (6.8 * age))
    } else {
      setBmr(655 + (9.6 * weight) + (1.8 * height) - (4.7 * age));
      setBmrTarget(655 + (9.6 * target) + (1.8 * height) - (4.7 * age));
    }
    setCurrCal(bmr * actRate);
    setTargCal(bmrTarget * actRate);

    setCalSelisih(currCall - targCall);
    setCalTarget((currCall - (calSelisih/day)).toFixed(2));

    
  }

  // const calculate = () => {
  //   //ubahUser();
  //   // setBmr(66 + (13.7 * weight) + (5 * height) - (6.8 * age));
  //   setBmr(22);
  // }
  
  ubahUser();

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* Main Section Begin----------------------------------------------*/}

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1.5,
            paddingVertical: 30,
          }}>
          <Text style={{textAlign: 'center'}}>Current Profile</Text>
          <Image
            source={gear}
            style={{
              width: 30,
              height: 30,
              alignSelf: 'center',
              marginVertical: 20,
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: 30,
            textAlign: 'center',
          }}>
          <Text style={{}}>{calorieTarget}</Text>
          <Text style={{}}>{weight}</Text>
          <Text style={{}}>{target}</Text>
          <Text style={{}}>{day}</Text>
        </View>

        <View style={{flex: 1, paddingVertical: 30, textAlign: 'center'}}>
          <Text style={{}}>Calorie target</Text>
          <Text style={{}}>Current Weight</Text>
          <Text style={{}}>Target Weight</Text>
          <Text style={{}}>Days to go</Text>
        </View>
      </View>

      <View style={{flex: 6}}>
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: {backgroundColor: '#06BB9A'},
          }}>
          <Tab.Screen
            name="Breakfast"
            children={() => <FoodListRec judul="Breakfast" />}
          />
          <Tab.Screen
            name="Lunch"
            children={() => <FoodListRec judul="Lunch" />}
          />
          <Tab.Screen
            name="Dinner"
            children={() => <FoodListRec judul="Dinner" />}
          />
        </Tab.Navigator>
      </View>
  </View>
    
  );
};



const FoodListRec = (props) => {
  return (
    <View>
      <Text style={{textAlign: 'center', margin: 20}}>
        Our Recommendation for: {props.judul}
      </Text>
      <Recommend name = 'buryam'/>
      <Text style={{textAlign: 'center', margin: 20}}>Alternatives</Text>
      <ScrollView alwaysBounceVertical="true">
        <Recommend name = 'nasgor'/>
        <Recommend name = 'pancake'/>
        <Recommend name = 'pizza'/>
        <Recommend name = 'spaghetti'/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  footerButton: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerPressed: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
  },
});

export default Main;
