import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import userIcon from '../../assets/user-icon.svg';
import documentIcon from '../../assets/document-icon.svg';

import PersonalInfo from '../pages/PersonalInfo';
import TransactionInfo from '../pages/TransactionInfo';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
const Tab = createBottomTabNavigator();

const ProfileScreen = () => (
    <SafeAreaView style={style.container}>
        <Tab.Navigator
            // title="Account"
            options={{ headerShadowVisible: false }}
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: '#f0f0f0',
                tabBarStyle: {
                    elevation: -100,
                    height: 65,
                    width: 170,
                    borderWidth: 0,
                    shadowColor: 'transparent',
                },
            }}
        >
            <Tab.Screen
                name="Personal Info"
                component={PersonalInfo}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => <SvgXml xml={userIcon} height={35} />,
                }}
            />
            <Tab.Screen
                name="Transaction Info"
                component={TransactionInfo}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => <SvgXml xml={documentIcon} height={35} />,
                }}
            />
        </Tab.Navigator>
    </SafeAreaView>
);

export default ProfileScreen;
