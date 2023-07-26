import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
  Modal,
  ImageBackground
} from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Input, Button } from "@rneui/base";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

const GameScreenChallenge5 = ({ navigation }) => {
  const { colors, dark } = useTheme();
  const [ready, setReady] = useState(true);
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [compSign, setCompSign] = useState("");
  const [buttonClicked, isButtonClicked] = useState(false);
  const [answerCorrect, isAnswerCorrect] = useState(false);
  const [count, setCount] = useState(0);
  const [finishModal, setFinishModal] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "True", value: "true" },
    { label: "False", value: "false" },
  ]);

  const [marks, setMarks] = useState([]);
  const [marks2, setMarks2] = useState([]);
  const markAdd = 1;
  const markAdd2 = 1;

  const generateNumbers = () => {
    const randomNum = Math.floor(Math.random() * 10) + 0;
    const randomNum2 = Math.floor(Math.random() * 10) + 0;
    const randomCompSign = Math.floor(Math.random() * 5) + 1;

    if (randomCompSign == 1) {
      setCompSign(">");
    } else if (randomCompSign == 2) {
      setCompSign("<");
    } else if (randomCompSign == 3) {
      setCompSign("≥");
    } else if (randomCompSign == 4) {
      setCompSign("≤");
    } else if (randomCompSign == 5) {
      setCompSign("=");
    }

    setNum1(randomNum);
    setNum2(randomNum2);
  };

  const startGame = () => {
    generateNumbers();
    setReady(false);
  };

  const verify = () => {
    isButtonClicked(true);
    const stringEval = num1.toString() + compSign.toString() + num2.toString();
    if (count < 10) {
      if (eval(stringEval) === eval(value)) {
        generateNumbers();
        isAnswerCorrect(true);
        setMarks([]);
        setMarks2([]);
        setValue(null);
        setCount(count + 1);
      } else if (eval(stringEval) !== eval(value)) {
        isAnswerCorrect(false);
      }
    } else if (count == 10) {
      setChallengeModal(true);
    }
  };

  const finishScreen = () => {
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
          color: "red",
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
          marginBottom: 20,
          color: "blue",
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
                height: 208,
                width: 378,
                alignItems: "center",
                padding: 26,
              }}
            >
              <ImageBackground
                source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/confetti.jpeg")}
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
                  Let's now use other comparisons! You got this!
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
                  onPress={finishScreen}
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
            Choose the correct option!
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Text style={{ fontSize: 50, color: "red" }}>{num1}</Text>
            <Text style={{ fontSize: 50, color: colors.text, marginLeft: 15 }}>{compSign}</Text>
            <Text style={{ fontSize: 50, color: "blue", marginLeft: 15 }}>{num2}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "stretch",
              marginTop: 20,
            }}
          >
            <View
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                marginRight: 50,
              }}
            >
              <Button
                title="+"
                buttonStyle={{
                  borderRadius: 8,
                  backgroundColor: "#6bffc6",
                  borderWidth: 1.5,
                  width: 50,
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
                  width: 50,
                  borderColor: "black",
                }}
                titleStyle={{
                  color: "black",
                  fontWeight: "bold",
                }}
                onPress={removeLine}
              />
            </View>
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                marginLeft: 100,
              }}
            >
              <Button
                title="+"
                style={{ marginRight: 10, marginLeft: 10 }}
                buttonStyle={{
                  borderRadius: 8,
                  backgroundColor: "#6bffc6",
                  borderWidth: 1.5,
                  width: 50,
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
                buttonStyle={{
                  borderRadius: 8,
                  backgroundColor: "#6bffc6",
                  borderWidth: 1.5,
                  width: 50,
                  borderColor: "black",
                }}
                titleStyle={{
                  color: "black",
                  fontWeight: "bold",
                }}
                onPress={removeLine2}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                justifyContent: "flex-start",
                flexWrap: "wrap",
                width: 100,
                marginRight: 280,
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 8,
                padding: 10,
              }}
            >
              {marks}
            </View>
            <View
              style={{
                justifyContent: "flex-start",
                width: 100,
                flexWrap: "wrap",
                marginLeft: 280,
                flexDirection: "row",
                borderWidth: 2,
                borderRadius: 8,
                padding: 10,
                marginTop: -25,
              }}
            >
              {marks2}
            </View>
          </View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownContainerStyle={{ width: 100, marginTop: 40 }}
            placeholder=" "
            listItemLabelStyle={{ fontSize: 20 }}
            labelStyle={{ fontSize: 20 }}
            style={{
              width: 100,
              alignSelf: "center",
              marginTop: 40,
            }}
          />
          <Button
            disabled={!value}
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

export default GameScreenChallenge5;

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
    marginTop: 110,
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
