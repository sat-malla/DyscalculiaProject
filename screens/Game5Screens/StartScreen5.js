import { StyleSheet, Button, View, Dimensions } from "react-native";
import React from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";
import YoutubeIframe from "react-native-youtube-iframe";

const screenWidth = Dimensions.get("screen");

const StartScreen5 = ({ navigation }) => {
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
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 60, color: colors.text }}>Welcome to Comparisons!</Text>
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text, textAlign: "center" }}>Let's learn or refresh our memory about Comparisons!</Text>
      <Text style={{ fontSize: 19, marginTop: 20, marginBottom: 20, color: colors.text, textAlign: "center" }}> Click the video below to watch!</Text>
      <YoutubeIframe 
        height={300}
        width={screenWidth.width - 30}
        play={false}
        videoId="d43D-o6Bzac"
      />
      <Text style={{ fontSize: 19, marginBottom: 10, color: colors.text, textAlign: "center" }}>Now, let's try some problems by clicking the button below!</Text>
      <Button 
        title="Click to go to game page!"
        onPress={() => navigation.navigate("GameScreen5")}
      />
    </View>
  );
};

export default StartScreen5;

const styles = StyleSheet.create({});
