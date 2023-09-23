import { StyleSheet, Button, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "../../DarkTheme/ThemeProvider";
import { Text } from "@rneui/base";
import YoutubeIframe from "react-native-youtube-iframe";

const screenWidth = Dimensions.get("screen");

const StartScreen3 = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={{
        height: "100%",
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{
        alignItems: "center",
      }}
      scrollIndicatorInsets={{ right: 1 }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 60, color: colors.text }}>Welcome to Multiplication!</Text>
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text, textAlign: "center" }}>Let's refresh or learn our memory to learn how to read multiplication tables to multiply two numbers!</Text>
      <Text style={{ fontSize: 19, marginTop: 20, marginBottom: 20, color: colors.text, textAlign: "center" }}>Click the video below to watch!</Text>
      <YoutubeIframe 
        height={300}
        width={screenWidth.width - 30}
        play={false}
        videoId="DFIj8CFSIFo"
      />
      <Text style={{ fontSize: 19, color: colors.redComp, textAlign: "center" }}>Note: Any number multiplied by 0 gives 0!</Text>
      <Text style={{ fontSize: 19, marginTop: 40, marginBottom: 10, color: colors.text, textAlign: "center" }}>Now, let's try some multiplication problems by clicking the button below!</Text>
      <Text style={{ fontSize: 19, marginTop: 5, marginBottom: 10, color: colors.text, textAlign: "center" }}> *Note: You can access the multiplication table on the top right corner if needed.</Text>
      <Button 
        title="Click to go to game page!"
        onPress={() => navigation.navigate("GameScreen3")}
      />
      <View style={{ height: 50 }}  />
    </ScrollView>
  );
};

export default StartScreen3;

const styles = StyleSheet.create({});
