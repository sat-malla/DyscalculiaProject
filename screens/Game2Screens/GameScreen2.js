import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
  Modal
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Input, Button } from "@rneui/base";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const GameScreen2 = ({ navigation }) => {
  const { colors, dark } = useTheme();
  const [numEasy1, setNumEasy1] = useState(0);
  const [numEasy2, setNumEasy2] = useState(0);
  const [numHard1, setNumHard1] = useState(0);
  const [numHard2, setNumHard2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [buttonClicked, isButtonClicked] = useState(false);
  const [answerCorrect, isAnswerCorrect] = useState(false);
  const [answerHardCorrect, isAnswerHardCorrect] = useState(false);
  const [buttonHardClicked, isButtonHardClicked] = useState(false);
  const [runFirst, isRunFirst] = useState(true);
  const [runFirstHard, isRunFirstHard] = useState(false);
  const [atHardProblems, isAtHardProblems] = useState(false);
  const [count, setCount] = useState(0);
  const [subtractModal, setSubtractModal] = useState(false);

  const generateNumbersEasy = () => {
    var randomNum = Math.floor(Math.random() * 10) + 0;
    var randomNum2 = Math.floor(Math.random() * 10) + 0;
    setNumEasy1(randomNum);
    setNumEasy2(randomNum2);
  };

  const generateNumbersHard = () => {
    var randomNum = Math.floor(Math.random() * 100) + 1;
    var randomNum2 = Math.floor(Math.random() * 100) + 1;
    setNumHard1(randomNum);
    setNumHard2(randomNum2);
  };

  const verify = () => {
    isButtonClicked(true);
    if (count < 5) {
      realAnswer = numEasy1 + numEasy2;
      if (Number(answer) == realAnswer) {
        isAnswerCorrect(true);
        isRunFirst(false);
        setCount(count + 1);
        generateNumbersEasy();
      } else if (Number(answer) != realAnswerHard) {
        isAnswerCorrect(false);
      }
    } else {
      isRunFirstHard(true);
      isAnswerCorrect(true);
      isButtonClicked(true);
      realAnswerHard = numHard1 + numHard2;
      if (Number(answer) == realAnswerHard) {
        generateNumbersHard();
        isRunFirstHard(false);
        isAnswerCorrect(false);
        isAnswerHardCorrect(true);
        isButtonClicked(false);
        isButtonHardClicked(true);
        setCount(count + 1);
        if (count==10) {
            setSubtractModal(true);
        }
      } else if (Number(answer) != realAnswerHard) {
        isAnswerHardCorrect(false);
      }
    }
  };

  const nextScreen = () => {
    setSubtractModal(false);
    navigation.navigate("GameScreenSubt")
  }

  useEffect(() => {
    if (runFirst) {
      generateNumbersEasy();
    }
  }, [runFirst]);

  useEffect(() => {
    if (runFirstHard) {
      generateNumbersHard();
      isAtHardProblems(true);
    }
  }, [runFirstHard]);

  return (
    <KeyboardAvoidingView
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
                height: 208,
                width: 378,
                alignItems: "center",
                padding: 35
              }}
            >
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Well Done! Let's move on to Subtraction!
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
          marginTop: 30,
          fontSize: 35,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Addition!
      </Text>
      <Text
        style={{
          color: colors.text,
          marginTop: 30,
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Type in the correct answer of the problem below.
      </Text>
      {atHardProblems ? (
        <Text
          style={{
            color: colors.text,
            marginTop: 30,
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Now, time for the hard problems! You got this!
        </Text>
      ) : (
        <Text> </Text>
      )}
      {count < 5 ? (
        <Text style={{ marginTop: 70, fontSize: 50 }}>
          {numEasy1} + {numEasy2} = ?
        </Text>
      ) : (
        <Text style={{ marginTop: 70, fontSize: 50 }}>
          {numHard1} + {numHard2} = ?
        </Text>
      )}
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
      {buttonHardClicked ? (
        answerHardCorrect ? (
          <Text style={styles.response}>🥳Very Nice Job!🎉</Text>
        ) : (
          <Text style={styles.response}>
            Don't worry! It's tricky, but you can get it!
          </Text>
        )
      ) : (
        <Text> </Text>
      )}
    </KeyboardAvoidingView>
  );
};

export default GameScreen2;

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
