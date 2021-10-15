import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import PropType from 'prop-types';

import image from '../../assets/Betra.png';

const page = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    text: {
        paddingTop: 150,
        padding: 10,
        fontSize: 17,
    },
    qrCodeView: {
        padding: 10,
    },
});
// eslint-disable-next-line no-unused-vars
function OrderPaidScreen({ navigation }) {
    return (
        <SafeAreaView style={page.container}>
            <Text style={page.text}>
                Thanks for shopping at Betra, see you soon!
            </Text>
            <View style={page.qrCodeView}>
                {/* TODO: QRCODE Scanner */}
                <TouchableOpacity onPress={() => navigation?.navigate('Home')}>
                    <Image source={image} width="100%" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

OrderPaidScreen.propTypes = {
    navigation: PropType.shape({ navigate: PropType.func }),
};
OrderPaidScreen.defaultProps = {
    navigation: null,
};
export default OrderPaidScreen;
