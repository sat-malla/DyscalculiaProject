import {
  StyleSheet,
  Button,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import React from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";
import YoutubeIframe from "react-native-youtube-iframe";

const screenWidth = Dimensions.get("screen");

const StartScreen2 = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={{
        height: "100%",
        backgroundColor: colors.primary,
        paddingHorizontal: 5,
      }}
      contentContainerStyle={{
        alignItems: "center",
      }}
      scrollIndicatorInsets={{ right: 1 }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 60,
          color: colors.text,
        }}
      >
        Welcome to Addition & Subtraction!
      </Text>
      <Text
        style={{
          fontSize: 19,
          marginTop: 40,
          color: colors.text,
          textAlign: "center",
        }}
      >
        Let's refresh or learn our memory to learn how to add and subtract!
        We're here to help you!
      </Text>
      <Text
        style={{
          fontSize: 19,
          marginTop: 20,
          color: colors.text,
          textAlign: "center",
        }}
      >
        Here's are some great guides to learn how to add and subtract:
      </Text>
      <Text
        style={{
          fontSize: 19,
          marginTop: 20,
          marginBottom: 20,
          color: colors.text,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Easy Addition:
      </Text>
      <YoutubeIframe 
        height={300}
        width={screenWidth.width - 30}
        play={false}
        videoId="rSt9iSAZT0s"
      />
      <Text
        style={{
          fontSize: 19,
          marginTop: 20,
          marginBottom: 20,
          color: colors.text,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Hard Addition:
      </Text>
      <YoutubeIframe 
        height={300}
        width={screenWidth.width - 30}
        play={false}
        videoId="EsAs4xa6_tY"
      />
      <YoutubeIframe 
        height={300}
        width={screenWidth.width - 30}
        play={false}
        videoId="L2YTc3k99TE"
      />
      <Text
        style={{
          fontSize: 19,
          marginTop: 20,
          marginBottom: 20,
          color: colors.text,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Easy Subtraction:
      </Text>
      <YoutubeIframe 
        height={300}
        width={screenWidth.width - 30}
        play={false}
        videoId="I9SlThGGxI4"
      />
      <Text
        style={{
          fontSize: 19,
          marginTop: 20,
          marginBottom: 20,
          color: colors.text,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Hard Subtraction:
      </Text>
      <YoutubeIframe 
        height={300}
        width={screenWidth.width - 30}
        play={false}
        videoId="fSK3T0WhAS8"
      />
      <YoutubeIframe 
        height={300}
        width={screenWidth.width - 30}
        play={false}
        videoId="_nupRU7ZEmY"
      />
      <Text
        style={{
          fontSize: 19,
          marginBottom: 20,
          color: colors.text,
          textAlign: "center",
        }}
      >
        Now, let's try some addition and subtraction problems by clicking the
        button below!
      </Text>
      <Button
        title="Click to go to game page!"
        onPress={() => navigation.navigate("GameScreen2")}
      />
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default StartScreen2;

const styles = StyleSheet.create({
  video: {
    flex: 2 / 3,
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 20,
    width: 390,
    height: 200,
    borderWidth: 4,
    borderColor: "#6bffc6",
  },
});
