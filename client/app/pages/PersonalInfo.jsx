import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

const page = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop: 24,
    },
    block: {
        // flex:1,
        marginBottom: 24,
    },
    title: {
        fontSize: 20,
        marginBottom: 16,
    },
    textItem: {
        marginBottom: 16,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
});

const PersonalInfo = ({ navigation }) => {
    const [profileInfo, setProfileInfo] = useState({
        name: 'Rineesh',
        lastname: 'pp',
        email: 'rineesh@gmail.com',
        dob: '15/02/1986',
        phoneNumber: '9876543210',
        cardNumber: '****3456',
    });
    const [isEditing, setEditing] = useState(false);

    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView contentContainerStyle={page.container}>
                <View style={page.block}>
                    <Text style={page.title}>Personal Information</Text>
                    {!isEditing ? (
                        <>
                            <Text style={page.textItem}>
                                {profileInfo?.name}
                            </Text>
                            <Text style={page.textItem}>
                                {profileInfo?.lastname}
                            </Text>
                            <Text style={page.textItem}>
                                {profileInfo?.dob}
                            </Text>
                            <Text style={page.textItem}>
                                {profileInfo?.email}
                            </Text>
                            <Text style={page.textItem}>
                                {profileInfo?.phoneNumber}
                            </Text>

                            <CustomButton
                                title="Edit"
                                size="small"
                                style={{ width: 100 }}
                                rounded
                                onPress={() => setEditing(true)}
                            />
                        </>
                    ) : (
                        <KeyboardAvoidingView>
                            <InputField
                                placeholder="Name"
                                autoCapitalize="none"
                                keyboardType="default"
                                textContentType="name"
                                autoFocus
                                value={profileInfo.name}
                                onChangeText={(val) =>
                                    setProfileInfo((prev) => ({
                                        ...prev,
                                        name: val,
                                    }))
                                }
                            />
                            <InputField
                                placeholder="Last name"
                                autoCapitalize="none"
                                keyboardType="default"
                                textContentType="middleName"
                                autoFocus
                                value={profileInfo.lastname}
                                onChangeText={(val) =>
                                    setProfileInfo((prev) => ({
                                        ...prev,
                                        lastname: val,
                                    }))
                                }
                            />
                            <InputField
                                placeholder="E-mail"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                autoFocus
                                value={profileInfo.email}
                                onChangeText={(val) =>
                                    setProfileInfo((prev) => ({
                                        ...prev,
                                        email: val,
                                    }))
                                }
                            />
                            <InputField
                                placeholder="Date of birth"
                                autoCapitalize="none"
                                keyboardType="numeric"
                                textContentType="none"
                                autoFocus
                                value={profileInfo.dob}
                                onChangeText={(val) =>
                                    setProfileInfo((prev) => ({
                                        ...prev,
                                        dob: val,
                                    }))
                                }
                            />
                            <InputField
                                placeholder="Phone number"
                                autoCapitalize="none"
                                keyboardType="numeric"
                                textContentType="telephoneNumber"
                                autoFocus
                                value={profileInfo.phoneNumber}
                                onChangeText={(val) =>
                                    setProfileInfo((prev) => ({
                                        ...prev,
                                        phoneNumber: val,
                                    }))
                                }
                            />
                            <CustomButton
                                title="Save"
                                onPress={() => setEditing(false)}
                            />
                        </KeyboardAvoidingView>
                    )}
                </View>

                {!isEditing && (
                    <View style={page.block}>
                        <Text style={page.title}>Payment Preferences</Text>
                        <Text style={page.textItem}>
                            {' '}
                            Card Number {profileInfo?.cardNumber}
                        </Text>

                        <CustomButton
                            title="Edit"
                            size="small"
                            style={{ width: 100 }}
                            rounded
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};
export default PersonalInfo;
