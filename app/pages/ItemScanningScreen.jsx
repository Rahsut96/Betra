import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    StatusBar,
    FlatList,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
// import { v4 as uuidv4 } from "react-native-uuid";
import CustomButton from "../components/CustomButton";

const cameracorner = {
    width: 50,
    height: 50,
    position: "absolute",
};
const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight + 20,
    },
    heading: {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 16,
    },
    barcodeScannerView: {
        width: "80%",
        height: "35%",
        borderColor: "#000",
        borderRadius: 5,
        marginBottom: 20,
    },
    productsContainer: {
        width: "100%",
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    product: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    col_1: {
        width: 30,
        textAlign: "right",
    },
    col_2: {
        width: "70%",
    },

    retry: {
        height: "100%",
        backgroundColor: "#ffffff88",
        borderWidth: 0,
    },
    removeItem: {
        marginBottom: 0,
        borderWidth: 0,
    },
    borderTopLeft: {
        ...cameracorner,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        left: 0,
    },
    borderTopRight: {
        ...cameracorner,
        borderTopWidth: 3,
        borderRightWidth: 3,
        right: 0,
    },
    borderBottomLeft: {
        ...cameracorner,
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        left: 0,
        bottom: 0,
    },
    borderBottomRight: {
        ...cameracorner,
        borderBottomWidth: 3,
        borderRightWidth: 3,
        right: 0,
        bottom: 0,
    },
});

// eslint-disable-next-line react/prop-types
const ItemScanningScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        const sameItem = products?.find((item) => item.code === data);
        if (sameItem?.code) {
            //  Update quantity if product already exist
            const restItem = products?.filter((item) => item.code !== data);
            setProducts([
                ...restItem,
                { ...sameItem, quantity: sameItem.quantity + 1 },
            ]);
        } else {
            setProducts([
                ...products,
                {
                    type,
                    code: data,
                    price: "$23",
                    quantity: 1,
                    name: `item ${products.length + 1}`,
                },
            ]);
        }

        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const handleRemove = (code) => {
        setProducts((prod) => prod.filter((item) => item.code !== code));
    };
    const renderItem = ({ index, item }) => (
        <View style={page.product} key={index}>
            <View style={page.col_1}>
                <Text>{item.quantity} × </Text>
            </View>
            <View style={page.col_2}>
                <Text>
                    {item.code} {item.name}
                </Text>
            </View>
            <View style={page.col_3}>
                <Text>{item.price}</Text>
            </View>
            <View style={page.col_4}>
                <CustomButton
                    title="✖"
                    size="small"
                    style={page.removeItem}
                    onPress={() => handleRemove(item.code)}
                />
            </View>
        </View>
    );
    return (
        <SafeAreaView style={page.container}>
            <Text style={page.heading}>Scan Barcode</Text>
            <View style={page.barcodeScannerView}>
                <View style={page.borderTopLeft} />
                <View style={page.borderTopRight} />
                <BarCodeScanner
                    onBarCodeScanned={
                        scanned ? undefined : handleBarCodeScanned
                    }
                    style={StyleSheet.absoluteFillObject}
                />
                <View style={page.borderBottomLeft} />
                <View style={page.borderBottomRight} />
                {scanned && (
                    <CustomButton
                        style={page.retry}
                        title="Tap to Scan Again"
                        onPress={() => setScanned(false)}
                    />
                )}
            </View>
            <FlatList
                style={page.productsContainer}
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                // extraData={selectedId}
            />

            <CustomButton
                title="Checkout"
                disabled={!products?.length}
                onPress={() => navigation.navigate("OrderPaidScreen")}
            />
        </SafeAreaView>
    );
};
export default ItemScanningScreen;
