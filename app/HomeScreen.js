import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';



export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={page.container}>
            <View style={page.headerView}>
                <Text>Welcome, "Name"</Text>
            </View>

            <View style={page.qrCodeView}></View>

            <Button title="Item Scanner"
            onPress={() => navigation.navigate('ItemScanningScreen')}/>
            <Button title="Menu"/>
            <Button title="Locations"/>

        </SafeAreaView>
    );
}

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
    },
    qrCodeView: {
        height: 250,
        width: 250,
        backgroundColor: "dodgerblue", 
        margin: 75,
        marginTop: 100,
    },
    headerView: {
        flexDirection: "row",
        alignItems: "baseline",
    }
});
