import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function OrderPaidScreen({ navigation }) {
    return (
        <SafeAreaView style={page.container}>
            <Text style={page.text}>
                Thanks for shopping at Betra, 
                see you soon!
            </Text>
            <View style={page.qrCodeView}></View>
        </SafeAreaView>
    );
}

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
    },
    text: {
        paddingTop: 150,
        padding: 10,
        fontSize: 17,
    },
    qrCodeView: {
        height: 250,
        width: 250,
        backgroundColor: "dodgerblue",
    },
})