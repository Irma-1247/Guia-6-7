import React from 'react';
import Dog from '../screens/Dogs';
import Cat from '../screens/Cats';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="dog"
        component={Dog}
        options={{
          title: 'Perros',
          tabBarIcon: () => (
            <Image
              style={{height: '80%', width: '80%', resizeMode: 'contain'}}
              source={require('../img/nav/dog.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cat"
        component={Cat}
        options={{
          title: 'Gatos',
          tabBarIcon: () => (
            <Image
              style={{height: '80%', width: '80%', resizeMode: 'contain'}}
              source={require('../img/nav/cat.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
