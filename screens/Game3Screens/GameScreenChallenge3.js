import {
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
  Modal,
  Image,
  ImageBackground,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Text, Input, Button } from "@rneui/base";
import { useTheme } from "../../DarkTheme/ThemeProvider";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";

const GameScreenChallenge3 = ({ navigation }) => {
  const { colors, dark } = useTheme();
  const [ready, setReady] = useState(true);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [buttonClicked, isButtonClicked] = useState(false);
  const [answerCorrect, isAnswerCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [helpCount, setHelpCount] = useState(0);
  const [helpModal, setHelpModal] = useState(false);
  const [finishModal, setFinishModal] = useState(false);
  const myHeaderHeight = useHeaderHeight();

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
        setHelpCount(0);
      } else if (Number(answer) != realAnswer) {
        isAnswerCorrect(false);
        setHelpCount(helpCount + 1);
        if (helpCount == 2) {
          setHelpModal(true);
        }
      }
    } else if (count == 10) {
      setFinishModal(true);
    }
  };

  const finishGame = () => {
    setFinishModal(false);
    navigation.navigate("SinglePlayer");
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
            visible={finishModal}
            onRequestClose={() => {
              Alert.alert("Closed");
              setModalVisible(!finishModal);
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
                  }}
                >
                  <ImageBackground
                    source={require("../../Images/confetti.jpeg")}
                    imageStyle={{ opacity: 0.2 }}
                    animationType="fade"
                    style={{ width: 378, height: 318, padding: 25 }}
                  >
                    <Text
                      style={{
                        marginBottom: 10,
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      Congratulations!
                    </Text>
                    <Text
                      style={{
                        marginBottom: 10,
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      You have completed this game! Now you know how to multiply
                      with and without the multiplication table!
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
                      onPress={finishGame}
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
          <Modal
            animationType="fade"
            transparent={true}
            visible={helpModal}
            onRequestClose={() => {
              Alert.alert("Closed");
              setModalVisible(!helpModal);
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
                    height: 608,
                    width: 378,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      marginBottom: 15,
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    It seems that you are struggling with this problem. Here is
                    the multiplication table to help you! When done, press
                    Close.
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
                    style={styles.button}
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
                    onPress={() => setHelpModal(false)}
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
            Let's apply the skills we learned for the following problems without
            the Multiplication Table!
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
                    🎉 Well Done! 🎉
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

export default GameScreenChallenge3;

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
