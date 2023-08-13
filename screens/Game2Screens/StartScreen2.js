import { StyleSheet, Button, View, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";
import { Video, ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

const StartScreen2 = ({ navigation }) => {
  const { colors } = useTheme();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

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
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          marginTop: 60,
          color: colors.text,
        }}
      >
        Welcome to Game 2!
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
          color: colors.text,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Easy Addition:
      </Text>
      <Video
        ref={video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        volume={1.0}
        style={styles.video}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      {/* <VideoPlayer 
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.CONTAIN,
          source: {
            uri: "/Users/sathvikm/Documents/DyscalculiaProject/Videos/Game2Video.MP4",
          },
        }}
      /> */}
      {/* <Video
        source={{
          uri: "/Users/sathvikm/Documents/DyscalculiaProject/Videos/Game2Video.mp4",
        }}
        style={{ width: 300, height: 300 }}
        controls={true}
        ref={(ref) => {
          this.player = ref;
        }}
      /> */}
      <Video
        ref={video}
        resizeMode="center"
        source={{
          uri:
            '/Users/sathvikm/Documents/DyscalculiaProject/Videos/Game2Video.mp4',
        }}
        style={styles.video}
        volume={1.0}
        useNativeControls
      />
      
      <Text
        style={{
          fontSize: 19,
          marginTop: 20,
          color: colors.text,
          textAlign: "center",
        }}
      >
        Hard Addition:
      </Text>
      <Text
        style={{
          fontSize: 19,
          marginTop: 20,
          color: colors.text,
          textAlign: "center",
        }}
      >
        Easy Subtraction:
      </Text>
      <Text
        style={{
          fontSize: 19,
          marginTop: 20,
          color: colors.text,
          textAlign: "center",
        }}
      >
        Hard Subtraction:
      </Text>

      <Text
        style={{
          fontSize: 19,
          marginTop: 40,
          marginBottom: 10,
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
