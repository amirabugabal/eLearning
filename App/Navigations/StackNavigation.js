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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={LessonScreen} />
      </Stack.Navigator>
    
  );
}

export default StackNavigation;
