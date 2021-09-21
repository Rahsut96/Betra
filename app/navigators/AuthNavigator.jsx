// import React, { memo } from "react";
// import {
//     createStackNavigator,
//     // TransitionPresets,
// } from "@react-navigation/stack";
// import Login from "../pages/LoginScreen";
// // import Signup from "../pages/SignUpScreen";

// const Stack = createStackNavigator();
// const AuthLayout = () => (
//     <Stack.Navigator initialRouteName="Login" headerMode="none">
//         <Stack.Screen
//             name="Login"
//             options={{
//                 headerShown: false,
//                 // ...TransitionPresets.SlideFromRightIOS,
//             }}
//         >
//             {(props) => <Login {...{ ...props }} />}
//         </Stack.Screen>
//         <Stack.Screen
//             name="Signup"
//             options={{
//                 headerShown: false,
//                 ...TransitionPresets.SlideFromRightIOS,
//             }}
//         >
//             {(props) => <Signup {...{ ...props }} />}
//         </Stack.Screen>
//     </Stack.Navigator>
// );

// export default memo(AuthLayout);

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "../pages/HomeScreen";
import Login from "../pages/LoginScreen";
import Signup from "../pages/SignUpScreen";
// import ItemScanningScreen from "../pages/ItemScanningScreen";
// import OrderPaidScreen from "../pages/OrderPaidScreen";

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
    <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen
            name="Login"
            options={{
                headerShown: false,
                // ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            {(props) => <Login {...{ ...props }} />}
        </Stack.Screen>
        <Stack.Screen
            name="Signup"
            options={{
                headerShown: false,
                // ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            {(props) => <Signup {...{ ...props }} />}
        </Stack.Screen>
    </Stack.Navigator>
);

export default AuthNavigator;
