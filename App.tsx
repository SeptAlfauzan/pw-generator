import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Styles from "./src/utils/style";
import React from "react";
import Main from "./src/views/main";
import tw from "twrnc";

export default function App() {
  return (
    <View style={[styles.container, Styles.bg_background]}>
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
