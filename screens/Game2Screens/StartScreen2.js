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
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text, textAlign: "center" }}>Let's refresh or learn our memory to learn how to add and subtract! We're here to help you!</Text>
      <Text style={{ fontSize: 19, marginTop: 20, color: colors.text, textAlign: "center" }}>Here's a great guide to learn how to add if you are struggling on this:</Text>
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text, textAlign: "center" }}>Here's a great guide to learn how to subtract if you are struggling on this:</Text>
      <Text style={{ fontSize: 19, marginTop: 40, marginBottom: 10, color: colors.text, textAlign: "center" }}>Now, let's try some addition and subtraction problems by clicking the button below!</Text>
      <Button 
        title="Click to go to game page!"
        onPress={() => navigation.navigate("GameScreen2")}
      />
    </View>
  );
};

export default StartScreen2;

const styles = StyleSheet.create({});
