import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Home, Settings, Cloud, Chat} from '../screens';

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return <Icon name="home-outline" color="#000" size={20} />;
            },
            tabBarLabel: ({color, focused}) => {
              return (
                <Text style={{color: focused ? color : '#000'}}>Home</Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => {
              return <Icon name="settings-outline" color="#000" size={20} />;
            },
            tabBarLabel: ({color, focused}) => {
              return (
                <Text style={{color: focused ? color : '#000'}}>Settings</Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="Cloud"
          component={Cloud}
          options={{
            tabBarIcon: () => {
              return (
                <Icon name="cloud-upload-outline" color="#000" size={20} />
              );
            },
            tabBarLabel: ({color, focused}) => {
              return (
                <Text style={{color: focused ? color : '#000'}}>Cloud</Text>
              );
            },
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: () => {
              return (
                <Icon
                  name="chatbubble-ellipses-outline"
                  color="#000"
                  size={20}
                />
              );
            },
            tabBarLabel: ({color, focused}) => {
              return (
                <Text style={{color: focused ? color : '#000'}}>Chat</Text>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
