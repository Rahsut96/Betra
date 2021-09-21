import { Link } from "@react-navigation/native";
import React from "react";
import {
    SafeAreaView,
    View,
    TextInput,
    Button,
    StyleSheet,
    Text,
} from "react-native";

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 200,
        padding: 20,
    },
    signUpSection: {
        padding: 50,
    },
    text: {
        padding: 5,
        fontSize: 16,
    },
    link: {
        marginTop: 24,
        alignSelf: "center",
    },
});

const LoginScreen = () => (
    <SafeAreaView style={page.container}>
        <View>
            <Text style={page.heading}>B E T R A</Text>
        </View>

        <View style={page.signUpSection}>
            <TextInput
                style={page.text}
                placeholder="E-mail"
                placeholderTextColor="#000"
            />
            <TextInput
                style={page.text}
                secureTextEntry
                autoCompleteType="password"
                placeholder="Password"
                placeholderTextColor="#000"
            />
        </View>

        <View>
            <Button title="Login" />
            <Link to="/Signup" style={page.link}>
                Create Account
            </Link>
        </View>
    </SafeAreaView>
);
export default LoginScreen;
