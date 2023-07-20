import { StyleSheet, Button, View } from "react-native";
import React from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";

const StartScreen2 = ({ navigation }) => {
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
      <Text style={{ fontSize: 35, fontWeight: "bold", marginTop: 60, color: colors.text }}>Welcome to Game 2!</Text>
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text, textAlign: "center" }}>Let's refresh our memory to learn how to add and subtract!</Text>
      <Text style={{ fontSize: 19, marginTop: 20, color: colors.text }}>Here's a great guide to learn how to add:</Text>
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text }}>Here's a great guide to learn how to subtract:</Text>
      <Text style={{ fontSize: 19, marginTop: 40, marginBottom: 10, color: colors.text }}>Now, let's try 10 addition and subtraction problems by clicking the button below!</Text>
      <Button 
        title="Click when you are ready!"
        onPress={() => navigation.navigate("GameScreen2")}
      />
    </View>
  );
};

export default StartScreen2;

const styles = StyleSheet.create({});
