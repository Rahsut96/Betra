import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "../context/AuthContext";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

import Firebase from "../firebaseConfig";

const auth = Firebase.auth();

const page = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

const RootNavigator = () => {
    const { authState, setAuthState } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribeAuth = auth.onAuthStateChanged(
            async (authenticatedUser) => {
                try {
                    await (authenticatedUser
                        ? setAuthState(authenticatedUser)
                        : setAuthState(null));
                    setIsLoading(false);
                } catch (error) {
                    console.log(error);
                }
            }
        );

        // unsubscribe auth listener on unmount
        return unsubscribeAuth;
    }, []);

    return isLoading ? (
        <View style={page.container}>
            <ActivityIndicator size="small" />
        </View>
    ) : (
        <NavigationContainer>
            {authState ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default RootNavigator;
