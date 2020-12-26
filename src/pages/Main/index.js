import React, {useState} from 'react';
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

const Main = ({navigation}) => {

  const win = Dimensions.get('window');
  const [isHome, setHome] = useState(true);
  const [isSearch, setSearch] = useState(false);
  const [isProfile, setProfile] = useState(false);
  const Tab = createMaterialTopTabNavigator();
  const changeTab = (param) => {
    if (param == 'home') {
      setHome(true);
      setSearch(false);
      setProfile(false);
    } else if (param == 'search') {
      setHome(false);
      setSearch(true);
      setProfile(false);
    } else if (param == 'profile') {
      setHome(false);
      setSearch(false);
      setProfile(true);
    } else {
      setHome(true);
      setSearch(false);
      setProfile(false);
    }
  };


  return (

    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* Header Section Begin-------------------------------------*/}
      {/* <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#EDEDED',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            height: '60%',
            width: '15%',
            justifyContent: 'center',
            // borderWidth: 2,
            // borderColor: 'gray',
            // borderRadius: 10
          }}>
          <TouchableOpacity>
            <Image
              source={lines}
              resizeMode="center"
              style={{
                width: '80%',
                height: '80%',
                marginLeft: 5,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: '80%',
            width: '20%',
            left: '50%',
            position: 'absolute',
          }}>
          <Image
            source={logo}
            resizeMode="center"
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
      </View> */}
      {/* Header Section End----------------------------------------------*/}

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
          <Text style={{}}>1566</Text>
          <Text style={{}}>150-169g</Text>
          <Text style={{}}>70-188g</Text>
          <Text style={{}}>42-69g</Text>
        </View>

        <View style={{flex: 1, paddingVertical: 30, textAlign: 'center'}}>
          <Text style={{}}>Calorie target</Text>
          <Text style={{}}>Carbs</Text>
          <Text style={{}}>Protein</Text>
          <Text style={{}}>Fat</Text>
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
      
      {/*Main Section End ---------------------------------------------------*/}
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
