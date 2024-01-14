import {
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
  Modal,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import React, { useState } from "react";
import { Text, Input, Button } from "@rneui/base";
import { useTheme } from "../../DarkTheme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

const GameScreen6 = ({ navigation }) => {
  const { colors, dark } = useTheme();
  const [ready, setReady] = useState(true);
  const [numbers, setNumbers] = useState("");
  const [buttonClicked, isButtonClicked] = useState(false);
  const [answer, setAnswer] = useState("");
  const [answerCorrect, isAnswerCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [challengeModal, setChallengeModal] = useState(false);
  const myHeaderHeight = useHeaderHeight();

  const generateNumbers = () => {
    let numArray = [];
    for (let x = 0; x <= 4; x++) {
      let randomNum = Math.floor(Math.random() * 100) + 0;
      numArray[x] = randomNum;
    }
    setNumbers(numArray.join(", "));
  };

  const startGame = () => {
    generateNumbers();
    setReady(false);
  };

  const verify = () => {
    isButtonClicked(true);
    let arrayNumbers = numbers.split(", ");
    let realAnswer = [...arrayNumbers].sort((a, b) => {
      return Number(a) - Number(b);
    });
    let finalAns = realAnswer.join(", ");
    if (count < 10) {
      if (answer === finalAns) {
        isAnswerCorrect(true);
        setAnswer("");
        setCount(count + 1);
        generateNumbers();
      } else if (answer !== finalAns) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setChallengeModal(true);
    }
  };

  const nextScreen = () => {
    setChallengeModal(false);
    navigation.navigate("MidScreen6");
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
      keyboardVerticalOffset={myHeaderHeight + 57}
    >
      <ScrollView scrollIndicatorInsets={{ right: 1 }}>
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
                      height: 208,
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
                      Let's now order more complex numbers!
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
                  Type in the correct order!
                </Text>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "80%",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 50,
                        marginTop: 80,
                        marginRight: 10,
                        textAlign: "center",
                        color: colors.text,
                      }}
                    >
                      {numbers}
                    </Text>
                  </View>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default GameScreen6;

const styles = StyleSheet.create({
  styleInput: {
    borderWidth: 2,
    alignContent: "center",
    borderRadius: 8,
    padding: 5,
    marginTop: 30,
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
