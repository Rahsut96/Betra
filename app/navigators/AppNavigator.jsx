import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../pages/HomeScreen";
import ItemScanningScreen from "../pages/ItemScanningScreen";
import OrderPaidScreen from "../pages/OrderPaidScreen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
            name="ItemScanningScreen"
            component={ItemScanningScreen}
        />
        <Stack.Screen name="OrderPaidScreen" component={OrderPaidScreen} />
    </Stack.Navigator>
);

export default AppNavigator;
