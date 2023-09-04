import { StyleSheet, Button, View, ScrollView, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";

const images = [
  require("../../Images/fingerOneSlide.png"),
  require("../../Images/fingerTwoSlide.png"),
  require("../../Images/fingerThreeSlide.png"),
  require("../../Images/fingerFourSlide.png"),
  require("../../Images/fingerFiveSlide.png"),
  require("../../Images/fingerSixSlide.png"),
  require("../../Images/fingerSevenSlide.png"),
  require("../../Images/fingerEightSlide.png"),
  require("../../Images/fingerNineSlide.png"),
  require("../../Images/fingerTenSlide.png")
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const StartScreen1 = ({ navigation }) => {
  const { colors } = useTheme();
  const [imgActive, setImgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  }

  return (
    <ScrollView
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}
      contentContainerStyle={{
        paddingHorizontal: 20,
        alignItems: "center"
      }}
      scrollIndicatorInsets={{ right: 1 }}
    >
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          marginTop: 60,
          color: colors.text,
          textAlign: "center"
        }}
      >
        Welcome to Counting!
      </Text>
      <Text style={{ fontSize: 19, marginTop: 40, textAlign: "center", color: colors.text }}>
        Take some time to memorize the images from the slideshow below. Swipe to the left to see the rest of the slideshow!
      </Text>
      <Text style={{ fontSize: 19, marginTop: 20, textAlign: "center", color: colors.redComp }}>
        *Fingers might not change, but that's because it's run by a not-really random number generator. Just click the correct number again!
      </Text>
      <ScrollView
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.slidesWrap2}
      >
        {
          images.map((e, index) =>
            <Image 
              key={e}
              resizeMode="cover"
              style={styles.slidesWrap}
              source={e}
            />
          )
        }
      </ScrollView>
      <View
        style={styles.slidesDot}
      >
        {
          images.map((e, index) =>
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}
              >
                ⬤
            </Text>
          )
        }
      </View>
      <Text
        style={{
          fontSize: 19,
          marginTop: -30,
          marginBottom: 20,
          color: colors.text,
          textAlign: "center",
        }}
      >
        Now, let's try some problems by clicking the button below!
      </Text>
      <Button
        title="Click when you are ready!"
        onPress={() => navigation.navigate("GameScreen1")}
      />
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

export default StartScreen1;

const styles = StyleSheet.create({
  slidesWrap: {
    marginTop: 30,
    width: WIDTH * 0.9,
    height: HEIGHT * 0.4,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#6bffc6"
  },
  slidesWrap2: {
    marginTop: 10,
    width: WIDTH * 0.9,
    height: HEIGHT * 0.9,
  },
  slidesDot: {
    position: "absolute",
    bottom: 460,
    flexDirection: "row",
    alignSelf: "center"
  },
  dot: {
    margin: 3,
    color: "#888"
  },
  dotActive: {
    margin: 3,
    color: "#6bffc6"
  }
});
