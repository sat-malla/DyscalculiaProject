import {
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
  Modal,
  Image,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Text, Input, Button } from "@rneui/base";
import { useTheme } from "../../DarkTheme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

const GameScreen3 = ({ navigation }) => {
  const { colors, dark } = useTheme();
  const [ready, setReady] = useState(true);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [buttonClicked, isButtonClicked] = useState(false);
  const [answerCorrect, isAnswerCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [challengeModal, setChallengeModal] = useState(false);
  const [tableModal, setTableModal] = useState(false);
  const height = useHeaderHeight();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: 80,
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => setTableModal(true)}
            activeOpacity={0.5}
          >
            <FontAwesome name="table" size={27} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  const generateNumbersMult = () => {
    const randomNum = Math.floor(Math.random() * 12) + 0;
    const randomNum2 = Math.floor(Math.random() * 12) + 0;

    setNum1(randomNum);
    setNum2(randomNum2);
  };

  const startGame = () => {
    generateNumbersMult();
    setReady(false);
  };

  const verify = () => {
    isButtonClicked(true);
    realAnswer = num1 * num2;
    if (count < 10) {
      if (Number(answer) == realAnswer) {
        generateNumbersMult();
        isAnswerCorrect(true);
        setAnswer("");
        setCount(count + 1);
      } else if (Number(answer) != realAnswer) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setChallengeModal(true);
    }
  };

  const nextScreen = () => {
    setChallengeModal(false);
    navigation.navigate("GameScreenChallenge3");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{
        height: "100%",
        backgroundColor: colors.primary,
      }}
      contentContainerStyle={{
        flexDirection: "column",
        paddingHorizontal: 20,
        flex: 1,
      }}
      keyboardVerticalOffset={myHeaderHeight + 107}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            alignItems: "center",
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
                  },
                ]}
              >
                <LinearGradient
                  colors={["#6bffc6", colors.gradientEndCol]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 1, y: 0.8 }}
                  style={{
                    borderRadius: 16,
                    height: 258,
                    width: 378,
                    alignItems: "center",
                    padding: 26,
                  }}
                >
                  <Text
                    style={{
                      marginBottom: 10,
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    🙌Well Done!🙌
                  </Text>
                  <Text
                    style={{
                      marginBottom: 20,
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    In the next set of questions, let's see if you can solve
                    them without the multiplication table! You got this!
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
                      alignSelf: "center",
                    }}
                    onPress={nextScreen}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 20,
                      }}
                    >
                      Next
                    </Text>
                    <AntDesign name="arrowright" size={24} color="black" />
                  </Pressable>
                </LinearGradient>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="fade"
            transparent={true}
            visible={tableModal}
            onRequestClose={() => {
              Alert.alert("Closed");
              setModalVisible(!setTableModal);
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
                    height: 558,
                    width: 378,
                    alignItems: "center",
                    padding: 26,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: "bold",
                      marginBottom: 20,
                    }}
                  >
                    Multiplication Table:
                  </Text>
                  <Image
                    source={require("../../Images/MultiplicationTable.jpg")}
                    style={{
                      width: 350,
                      height: 350,
                      borderRadius: 8,
                      borderWidth: 1,
                    }}
                  />
                  <Button
                    title="Close"
                    onPress={() => setTableModal(false)}
                    style={{
                      marginTop: 50,
                      width: 100,
                    }}
                    titleStyle={{
                      color: "black",
                      fontWeight: "bold",
                    }}
                    buttonStyle={{
                      borderRadius: 8,
                      borderWidth: 2,
                      borderColor: "black",
                      backgroundColor: "#6bffc6",
                    }}
                  />
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
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: colors.text,
                  marginTop: 20,
                  fontSize: 20,
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Type in the correct answer below.
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 20,
                  marginTop: 50,
                }}
              >
                <Text style={{ fontSize: 70, color: colors.text }}>
                  {num1} x {num2} = ?
                </Text>
              </View>
              <Input
                placeholder="Type answer here"
                type="text"
                keyboardAppearance={dark ? "dark" : "light"}
                value={answer}
                onChangeText={(text) => setAnswer(text)}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                style={{ color: colors.text }}
                containerStyle={[
                  { borderColor: colors.text },
                  styles.styleInput,
                ]}
              />
              <Button
                disabled={!answer}
                title="Check"
                style={styles.button}
                titleStyle={{
                  color: "black",
                  fontWeight: "bold",
                }}
                buttonStyle={{
                  borderRadius: 8,
                  backgroundColor: "#6bffc6",
                }}
                onPress={verify}
              />
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
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default GameScreen3;

const styles = StyleSheet.create({
  styleInput: {
    borderWidth: 2,
    alignContent: "center",
    borderRadius: 8,
    padding: 5,
    marginTop: 70,
    width: 300,
    height: 50,
  },
  button: {
    width: 200,
    marginTop: 50,
  },
  response: {
    marginTop: 40,
    fontSize: 20,
  },
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
});
