import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
});
// eslint-disable-next-line no-unused-vars
export default function OrderPaidScreen(props) {
    return (
        <SafeAreaView style={page.container}>
            <Text style={page.text}>
                Thanks for shopping at Betra, see you soon!
            </Text>
            <View style={page.qrCodeView}>
                <Image source={{ uri: "./assets/Betra.png" }} />
            </View>
        </SafeAreaView>
    );
}
