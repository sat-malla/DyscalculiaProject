import { StyleSheet, Button, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";

const StartScreen1 = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 35, fontWeight: "bold", marginTop: 60, color: colors.text }}>Welcome to Game 1!</Text>
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text }}>Take some time to memorize the chart below.</Text>
      <Text style={{ fontSize: 19, marginTop: 40, marginBottom: 10, color: colors.text }}>In the following 5 problems, press the correct number of fingers shown.</Text>
      <Button 
        title="Click when you are ready!"
        onPress={() => navigation.navigate("GameScreen1")}
      />
    </View>
  );
};

export default StartScreen1;

const styles = StyleSheet.create({});
