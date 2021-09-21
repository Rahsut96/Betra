import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
} from "react-native";

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    qrCodeView: {
        height: 250,
        width: 250,
    },
    headerView: {
        flexDirection: "row",
        alignItems: "baseline",
    },
});

// eslint-disable-next-line react/prop-types
export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={page.container}>
            <View style={page.headerView}>
                <Text>Welcome, &quot;Name&quot;</Text>
            </View>
            <View style={page.qrCodeView}>
                <Image source={{ uri: "./assets/Betra.png" }} />
            </View>
            <Button
                title="Item Scanner"
                // eslint-disable-next-line react/prop-types
                onPress={() => navigation.navigate("ItemScanningScreen")}
            />
            <Button title="Menu" />
            <Button title="Locations" />
        </SafeAreaView>
    );
}
