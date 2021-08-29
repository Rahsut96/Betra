import React from 'react';
import { Dimensions, StyleSheet, View, Platform } from 'react-native';

export default function App() {
  console.log(['App launched', Dimensions.get("screen"), Platform.OS]);
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row", //horizontal
      justifyContent: "center", // Alignment along the main axis
      alignItems: "center", // Alignment across the secondary axis
      alignContent: "center",
      flexWrap: "wrap"
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,

      }}></View>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
      }}></View>
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
      }}></View>
      <View style={{
        backgroundColor: "blue",
        width: 100,
        height: 100,
      }}></View>
      <View style={{
        backgroundColor: "green",
        width: 100,
        height: 100,
      }}></View>


    </View>
  );
}
