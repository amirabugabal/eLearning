import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LessonScreen from "../Screens/LessonScreen";
import HomeScreen from "../Screens/HomeScreen";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="LessonScreen" component={LessonScreen} options={{headerBackTitleVisible: false}}/>
      </Stack.Navigator>
    
  );
}

export default StackNavigation;
