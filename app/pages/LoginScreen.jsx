import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { Link } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { IOS_PLATFORM } from "../constants";
import Firebase from "../firebaseConfig";

const auth = Firebase.auth();

const page = StyleSheet.create({
    container: {
        flex: 1,
        width: "80%",
        alignSelf: "center",
        justifyContent: "center",
        paddingHorizontal: 12,
    },
    heading: {
        fontSize: 28,
        fontWeight: "bold",
        lineHeight: 150,
        padding: 20,
        alignSelf: "center",
    },
    link: {
        marginTop: 24,
        alignSelf: "center",
    },
});

const LoginScreen = () => {
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState("");

    const onHandleSignin = async () => {
        try {
            if (formValues?.email !== "" && formValues?.password !== "") {
                await auth.signInWithEmailAndPassword(
                    formValues.email,
                    formValues.password
                );
            }
        } catch (error) {
            Error({ message: "Enter correct values" });
            setLoginError(error.message);
        }
    };

    return (
        <SafeAreaView style={page.container}>
            <StatusBar />
            <KeyboardAvoidingView
                behavior={Platform.OS === IOS_PLATFORM ? "padding" : "height"}
            >
                <View>
                    <Text style={page.heading}>B E T R A</Text>
                </View>

                <InputField
                    placeholder="E-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus
                    value={formValues.email}
                    onChangeText={(text) =>
                        setFormValues((prev) => ({ ...prev, email: text }))
                    }
                />
                <InputField
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                    value={formValues.password}
                    onChangeText={(text) =>
                        setFormValues((prev) => ({ ...prev, password: text }))
                    }
                    // secureTextEntry={passwordVisibility}
                    // handlePasswordVisibility={handlePasswordVisibility}
                />
                {loginError ? <Text visible>{loginError}</Text> : null}
                <CustomButton onPress={onHandleSignin} title="Login" />

                <Link to="/Signup" style={page.link}>
                    Create Account
                </Link>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
export default LoginScreen;
