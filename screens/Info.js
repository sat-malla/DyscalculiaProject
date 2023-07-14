import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../DarkTheme/ThemeProvider.js";

const Info = () => {
  const { colors} = useTheme();

  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50, color: colors.text }}>
        What is this App?
      </Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50, color: colors.text }}>
        Our Purpose
      </Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50, color: colors.text }}>
        Single Player Games
      </Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 50, color: colors.text }}>
        About the Developer
      </Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
