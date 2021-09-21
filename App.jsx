import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthProvider from "./app/context/AuthProvider";
// import SplashScreen from "./app/SplashScreen";

import AuthContext from "./app/context/AuthContext";
import AppNavigator from "./app/navigators/AppNavigator";
import AuthNavigator from "./app/navigators/AuthNavigator";

const Stack = createNativeStackNavigator();
const App = () => (
    <AuthProvider>
        <NavigationContainer>
            <AuthContext.Consumer>
                {({ authState }) => (
                    <Stack.Navigator headerMode="none">
                        {authState?.logedIn ? (
                            <Stack.Screen
                                name="AppNavigator"
                                component={AppNavigator}
                            />
                        ) : (
                            <Stack.Screen
                                name="AuthScreens"
                                component={AuthNavigator}
                            />
                        )}
                    </Stack.Navigator>
                )}
            </AuthContext.Consumer>
        </NavigationContainer>
    </AuthProvider>
);

export default App;
