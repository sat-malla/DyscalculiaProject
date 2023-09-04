import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "../DarkTheme/ThemeProvider.js";

const TermsAndCo = () => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={{
        height: "100%",
        backgroundColor: colors.primary,
      }}
      contentContainerStyle={{
        alignItems: "center",
        paddingHorizontal: 20,
      }}
      scrollIndicatorInsets={{ right: 1 }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
        }}
      >
        Terms & Conditions
      </Text>
      <Text>
        
      </Text>
    </ScrollView>
  );
};

export default TermsAndCo;

const styles = StyleSheet.create({});
