import { StyleSheet, Button, View } from "react-native";
import React from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";

const MidScreen5 = ({ navigation }) => {
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
      <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 60, color: colors.text }}>Before we move on to challenge...</Text>
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text, textAlign: "center" }}>Let's talk about MORE comparisons! Also, the challenge will involve a different game!</Text>
      <Text style={{ fontSize: 19, marginTop: 20, color: colors.text, textAlign: "center" }}> Click the video below to watch!</Text>
      <Text style={{ fontSize: 19, marginTop: 40, marginBottom: 10, color: colors.text, textAlign: "center" }}>Now, let's try some problems by clicking the button below!</Text>
      <Button 
        title="Click to go to game page!"
        onPress={() => navigation.navigate("GameScreenChallenge5")}
      />
    </View>
  );
};

export default MidScreen5;

const styles = StyleSheet.create({});
