import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function CardScanningScreen(props) {

    return (
        <SafeAreaView style={page.container}>
            <Text style={page.heading}>B E T R A</Text>
            <View style={page.cardView}></View>


            <TextInput style={page.text} placeholder="Card Number"  placeholderTextColor="#000"></TextInput>
            <View style={page.cardInfoView}>
                <TextInput style={page.text} placeholder="Expiry Date"  placeholderTextColor="#000"></TextInput>
                <TextInput style={page.text} placeholder="CVV"  placeholderTextColor="#000"></TextInput>
            </View>

            <Button title="Confirm"/>
        </SafeAreaView>
    );
}

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        alignItems:"center",
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 200,
        padding:20,
    },
    cardView: {
        backgroundColor: "#fff",
        width:"80%",
        height:"25%",
        borderColor:"#000",
        borderWidth: 1,
        margin: 20,
    },
    text: {
        padding: 5,
        fontSize: 16,
    },
    cardInfoView: {
        flexDirection: "row",
    }
});