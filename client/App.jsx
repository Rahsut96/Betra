import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from './app/context/AuthProvider';
// import SplashScreen from "./app/SplashScreen";

import RootNavigator from './app/navigators/RootNavigator';

const App = () => (
    <SafeAreaProvider>
        <AuthProvider>
            <RootNavigator />
        </AuthProvider>
    </SafeAreaProvider>
);

export default App;
