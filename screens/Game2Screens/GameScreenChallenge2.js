import {
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
  Modal,
  ImageBackground,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Text, Input, Button } from "@rneui/base";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { useGlobalState } from "../RewardSystem";

const GameScreenChallenge2 = ({ navigation }) => {
  const { colors, dark } = useTheme();
  const [ready, setReady] = useState(true);
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [problemSign, setProblemSign] = useState("");
  const [answer, setAnswer] = useState("");
  const [buttonClicked, isButtonClicked] = useState(false);
  const [answerCorrect, isAnswerCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [finishModal, setFinishModal] = useState(false);
  const [starCount, setStarCount] = useGlobalState("starCount");
  const [marks, setMarks] = useState([]);
  const [marks2, setMarks2] = useState([]);
  const myHeaderHeight = useHeaderHeight();
  const markAdd = 1;
  const markAdd2 = 1;

  const generateNumbers = () => {
    const randomNum = Math.floor(Math.random() * 100) + 0;
    const randomNum2 = Math.floor(Math.random() * 100) + 0;
    const addOrSubtract = Math.floor(Math.random() * 2) + 1;

    if (addOrSubtract == 2) {
      setProblemSign("+");
      setNum1(randomNum);
      setNum2(randomNum2);
    } else if (addOrSubtract == 1) {
      setProblemSign("–");
      if (randomNum > randomNum2) {
        setNum1(randomNum);
        setNum2(randomNum2);
      } else {
        setNum1(randomNum2);
        setNum2(randomNum);
      }
    }
  };

  const startGame = () => {
    generateNumbers();
    setReady(false);
  };

  const verify = () => {
    isButtonClicked(true);
    let realAnswer = 0;
    if (problemSign === "–") {
      realAnswer = num1 - num2;
    } else {
      realAnswer = num1 + num2;
    }
    if (count < 10) {
      if (Number(answer) == realAnswer) {
        generateNumbers();
        isAnswerCorrect(true);
        setMarks([]);
        setMarks2([]);
        setAnswer("");
        setCount(count + 1);
      } else if (Number(answer) != realAnswer) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setFinishModal(true);
    }
  };

  //  const addStars = async () => {
  //   await db
  //     .collection("userdata")
  //     .
  //     .then(function (querySnapshot) {
  //       try {
  //         querySnapshot.forEach(function (doc) {
  //           if (doc.data().id == auth.currentUser.uid) {
  //             const userRef = db.collection("userdata").doc(doc)
  //             throw new Exception("User has been found");
  //           }
  //         });
  //       } catch (e) {
  //         console.log("User found");
  //       }
  //     })
  //  }

  const finishGame = () => {
    setFinishModal(false);
    navigation.navigate("SinglePlayer");
  };

  const addLine = () => {
    setMarks((prevLines) => [
      ...prevLines,
      <Text
        key={prevLines.length}
        style={{
          marginRight: 10,
          fontSize: 20,
          fontWeight: "500",
          color: colors.text,
        }}
      >
        |
      </Text>,
    ]);
  };
  const addLine2 = () => {
    setMarks2((prevLines) => [
      ...prevLines,
      <Text
        key={prevLines.length}
        style={{
          marginRight: 10,
          fontSize: 20,
          fontWeight: "500",
          color: colors.text,
        }}
      >
        |
      </Text>,
    ]);
  };
  const removeLine = () => {
    setMarks((prevLines) => {
      let newLines = [...prevLines];
      newLines.splice(-markAdd);
      return newLines;
    });
  };
  const removeLine2 = () => {
    setMarks2((prevLines) => {
      let newLines = [...prevLines];
      newLines.splice(-markAdd2);
      return newLines;
    });
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
                    height: 248,
                    width: 378,
                    alignItems: "center",
                  }}
                >
                  <ImageBackground
                    source={require("../../Images/confetti.jpeg")}
                    imageStyle={{ opacity: 0.2 }}
                    animationType="fade"
                    style={{ width: 378, height: 318, padding: 35 }}
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
                        marginBottom: 15,
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "500",
                      }}
                    >
                      You completed this game! Now you know how to do easy and
                      hard addition and subtraction!
                    </Text>
                    <Pressable
                      style={{
                        borderRadius: 20,
                        borderWidth: 2,
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
          <Text
            style={{
              color: colors.text,
              marginTop: 60,
              fontSize: 25,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Let's apply the skills we learned for the following hard problems!
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
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginRight: 150,
                  paddingHorizontal: 20,
                }}
              >
                {num1.toString().length == 1 ? (
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      marginTop: 70,
                      marginLeft: 360,
                      width: 300,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 50, color: colors.text }}>
                      {num1}
                    </Text>
                    <Button
                      title="+"
                      style={{ marginRight: 10, marginLeft: 30 }}
                      buttonStyle={{
                        borderRadius: 8,
                        backgroundColor: "#6bffc6",
                        borderWidth: 1.5,
                        borderColor: "black",
                      }}
                      titleStyle={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                      onPress={addLine}
                    />
                    <Button
                      title="–"
                      style={{ marginLeft: 10, marginRight: 10 }}
                      buttonStyle={{
                        borderRadius: 8,
                        backgroundColor: "#6bffc6",
                        borderWidth: 1.5,
                        borderColor: "black",
                      }}
                      titleStyle={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                      onPress={removeLine}
                    />
                    {marks}
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      marginTop: 70,
                      marginLeft: 310,
                      width: 300,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 50, color: colors.text }}>
                      {num1}
                    </Text>
                    <Button
                      title="+"
                      style={{ marginRight: 10, marginLeft: 30 }}
                      buttonStyle={{
                        borderRadius: 8,
                        backgroundColor: "#6bffc6",
                        borderWidth: 1.5,
                        borderColor: "black",
                      }}
                      titleStyle={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                      onPress={addLine}
                    />
                    <Button
                      title="–"
                      style={{ marginLeft: 10, marginRight: 10 }}
                      buttonStyle={{
                        borderRadius: 8,
                        backgroundColor: "#6bffc6",
                        borderWidth: 1.5,
                        borderColor: "black",
                      }}
                      titleStyle={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                      onPress={removeLine}
                    />
                    {marks}
                  </View>
                )}
                {num2.toString().length == 1 ? (
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      marginLeft: 275,
                      width: 300,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ fontSize: 50, color: colors.text }}>
                        {problemSign}
                      </Text>
                      <Text
                        style={{
                          fontSize: 50,
                          marginLeft: 10,
                          color: colors.text,
                        }}
                      >
                        {num2}
                      </Text>
                    </View>
                    <Button
                      title="+"
                      style={{ marginRight: 10, marginLeft: 30 }}
                      buttonStyle={{
                        borderRadius: 8,
                        backgroundColor: "#6bffc6",
                        borderWidth: 1.5,
                        borderColor: "black",
                      }}
                      titleStyle={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                      onPress={addLine2}
                    />
                    <Button
                      title="–"
                      style={{ marginLeft: 10, marginRight: 10 }}
                      buttonStyle={{
                        borderRadius: 8,
                        backgroundColor: "#6bffc6",
                        borderWidth: 1.5,
                        borderColor: "black",
                      }}
                      titleStyle={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                      onPress={removeLine2}
                    />
                    {marks2}
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      marginLeft: 225,
                      width: 300,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ fontSize: 50, color: colors.text }}>
                        {problemSign}
                      </Text>
                      <Text
                        style={{
                          fontSize: 50,
                          marginLeft: 10,
                          color: colors.text,
                        }}
                      >
                        {num2}
                      </Text>
                    </View>
                    <Button
                      title="+"
                      style={{ marginRight: 10, marginLeft: 30 }}
                      buttonStyle={{
                        borderRadius: 8,
                        backgroundColor: "#6bffc6",
                        borderWidth: 1.5,
                        borderColor: "black",
                      }}
                      titleStyle={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                      onPress={addLine2}
                    />
                    <Button
                      title="–"
                      style={{ marginLeft: 10, marginRight: 10 }}
                      buttonStyle={{
                        borderRadius: 8,
                        backgroundColor: "#6bffc6",
                        borderWidth: 1.5,
                        borderColor: "black",
                      }}
                      titleStyle={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                      onPress={removeLine2}
                    />
                    {marks2}
                  </View>
                )}
                <View
                  style={{
                    borderColor: colors.text,
                    borderWidth: 3,
                    width: 110,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                  }}
                />
                <Text
                  style={{ fontSize: 50, marginLeft: 40, color: colors.text }}
                >
                  ?
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

export default GameScreenChallenge2;

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
