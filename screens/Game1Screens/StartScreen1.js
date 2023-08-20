import { StyleSheet, Button, View, ActivityIndicator, ScrollView, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";

const images = [
  require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerOneSlide.png"),
  require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerTwoSlide.png"),
  require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerThreeSlide.png"),
  require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerFourSlide.png"),
  require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerFiveSlide.png"),
  require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerSixSlide.png"),
  require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerSevenSlide.png"),
  require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerEightSlide.png"),
  require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerNineSlide.png"),
  require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerTenSlide.png")
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
    <View
      style={{
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          marginTop: 60,
          color: colors.text,
        }}
      >
        Welcome to Counting!
      </Text>
      <Text style={{ fontSize: 19, marginTop: 40, color: colors.text }}>
        Take some time to memorize the images from the slideshow below.
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
              resizeMode="stretch"
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
          marginTop: -70,
          marginBottom: 50,
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
      <View style={{ height: 70 }} />
    </View>
  );
};

export default StartScreen1;

const styles = StyleSheet.create({
  slidesWrap: {
    marginTop: 30,
    width: WIDTH * 0.9,
    height: HEIGHT * 0.28,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#6bffc6"
  },
  slidesWrap2: {
    marginTop: 30,
    width: WIDTH * 0.9,
    height: HEIGHT * 0.28,
  },
  slidesDot: {
    position: "absolute",
    bottom: 280,
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
