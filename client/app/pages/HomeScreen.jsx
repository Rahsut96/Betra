import React, { useContext, useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../components/CustomButton';
import AuthContext from '../context/AuthContext';
import image from '../../assets/Betra.png';

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    qrCodeView: {
        height: 250,
        padding: 10,
        justifyContent: 'center',
    },
    linkContainer: {
        width: '100%',
        borderWidth: 2,
        marginBottom: 20,
        padding: 15,
        borderRadius: 24,
    },
    linkButton: {
        borderWidth: 0,
        borderRadius: 0,
        borderBottomWidth: 2,
        marginBottom: 0,
    },
});

// eslint-disable-next-line react/prop-types
export default function HomeScreen({ navigation }) {
    const { authState } = useContext(AuthContext);
    useLayoutEffect(() => {
        if (navigation) {
            navigation.setOptions({ title: `Welcome, ${authState?.email}` });
        }
    }, [navigation, authState]);
    return (
        <SafeAreaView style={page.container}>
            <StatusBar />
            <View style={page.qrCodeView}>
                <Image source={image} width="100%" />
            </View>

            <View style={page.linkContainer}>
                <CustomButton
                    style={page.linkButton}
                    title="Item Scanner"
                    onPress={() => navigation.navigate('ItemScanningScreen')}
                />
                <CustomButton style={page.linkButton} title="Menu" />
                <CustomButton
                    style={{ ...page.linkButton, borderBottomWidth: 0 }}
                    title="Locations"
                />
            </View>
        </SafeAreaView>
    );
}
