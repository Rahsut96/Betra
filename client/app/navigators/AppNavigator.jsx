import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SvgXml } from "react-native-svg";
import { StyleSheet } from "react-native";
import HomeScreen from "../pages/HomeScreen";
import ItemScanningScreen from "../pages/ItemScanningScreen";
import OrderPaidScreen from "../pages/OrderPaidScreen";
import ProfileTabNavigator from "./ProfileTabNavigator";
import CustomButton from "../components/CustomButton";
import closeIcon from "../../assets/close-icon.svg";
import userIcon from "../../assets/user-icon.svg";

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
    iconLink: {
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: 0,
        marginTop: 10,
    },
});

const ProfileIconBtn = ({ navigation }) => (
    <CustomButton
        style={styles.iconLink}
        title={<SvgXml xml={userIcon} width={40} height={40} />}
        onPress={() => navigation.navigate("Account")}
    />
);
const ProfileCloseBtn = ({ navigation }) => (
    <CustomButton
        style={styles.iconLink}
        title={<SvgXml xml={closeIcon} width={40} height={40} />}
        onPress={() => navigation.navigate("Home")}
    />
);
const AppNavigator = () => (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
                headerShown: true,
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontSize: 14,
                },
                headerRight: () => <ProfileIconBtn navigation={navigation} />,
            })}
        />
        <Stack.Screen
            name="ItemScanningScreen"
            component={ItemScanningScreen}
        />
        <Stack.Screen name="OrderPaidScreen" component={OrderPaidScreen} />

        <Stack.Screen
            name="Account"
            options={({ navigation }) => ({
                headerShown: true,
                headerShadowVisible: false,
                headerBackVisible: false,
                headerRight: () => <ProfileCloseBtn navigation={navigation} />,
            })}
            component={ProfileTabNavigator}
        />
    </Stack.Navigator>
);

export default AppNavigator;
