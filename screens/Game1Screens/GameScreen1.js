import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";

const GameScreen1 = ({ navigation }) => {
  const { colors } = useTheme();
  const [number, setNumber] = useState(0);
  const [ready, setReady] = useState(true);
  const [buttonClicked, isButtonClicked] = useState(false);
  const [answerCorrect, isAnswerCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [challengeModal, setChallengeModal] = useState(false);
  const [image, setImage] = useState(null);

  const buttons = [
    {
      id: "1",
      number: 1,
    },
    {
      id: "2",
      number: 2,
    },
    {
      id: "3",
      number: 3,
    },
    {
      id: "4",
      number: 4,
    },
    {
      id: "5",
      number: 5,
    },
  ];
  
  const buttons1 = [
    {
      id: "6",
      number: 6,
    },
    {
      id: "7",
      number: 7,
    },
    {
      id: "8",
      number: 8,
    },
    {
      id: "9",
      number: 9,
    },
    {
      id: "10",
      number: 10,
    },
  ];
  
  const FingerImages = [
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerOne.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerTwo.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerThree.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerFour.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerFive.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerSix.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerSeven.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerEight.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerNine.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/fingerTen.png"),
  ];

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 10) + 0;
    setNumber(randomNum);
    setImage(FingerImages[randomNum]);
  };

  const startGame = () => {
    generateNumber();
    setReady(false);
  };

  const verify = (buttonId) => {
    isButtonClicked(true);
    let realAnswer = number;
    if (count < 10) {
      if (realAnswer == buttonId) {
        generateNumber();
        isAnswerCorrect(true);
        setCount(count + 1);
      } else if (realAnswer != buttonId) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setChallengeModal(true);
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
          color: colors.text,
          marginTop: 60,
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Let's apply the skills we learned for the following problems!
      </Text>
      {ready ? (
        <TouchableOpacity
          style={{
            width: 200,
            borderWidth: 2,
            borderColor: colors.text,
            backgroundColor: "#6bffc6",
            borderRadius: 8,
            height: 50,
            padding: 10,
            alignItems: "center",
            marginTop: 50,
          }}
          onPress={startGame}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Press to Play!
          </Text>
        </TouchableOpacity>
      ) : (
        <View>
          <Text
            style={{
              color: colors.text,
              marginTop: 10,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            What is the number of fingers shown by the hand? Press the correct
            button below.
          </Text>
          {image && (
            <Image
              source={image}
              style={{ width: 400, height: 300, alignSelf: "center", marginTop: 30, resizeMode: "stretch" }}
            />
          )}
          <FlatList
            data={buttons}
            scrollEnabled={false}
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "center",
            }}
            style={{ marginTop: 50 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  borderColor: colors.text,
                  borderWidth: 1,
                  height: 40,
                  width: 40,
                  marginLeft: 15,
                  alignItems: "center",
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: "#b3ffe4",
                }}
                onPress={verify(item.id)}
              >
                <Text>{item.number}</Text>
              </TouchableOpacity>
            )}
          />
          <FlatList
            data={buttons1}
            scrollEnabled={false}
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "center",
            }}
            style={{ marginTop: -280 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  borderColor: colors.text,
                  borderWidth: 1,
                  height: 40,
                  width: 40,
                  marginLeft: 15,
                  alignItems: "center",
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: "#b3ffe4",
                }}
                onPress={verify(item.id)}
              >
                <Text>{item.number}</Text>
              </TouchableOpacity>
            )}
          />
          {buttonClicked ? (
            answerCorrect ? (
              <Text style={[styles.response, { color: colors.text }]}>👏Good Job!👏</Text>
            ) : (
              <Text style={[styles.response, { color: colors.text }]}>
                No pressure! Try it one more time!
              </Text>
            )
          ) : (
            <Text> </Text>
          )}
        </View>
      )}
      {/* Delete later once game complete */}
      <Button
        title="Temporary button, click to go to next screen"
        contentContainerStyle={{ marginBottom: 50 }}
        onPress={() => navigation.navigate("GameScreenChallenge1")}
      />
    </View>
  );
};

export default GameScreen1;

const styles = StyleSheet.create({});
