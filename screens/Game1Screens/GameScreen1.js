import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Image,
  ActivityIndicator,
  ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../DarkTheme/ThemeProvider";
import { useGlobalState } from "../RewardSystem";

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
  require("../../Images/fingerOne.png"),
  require("../../Images/fingerTwo.png"),
  require("../../Images/fingerThree.png"),
  require("../../Images/fingerFour.png"),
  require("../../Images/fingerFive.png"),
  require("../../Images/fingerSix.png"),
  require("../../Images/fingerSeven.png"),
  require("../../Images/fingerEight.png"),
  require("../../Images/fingerNine.png"),
  require("../../Images/fingerTen.png"),
];

const GameScreen1 = ({ navigation }) => {
  const { colors } = useTheme();
  const [number, setNumber] = useState(0);
  const [ready, setReady] = useState(true);
  const [buttonClicked, isButtonClicked] = useState(false);
  const [answerCorrect, isAnswerCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [challengeModal, setChallengeModal] = useState(false);
  const [image, setImage] = useState(null);
  const [fruit, setFruit] = useGlobalState("game1Fruit");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setNumber(randomNum);
    setImage(FingerImages[randomNum - 1]);
  };

  const startGame = () => {
    generateNumber();
    setReady(false);
  };

  const nextGameApple = () => {
    setFruit("apple");
    setChallengeModal(false);
    navigation.navigate("GameScreenChallenge1");
  };

  const nextGameOrange = () => {
    setFruit("orange");
    setChallengeModal(false);
    navigation.navigate("GameScreenChallenge1");
  };

  const nextGameBanana = () => {
    setFruit("banana");
    setChallengeModal(false);
    navigation.navigate("GameScreenChallenge1");
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
  };

  return (
    <ScrollView
      style={{
        backgroundColor: colors.primary,
        flex: 1
      }}
      contentContainerStyle={{
        alignItems: "center",
        paddingHorizontal: 15,
      }}
      scrollIndicatorInsets={{ right: 1 }}
    >
      {loading ? (
        <View
          style={{
            marginTop: 370,
          }}
        >
          <ActivityIndicator size="large" color="#6bffc6" animating={loading} />
        </View>
      ) : (
        <View
          style={{
            alignItems: "center",
            backgroundColor: colors.primary,
          }}
        >
          <Modal
            animationType="fade"
            transparent={true}
            visible={challengeModal}
            onRequestClose={() => {
              Alert.alert("Closed");
              setModalVisible(!challengeModal);
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
                    borderRadius: 16,
                  },
                ]}
              >
                <LinearGradient
                  colors={["#6bffc6", colors.gradientEndCol]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 1, y: 0.8 }}
                  style={{
                    borderRadius: 16,
                    height: 218,
                    width: 378,
                    alignItems: "center",
                    padding: 5,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 25,
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Congratulations! Before we move on to the challenge, pick
                    your favorite fruit!
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 30,
                      marginBottom: 30,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          borderRadius: 10,
                          padding: 10,
                          backgroundColor: "transparent",
                          borderColor: "gray",
                          borderWidth: 1,
                        }}
                        onPress={nextGameApple}
                      >
                        <Image
                          source={require("../../Images/appleicon.png")}
                          style={{ width: 30, height: 30 }}
                        />
                      </TouchableOpacity>
                      <Text style={{ marginTop: 5 }}>Apple</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          borderRadius: 10,
                          padding: 10,
                          backgroundColor: "transparent",
                          borderColor: "gray",
                          borderWidth: 1,
                          marginLeft: 30,
                        }}
                        onPress={nextGameOrange}
                      >
                        <Image
                          source={require("../../Images/orangeicon.png")}
                          style={{ width: 30, height: 30 }}
                        />
                      </TouchableOpacity>
                      <Text style={{ marginTop: 5, marginLeft: 30 }}>
                        Orange
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          borderRadius: 10,
                          padding: 10,
                          backgroundColor: "transparent",
                          borderColor: "gray",
                          borderWidth: 1,
                          marginLeft: 30,
                        }}
                        onPress={nextGameBanana}
                      >
                        <Image
                          source={require("../../Images/bananaicon.png")}
                          style={{ width: 30, height: 30 }}
                        />
                      </TouchableOpacity>
                      <Text style={{ marginTop: 5, marginLeft: 30 }}>
                        Banana
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </Modal>
          <Text
            style={{
              color: colors.text,
              marginTop: 50,
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Let's apply the skills we learned for the following problems!
          </Text>
          {ready ? (
            <View>
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
            </View>
          ) : (
            <View>
              <Text
                style={{
                  color: colors.text,
                  marginTop: 10,
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                What is the number of fingers shown by the hand? Press the
                correct button below.
              </Text>
              {image && (
                <Image
                  source={image}
                  style={
                    number > 0 && number < 6
                      ? {
                          width: 100,
                          height: 200,
                          alignSelf: "center",
                          marginTop: 30,
                          resizeMode: "stretch",
                        }
                      : {
                          width: 300,
                          height: 200,
                          alignSelf: "center",
                          marginTop: 30,
                          resizeMode: "stretch",
                        }
                  }
                />
              )}
              {buttonClicked ? (
                answerCorrect ? (
                  <Text style={[styles.response, { color: colors.text }]}>
                    👏Good Job!👏
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
                style={{ marginTop: 40 }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      borderWidth: 1.5,
                      borderColor: colors.bannerText,
                      height: 40,
                      width: 40,
                      marginLeft: 15,
                      alignItems: "center",
                      borderRadius: 8,
                      padding: 10,
                      backgroundColor: colors.loginBanner,
                    }}
                    onPress={() => verify(item.id)}
                  >
                    <Text
                      style={{ color: colors.bannerText, fontWeight: "bold" }}
                    >
                      {item.number}
                    </Text>
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
                style={{ marginTop: -200 }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      borderWidth: 1.5,
                      borderColor: colors.bannerText,
                      height: 40,
                      width: 40,
                      marginLeft: 15,
                      alignItems: "center",
                      borderRadius: 8,
                      padding: 10,
                      backgroundColor: colors.loginBanner,
                    }}
                    onPress={() => verify(item.id)}
                  >
                    <Text
                      style={{ color: colors.bannerText, fontWeight: "bold" }}
                    >
                      {item.number}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}
        </View>
      )}
      <View style={{ height: 150 }} />
    </ScrollView>
  );
};

export default GameScreen1;

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
