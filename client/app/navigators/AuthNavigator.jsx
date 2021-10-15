import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/LoginScreen';
import Signup from '../pages/SignUpScreen';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <Login {...{ ...props }} />}
        </Stack.Screen>
        <Stack.Screen name="Signup" options={{ headerShown: false }}>
            {(props) => <Signup {...{ ...props }} />}
        </Stack.Screen>
    </Stack.Navigator>
);

export default AuthNavigator;
