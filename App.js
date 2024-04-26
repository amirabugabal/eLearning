import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./App/Screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import TrainingKeywords from "./App/Components/Training/TrainingKeywords";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import StackNavigation from "./App/Navigations/StackNavigation";
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    outfitBold: require("./assets/fonts/Outfit-Bold.ttf"),
    outfitSemi: require("./assets/fonts/Outfit-SemiBold.ttf"),
    outfitLight: require("./assets/fonts/Outfit-Light.ttf"),
  });
  // in App.js

  library.add(
    faInfoCircle,
    faCalendar,
    faAngleLeft,
    faCheck,
    faHeart,
    faCircleCheck,
    faDumbbell,
    faPlay
  );
  return (
    <NavigationContainer>
      <TabNavigation />
      
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
