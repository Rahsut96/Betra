import { Link } from "@react-navigation/native";
import React from "react";
import {
    SafeAreaView,
    TextInput,
    Text,
    StyleSheet,
    View,
    Button,
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
export default function SignUpScreen() {
    return (
        <SafeAreaView style={page.container}>
            <View>
                <Text style={page.heading}>B E T R A</Text>
            </View>

            <View style={page.signUpSection}>
                <TextInput
                    style={page.text}
                    placeholder="Name"
                    placeholderTextColor="#000"
                />
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
                <TextInput
                    style={page.text}
                    secureTextEntry
                    autoCompleteType="password"
                    placeholder="Repeat Password"
                    placeholderTextColor="#000"
                />
            </View>

            <View>
                <Button title="Continue" />
                <Link to="/Login" style={page.link}>
                    Login
                </Link>
            </View>
        </SafeAreaView>
    );
}
