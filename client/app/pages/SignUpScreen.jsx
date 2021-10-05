import { Link } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
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
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
        alignSelf: "center",
        paddingBottom: 24,
    },
    link: {
        marginTop: 24,
        alignSelf: "center",
    },
});

const SignupScreen = () => {
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    // const [passwordVisibility, setPasswordVisibility] = useState(true);
    // const [rightIcon, setRightIcon] = useState('eye');
    const [signupError, setSignupError] = useState("");

    // const handlePasswordVisibility = () => {
    //   if (rightIcon === 'eye') {
    //     setRightIcon('eye-off');
    //     setPasswordVisibility(!passwordVisibility);
    //   } else if (rightIcon === 'eye-off') {
    //     setRightIcon('eye');
    //     setPasswordVisibility(!passwordVisibility);
    //   }
    // };

    const onHandleSignup = async () => {
        try {
            if (formValues?.email !== "" && formValues?.password !== "") {
                await auth.createUserWithEmailAndPassword(
                    formValues.email,
                    formValues.password
                );
            }
        } catch (error) {
            Error({ message: "Enter correct values" });
            setSignupError(error.message);
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
                <Text style={page.title}>Create new account</Text>
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
                {signupError ? <Text visible>{signupError}</Text> : null}
                <CustomButton onPress={onHandleSignup} title="Signup" />
                <Link to="/Login" style={page.link}>
                    Login
                </Link>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default SignupScreen;
