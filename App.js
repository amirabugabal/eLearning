import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfitBold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfitSemi': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfitLight': require('./assets/fonts/Outfit-Light.ttf'),
  });
  return (
    
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
