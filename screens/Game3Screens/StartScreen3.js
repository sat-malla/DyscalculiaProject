import { StyleSheet, Button, View } from "react-native";
import React from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";

const StartScreen3 = ({ navigation }) => {
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
      <Text style={{ fontSize: 35, fontWeight: "bold", marginTop: 60, color: colors.text }}>Welcome to Game 3!</Text>
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text, textAlign: "center" }}>Let's refresh or learn our memory to learn how to read multiplication tables to multiply two numbers!</Text>
      <Text style={{ fontSize: 19, marginTop: 20, color: colors.text, textAlign: "center" }}> Click the video below to watch!</Text>
      <Text style={{ fontSize: 19, marginTop: 40, marginBottom: 10, color: colors.text, textAlign: "center" }}>Now, let's try some multiplication problems by clicking the button below!</Text>
      <Text style={{ fontSize: 19, marginTop: 5, marginBottom: 10, color: colors.text, textAlign: "center" }}> *Note: You can access the multiplication table on the top right corner if needed.</Text>
      <Button 
        title="Click to go to game page!"
        onPress={() => navigation.navigate("GameScreen3")}
      />
    </View>
  );
};

export default StartScreen3;

const styles = StyleSheet.create({});
