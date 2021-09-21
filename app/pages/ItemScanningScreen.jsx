import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    heading: {
        fontSize: 14,
        paddingTop: 30,
    },
    barcodeScannerView: {
        backgroundColor: "#fff",
        width: "80%",
        height: "25%",
        borderColor: "#000",
        borderWidth: 1,
        marginBottom: 20,
    },
});

// eslint-disable-next-line react/prop-types
const ItemScanningScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // eslint-disable-next-line no-alert
        // eslint-disable-next-line no-undef
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <SafeAreaView style={page.container}>
            <View style={page.barcodeScannerView}>
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                    }
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && (
                    <Button
                        title="Tap to Scan Again"
                        onPress={() => setScanned(false)}
                    />
                )}
            </View>

            <Button
                title="Checkout"
                // eslint-disable-next-line react/prop-types
                onPress={() => navigation.navigate("OrderPaidScreen")}
            />
        </SafeAreaView>
    );
};
export default ItemScanningScreen;