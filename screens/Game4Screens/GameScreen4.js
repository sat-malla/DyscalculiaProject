import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Pressable,
    Modal,
    Image,
    ScrollView,
    Platform,
  } from "react-native";
  import React, { useEffect, useState, useLayoutEffect } from "react";
  import { Text, Input, Button } from "@rneui/base";
  import { Divider } from "@rneui/themed";
  import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
  import { LinearGradient } from "expo-linear-gradient";
  import { AntDesign, FontAwesome } from "@expo/vector-icons";
  import { useHeaderHeight } from "@react-navigation/elements";
  
  const GameScreen4 = ({ navigation }) => {
    const { colors, dark } = useTheme();
    const [ready, setReady] = useState(true);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [answer, setAnswer] = useState("");
    const [buttonClicked, isButtonClicked] = useState(false);
    const [answerCorrect, isAnswerCorrect] = useState(false);
    const [count, setCount] = useState(0);
    const [subtModal, setSubtModal] = useState(false);
  
    const generateNumbers = () => {
      const randomNum = Math.floor(Math.random() * 10) + 0;
      const randomNum2 = Math.floor(Math.random() * 10) + 0;
  
      setNum1(randomNum);
      setNum2(randomNum2);
    };
  
    const startGame = () => {
      generateNumbers();
      setReady(false);
    };
  
    const verify = () => {
      isButtonClicked(true);
      realAnswer = num1 + num2;
      if (count < 10) {
        if (Number(answer) == realAnswer) {
          generateNumbers();
          isAnswerCorrect(true);
          setAnswer("");
          setCount(count + 1);
        } else if (Number(answer) != realAnswer) {
          isAnswerCorrect(false);
        }
      } else if (count == 10) {
        setSubtModal(true);
      }
    };
  
    const nextScreen = () => {
      setSubtModal(false);
      navigation.navigate("GameScreenChallenge4");
    };
  
    return (
      <View
        style={{
          alignItems: "center",
          height: "100%",
          flex: 1,
          backgroundColor: colors.primary,
        }}
      >
        <Modal
          animationType="fade"
          transparent={true}
          visible={subtModal}
          onRequestClose={() => {
            Alert.alert("Closed");
            setModalVisible(!subtModal);
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
                  height: 218,
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
                  The next set of questions will be for subtraction!
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
              <Text style={{ fontSize: 70 }}>
                ? = {num1} + {num2}
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
      </View>
    );
  };
  
  export default GameScreen4;
  
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
  