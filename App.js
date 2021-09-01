import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import CardScanningScreen from "./app/CardScanningScreen";
import HomeScreen from './app/HomeScreen';
import LoginScreen from './app/LoginScreen';
import SignUpScreen from './app/SignUpScreen';
import ItemScanningScreen from './app/ItemScanningScreen';
import OrderPaidScreen from './app/OrderPaidScreen';
import SplashScreen from './app/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ItemScanningScreen" component={ItemScanningScreen}/>
        <Stack.Screen name="OrderPaidScreen" component={OrderPaidScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}