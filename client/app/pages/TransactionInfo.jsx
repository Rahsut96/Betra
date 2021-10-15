import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';
import documentIcon from '../../assets/document-icon.svg';

const page = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingTop: 24,
    },
    block: {
        // flex:1,
        marginBottom: 24,
    },
    title: {
        fontSize: 20,
        marginBottom: 16,
    },
    info: {
        width: '70%',
    },
    textItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingBottom: 8,
    },
});

const TransactionInfo = () => {
    // const [openId, setOpenId] = useState(null);
    const [transactions] = useState([
        {
            date: '23 July',
            price: '$23',
            data: {},
        },
        {
            date: '23 July',
            price: '$23',
            data: {},
        },
        {
            date: '23 July',
            price: '$23',
            data: {},
        },
        {
            date: '23 July',
            price: '$23',
            data: {},
        },
    ]);

    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView contentContainerStyle={page.container}>
                <View style={page.block}>
                    <Text style={page.title}>Past Transaction</Text>
                    {transactions?.map((item) => (
                        <View style={page.textItem}>
                            <SvgXml xml={documentIcon} height={24} width={24} />
                            <View style={page.info}>
                                <Text>{item?.date} </Text>
                            </View>

                            <Text>{item?.price}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default TransactionInfo;
