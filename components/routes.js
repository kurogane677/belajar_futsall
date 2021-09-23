// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Schedule from './pages/schedule'
import Account from './pages/accounts'
import Home from './pages/home'


function HomeScreen() {
  return (
    <View>
      <Home />
    </View>
  );
}

function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Account />
    </View>
  );
}

function ScheduleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Schedule/>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  return (
<NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused  ? 'home'  : 'home';
            } else if (route.name === 'Schedule') {
              iconName = focused ? 'calendar-outline' : 'calendar-sharp';
            }else {
              iconName = focused ? 'person-circle-sharp' : 'person-circle-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0098F0',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Schedule" component={ScheduleScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Accounts" component={AccountScreen} options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>

  //   <NavigationContainer>
  //     // <Tab.Navigator>
  //     //   <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
  //     //   <Tab.Screen name="Schedules" component={ScheduleScreen} options={{headerShown:false}} />
  //     //   <Tab.Screen name="Accounts" component={AccountScreen} options={{headerShown:false}}/>
  //     // </Tab.Navigator>
  //   </NavigationContainer>
  );
}

export default Routes;
