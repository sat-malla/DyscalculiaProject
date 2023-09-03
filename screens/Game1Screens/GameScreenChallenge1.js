import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useGlobalState } from "/Users/sathvikm/Documents/DyscalculiaProject/screens/RewardSystem.js";

const GameScreenChallenge1 = ({ navigation }) => {
  const { colors } = useTheme();
  const [number, setNumber] = useState(0);
  const [ready, setReady] = useState(true);
  const [buttonClicked, isButtonClicked] = useState(false);
  const [answerCorrect, isAnswerCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [finishModal, setFinishModal] = useState(false);
  const [image, setImage] = useState(null);
  const [userFruit, setUserFruit] = useGlobalState("game1Fruit");

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

  const AppleImages = [
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/AppleImages/oneApple.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/AppleImages/twoApple.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/AppleImages/threeApple.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/AppleImages/fourApple.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/AppleImages/fiveApple.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/AppleImages/sixApple.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/AppleImages/sevenApple.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/AppleImages/eightApple.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/AppleImages/nineApple.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/AppleImages/tenApple.png"),
  ];

  const OrangeImages = [
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/OrangeImages/oneOrange.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/OrangeImages/twoOrange.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/OrangeImages/threeOrange.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/OrangeImages/fourOrange.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/OrangeImages/fiveOrange.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/OrangeImages/sixOrange.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/OrangeImages/sevenOrange.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/OrangeImages/eightOrange.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/OrangeImages/nineOrange.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/OrangeImages/tenOrange.png"),
  ];

  const BananaImages = [
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/BananaImages/oneBanana.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/BananaImages/twoBanana.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/BananaImages/threeBanana.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/BananaImages/fourBanana.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/BananaImages/fiveBanana.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/BananaImages/sixBanana.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/BananaImages/sevenBanana.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/BananaImages/eightBanana.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/BananaImages/nineBanana.png"),
    require("/Users/sathvikm/Documents/DyscalculiaProject/Images/BananaImages/tenBanana.png"),
  ];

  const finishGame = () => {
    setFinishModal(false);
    navigation.navigate("SinglePlayer");
  };

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setNumber(randomNum);
    if (userFruit == "apple") {
      setImage(AppleImages[randomNum - 1]);
    } else if (userFruit == "orange") {
      setImage(OrangeImages[randomNum - 1]);
    } else if (userFruit == "banana") {
      setImage(BananaImages[randomNum - 1]);
    }
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
      setFinishModal(true);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
      }}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={finishModal}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!setFinishModal);
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <View
            style={[
              styles.modalVw,
              {
                borderColor: colors.text,
                borderWidth: 3,
              },
            ]}
          >
            <LinearGradient
              colors={["#6bffc6", colors.gradientEndCol]}
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 0.8 }}
              style={{
                borderRadius: 16,
                height: 208,
                width: 378,
                alignItems: "center",
              }}
            >
              {/* Give confetti image credit: https://unsplash.com/@dendrolago89 */}
              <ImageBackground
                source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/confetti.jpeg")}
                imageStyle={{ opacity: 0.2 }}
                animationType="fade"
                style={{ width: 378, height: 318, padding: 35 }}
              >
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Congratulations! Now you know how to count numbers with your
                  fingers!
                </Text>
                <Pressable
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    width: 150,
                    backgroundColor: "#6bffc6",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: 10,
                    marginBottom: 30,
                    alignSelf: "center",
                  }}
                  onPress={() => finishGame()}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Finish
                  </Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                </Pressable>
              </ImageBackground>
            </LinearGradient>
          </View>
        </View>
      </Modal>
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
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              color: colors.text,
              marginTop: 10,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Count the number of fruits on your screen!
          </Text>
          {image && (
            <Image
              source={image}
              style={{
                width: 400,
                height: 300,
                alignSelf: "center",
                marginTop: 30,
                resizeMode: "stretch",
              }}
            />
          )}
          {buttonClicked ? (
            answerCorrect ? (
              <Text style={[styles.response, { color: colors.text }]}>
                👏 Good Job! 👏
              </Text>
            ) : (
              <Text style={[styles.response, { color: colors.text }]}>
                No pressure! Try it one more time!
              </Text>
            )
          ) : (
            <Text> </Text>
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
                onPress={() => verify(item.id)}
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
            style={{ marginTop: -240 }}
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
                onPress={() => verify(item.id)}
              >
                <Text>{item.number}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default GameScreenChallenge1;

const styles = StyleSheet.create({
  modalVw: {
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  response: {
    marginTop: 40,
    fontSize: 20,
    textAlign: "center",
  },
});
