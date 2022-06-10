import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
import { StatusBar } from 'expo-status-bar';
import { Link, NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { Text } from 'react-native';

const prefix = Linking.createURL('/'), universalDomain = "http://scanda.com";

const config = {
  screens: {
    ConfirmLogin: "confirm-login/:email"
  }
};

export default function App() {
  const linking = {
    prefixes: [prefix,universalDomain],
    config
  };

  return (
    <NavigationContainer 
      linking={linking}
      fallback={<Text>Please wait..</Text>}
    >
      <SafeAreaProvider>
      <RootNavigation/>
    </SafeAreaProvider>
    <StatusBar style="auto" />
    </NavigationContainer>
  );
}