import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
  Modal,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Input, Button } from "@rneui/base";
import { Divider } from "@rneui/themed";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const GameScreenChallenge2 = ({ navigation }) => {
  const { colors, dark } = useTheme();
  const [ready, setReady] = useState(true);
  const [numEasy1, setNumEasy1] = useState(1);
  const [numEasy2, setNumEasy2] = useState(1);
  const [problemSign, setProblemSign] = useState("");
  const [answer, setAnswer] = useState("");
  const [buttonClicked, isButtonClicked] = useState(false);
  const [answerCorrect, isAnswerCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [subtractModal, setSubtractModal] = useState(false);
  const [marks, setMarks] = useState([]);
  const [marks2, setMarks2] = useState([]);
  const markAdd = 1;
  const markAdd2 = 1;

  const generateNumbersEasy = () => {
    console.log(
      "1st num at beginning of generateNumbers: " +
        numEasy1 +
        "2nd num: " +
        numEasy2
    );
    const randomNum = Math.floor(Math.random() * 100) + 0;
    const randomNum2 = Math.floor(Math.random() * 100) + 0;
    const addOrSubtract = Math.floor(Math.random() * 2) + 1;
    console.log("SIGN is" + addOrSubtract);
    console.log(randomNum);
    console.log(randomNum2);

    if (addOrSubtract == 2) {
      setProblemSign("+");
      console.log(
        "Problem sign after setting problem sign when it's plus sign: " +
          problemSign
      );
    } else if (addOrSubtract == 1) {
      setProblemSign("–");
      console.log(
        "Problem sign after setting problem sign when it's minus sign: " +
          problemSign
      );
    }

    if (problemSign === "+") {
      console.log("Plus problem sign if condition: " + problemSign);
      setNumEasy1(randomNum);
      setNumEasy2(randomNum2);
      console.log("num easy1 is: " + numEasy1 + "2nd num: " + numEasy2);
    } else if (problemSign === "–") {
      console.log("Minus problem sign if condition: " + problemSign);
      if (randomNum >= randomNum2) {
        console.log(
          "Minus problem sign if condition with randomNum>randomNum2"
        );
        setNumEasy1(randomNum);
        setNumEasy2(randomNum2);
      } else if (randomNum < randomNum2) {
        console.log("Random 1 is less than Random 2");
        console.log(randomNum);
        console.log(randomNum2);
        setNumEasy1(randomNum2);
        setNumEasy2(randomNum);
      }
    }
  };

  const startGame = () => {
    generateNumbersEasy();
    setReady(false);
  };

  const verify = () => {
    isButtonClicked(true);
    if (problemSign === "–") {
      realAnswer = numEasy1 - numEasy2;
    } else {
      realAnswer = numEasy1 + numEasy2;
    }
    if (count < 10) {
      if (Number(answer) == realAnswer) {
        generateNumbersEasy();
        isAnswerCorrect(true);
        setMarks([]);
        setMarks2([]);
        setAnswer("");
        setCount(count + 1);
      } else if (Number(answer) != realAnswer) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setSubtractModal(true);
    }
  };

  const finishGame = () => {
    setSubtractModal(false);
    navigation.navigate("SinglePlayer");
  };

  // useEffect(() => {
  //   if (runFirst) {
  //     generateNumbersEasy();
  //   }
  // }, [runFirst]);

  const addLine = () => {
    setMarks((prevLines) => [
      ...prevLines,
      <Text
        key={prevLines.length}
        style={{ marginRight: 10, fontSize: 20, fontWeight: "500" }}
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
          marginBottom: 20,
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
      style={{
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.primary,
      }}
      contentContainerStyle={{
        flexDirection: "column",
        paddingHorizontal: 20,
      }}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={subtractModal}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!subtractModal);
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
                height: 238,
                width: 378,
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/confetti.jpeg")}
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
                  You completed this game! Now you know how to do easy and hard
                  addition and subtraction!
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
            {numEasy1.toString().length == 1 ? (
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
                <Text style={{ fontSize: 50 }}>{numEasy1}</Text>
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
                <Text style={{ fontSize: 50 }}>{numEasy1}</Text>
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
            {numEasy2.toString().length == 1 ? (
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
                  <Text style={{ fontSize: 50 }}>{problemSign}</Text>
                  <Text style={{ fontSize: 50, marginLeft: 10 }}>
                    {numEasy2}
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
                  <Text style={{ fontSize: 50 }}>{problemSign}</Text>
                  <Text style={{ fontSize: 50, marginLeft: 10 }}>
                    {numEasy2}
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
                borderBottomColor: "black",
                borderWidth: 3,
                width: 110,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text style={{ fontSize: 50, marginLeft: 40 }}>?</Text>
          </View>
          <Input
            placeholder="Type answer here"
            type="text"
            keyboardAppearance={dark ? "dark" : "light"}
            value={answer}
            onChangeText={(text) => setAnswer(text)}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            style={{ color: colors.text }}
            containerStyle={[{ borderColor: colors.text }, styles.styleInput]}
          />
          <Button
            disabled={!answer}
            title="Check"
            style={styles.button}
            titleStyle={{
              color: colors.text,
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
              <Text style={styles.response}>👏Good Job!👏</Text>
            ) : (
              <Text style={styles.response}>
                No pressure! Try it one more time!
              </Text>
            )
          ) : (
            <Text> </Text>
          )}
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default GameScreenChallenge2;

const styles = StyleSheet.create({
  styleInput: {
    borderWidth: 2,
    borderColor: "black",
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
