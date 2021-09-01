import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';


export default function ItemScanningScreen({ navigation }) {
    return (
        <SafeAreaView style={page.container}>
            <Text style={page.heading}>Scan Barcode</Text>
            <View style={page.barcodeScannerView}></View>

            <Button title="Checkout"
            onPress={() => navigation.navigate('OrderPaidScreen')}/>
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
        fontSize: 14,
        paddingTop: 30,
    },
    barcodeScannerView: {
        backgroundColor: "#fff",
        width:"80%",
        height:"25%",
        borderColor:"#000",
        borderWidth: 1,
        marginBottom: 20,
    },
});