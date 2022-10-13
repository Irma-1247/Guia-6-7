import React from 'react';
import Home from '../screens/HomeStack';
import About from '../screens/AboutStack';
import Contact from '../screens/ContactStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} options={{title: 'Home'}} />
      <Tab.Screen
        name="contact"
        component={Contact}
        options={{title: 'Contact'}}
      />
      <Tab.Screen name="about" component={About} options={{title: 'About'}} />
    </Tab.Navigator>
  );
}
