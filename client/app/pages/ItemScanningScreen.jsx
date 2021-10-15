import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    StatusBar,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CustomButton from '../components/CustomButton';
import apiHelper from '../../config/apiHelper';

const cameracorner = {
    width: 50,
    height: 50,
    position: 'absolute',
};
const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight + 20,
    },
    heading: {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 16,
    },
    barcodeScannerView: {
        width: '80%',
        height: '35%',
        borderColor: '#000',
        borderRadius: 5,
        marginBottom: 20,
    },
    productsContainer: {
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    product: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    col_1: {
        width: 30,
        textAlign: 'right',
    },
    col_2: {
        width: '50%',
    },
    col_3: {
        width: 70,
        textAlign: 'right',
    },

    retry: {
        height: '100%',
        backgroundColor: '#ffffff88',
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
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    loaderHorizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

// eslint-disable-next-line react/prop-types
const ItemScanningScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const handleRemove = (code) => {
        setProducts((prod) => prod.filter((item) => item.code !== code));
    };
    const handleGetProductInfo = async (barcode) => {
        try {
            setLoading(true);
            const resdata = await apiHelper.get(`/products/${barcode}`)
                .then((res) => JSON.parse(res));
            
            if (resdata) {
                const prod = [
                    ...products,
                    {
                        ...resdata,
                        quantity: 1,
                    },
                ]
                setProducts(prod);
                // console.log('Product found',prod);
            } else {
                // console.log('Product Not found');
            }
        } catch (error) {
            // console.log(error);
        }
        setTimeout(() => {
            setLoading(false);
        }, 100);
    };
    const handleOrder = async () => {
        setLoading(true);
        try {
            const orderPayload = {
                currency: 'inr',
                tax: '35',
                discountId: '',
                orderItems: products?.map(({id,quantity, price})=> ({productId:id, discountId:null ,quantity, price}))
            };
            const resdata = await apiHelper.post(`${process.env.API_ENDPOINTS}/orders`,orderPayload).then((res) => JSON.parse(res));
            if (resdata) {
                navigation.navigate('OrderPaidScreen');
                // console.log(resdata)
            } else {
                // console.log('Order Processing');
            }
        } catch (error) {
            // console.log('Order failed');
        }
        
        setTimeout(() => {
            setLoading(false);
        }, 100);
    };

    const handleBarCodeScanned = async ({ data }) => {
        setScanned(true);
        const savedItem = products?.find((item) => item.barcode === data);
        if (savedItem?.barcode) {
            //  Update quantity if product already exist
            const restItem = products?.filter((item) => item.barcode !== data);
            const quantity = savedItem.quantity + 1;
            setProducts([
                ...restItem,
                {
                    ...savedItem,
                    quantity: savedItem.quantity + 1,
                    price: (savedItem.price / savedItem.quantity) * quantity,
                },
            ]);
        } else {
            // console.log('barcode', data)
            handleGetProductInfo(data);
        }

        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    const ProductItem = ({ index, item }) => (
        <View style={page.product} key={`${index}_${Math.random}`}>
            <View style={page.col_1}>
                <Text>{item.quantity} × </Text>
            </View>
            <View style={page.col_2}>
                <Text>
                    {item.code} {item.name}
                </Text>
            </View>
            <View style={page.col_3}>
                <Text>
                    {new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'EUR',
                    }).format(item.price)}
                </Text>
            </View>
            <View style={page.col_1}>
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
                // style={page.productsContainer}
                data={products}
                renderItem={ProductItem}
                keyExtractor={(item) => item.name}
                // extraData={selectedId}
            />
            <View style={[page.loaderContainer, page.loaderHorizontal]}>
                {loading && <ActivityIndicator color="#000000" />}
            </View>

            <CustomButton
                title="Checkout"
                disabled={!products?.length}
                onPress={() => handleOrder()}
            />
        </SafeAreaView>
    );
};
export default ItemScanningScreen;
