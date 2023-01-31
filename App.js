import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import  Header  from './components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Matches from './components/Matches';

const Tab = createBottomTabNavigator ();



export default function App() {

  return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName="Feed"
    
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#FF16FF',
      tabBarStyle: {
        backgroundColor: '#0B0B44',
        borderTopWidth: 1,
        borderTopColor: '#FF16FF',
        paddingVertical: 5,
        height: 86,
      },
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Matches}
      initialParams={{curDate: new Date()}}
      options={{
        tabBarLabel: 'Matches',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="soccer-field" color={color} size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Matches}
      options={{
        tabBarLabel: 'News',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="newspaper-variant" color={color} size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Matches}
      options={{
        tabBarLabel: 'Leagues',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="trophy-variant" color={color} size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Menu"
      component={Matches}
      options={{
        tabBarLabel: 'Menu',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="menu" color={color} size={30} />
        ),
      }}
    />
  </Tab.Navigator>
  </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131627',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    // flexDirection: 'column',
  },
  main:{
    backgroundColor: '#131627',

  }
});
