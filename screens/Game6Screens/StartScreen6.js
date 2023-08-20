import { StyleSheet, Button, View, Dimensions } from "react-native";
import React from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";
import YoutubeIframe from "react-native-youtube-iframe";

const screenWidth = Dimensions.get("screen");

const StartScreen6 = ({ navigation }) => {
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
      <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 60, color: colors.text }}>Welcome to Arranging Numbers!</Text>
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text, textAlign: "center" }}>Let's learn or refresh our memory about how to organize numbers!</Text>
      <Text style={{ fontSize: 19, marginTop: 20, marginBottom: 20, color: colors.text, textAlign: "center" }}> Click the video below to watch!</Text>
      <YoutubeIframe
        height={300}
        width={screenWidth.width - 30}
        play={false}
        videoId="3KJvGsBQ4jc"
      />
      <Text style={{ fontSize: 19, marginBottom: 10, color: colors.text, textAlign: "center" }}>Now, let's try some problems by clicking the button below!</Text>
      <Button 
        title="Click to go to game page!"
        onPress={() => navigation.navigate("GameScreen6")}
      />
    </View>
  );
};

export default StartScreen6;

const styles = StyleSheet.create({});
