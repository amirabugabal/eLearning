import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../Utils/Colors';
import TrainingScreen from '../Screens/TrainingScreen';
import LibraryScreen from '../Screens/LibraryScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import TrainingKeywords from '../Components/Training/TrainingKeywords';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: Colors.lightPrimary,
        tabBarIconStyle:{backgroundColor:Colors.lightPrimary},
        tabBarStyle:{borderTopLeftRadius: 20,borderTopRightRadius: 20},
        
        
    }}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon:({color=Colors.primary,size})=>(
            <FontAwesome6 name="compass" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="Training" component={TrainingScreen} 
      options={{
        tabBarIcon:({color,size})=>(
            <FontAwesome6 name="dumbbell" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="My Library" component={LibraryScreen} 
      options={{
        tabBarIcon:({color,size})=>(
            <Ionicons name="newspaper-outline" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
        tabBarIcon:({color,size})=>(
            <Ionicons name="settings-outline" size={size} color={color} />
        )
      }}/>
    </Tab.Navigator>
  )
}