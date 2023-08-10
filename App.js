import "react-native-gesture-handler";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "@rneui/base";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { ThemeProvider } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";

// Importing Screens
import Home from "./screens/Home";
import Info from "./screens/Info";
import Suggest from "./screens/Suggest";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPass from "./screens/ForgotPass";
import TermsAndCo from "./screens/TermsAndCo";
import Profile from "./screens/Profile";
import SinglePlayer from "./screens/SinglePlayer";

// Importing Single Player Game 1 Screens
import StartScreen1 from "./screens/Game1Screens/StartScreen1";
import GameScreen1 from "./screens/Game1Screens/GameScreen1";
import GameScreenChallenge1 from "./screens/Game1Screens/GameScreenChallenge1";

// Importing Single Player Game 2 Screens
import StartScreen2 from "./screens/Game2Screens/StartScreen2";
import GameScreen2 from "./screens/Game2Screens/GameScreen2";
import GameScreenChallenge2 from "./screens/Game2Screens/GameScreenChallenge2";

// Importing Single Player Game 3 Screens
import StartScreen3 from "./screens/Game3Screens/StartScreen3";
import GameScreen3 from "./screens/Game3Screens/GameScreen3";
import GameScreenChallenge3 from "./screens/Game3Screens/GameScreenChallenge3";

// Importing Single Player Game 4 Screens
import StartScreen4 from "./screens/Game4Screens/StartScreen4";
import GameScreen4 from "./screens/Game4Screens/GameScreen4";
import GameScreenChallenge4 from "./screens/Game4Screens/GameScreenChallenge4";

// Importing Single Player Game 5 Screens
import StartScreen5 from "./screens/Game5Screens/StartScreen5";
import GameScreen5 from "./screens/Game5Screens/GameScreen5";
import MidScreen5 from "./screens/Game5Screens/MidScreen5";
import GameScreenChallenge5 from "./screens/Game5Screens/GameScreenChallenge5";

// Importing Single Player Game 6 Screens
import StartScreen6 from "./screens/Game6Screens/StartScreen6";
import GameScreen6 from "./screens/Game6Screens/GameScreen6";
import MidScreen6 from "./screens/Game6Screens/MidScreen6";
import GameScreenChallenge6 from "./screens/Game6Screens/GameScreenChallenge6";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#6bffc6" },
  headerTitleStyle: { color: "black" },
  headerTintColor: "black",
  headerBackTitleVisible: true,
};

// Screen titles in functions
function HomeTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Dyscalculia</Text>;
}

function InfoTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>App Information</Text>;
}

function SuggestTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Contact</Text>;
}

function LoginTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Login</Text>;
}

function RegisterTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Register</Text>;
}

function ForgotPassTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Forgot Password?</Text>;
}

function TACTitle({ navigation }) {
  return (
    <Text style={{ fontSize: 25, marginLeft: 10 }}>Terms & Conditions</Text>
  );
}

function ProfileTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Profile</Text>;
}

function SPTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Single Player</Text>;
}

function Game1Title({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Game 1</Text>;
}

function Game2Title({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Game 2</Text>;
}

function Game3Title({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Game 3</Text>;
}

function Game4Title({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Game 4</Text>;
}

function Game5Title({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Game 5</Text>;
}

function Game6Title({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Game 6</Text>;
}

//ADD MODAL WHEN SOMEONE PRESS QUIT GAME, ASK ARE YOU SURE YOU WANT TO QUIT GAME!!!
// DOESN'T FREAKING WOOORKRRKRKRKKRKRKRK!!!! >:( >:( >:( >:( >:( >:( >:( >:(>:(>:(>:(>:(>:(>:(>:(>:(>:(>:(>:(>:(>:(

export default function App({ navigation }) {
  return (
    <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={globalScreenOptions}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <HomeTitle navigation={navigation} />,
                };
              }}
            />
            <Stack.Screen
              name="Info"
              component={Info}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <InfoTitle navigation={navigation} />,
                };
              }}
            />
            <Stack.Screen
              name="Suggest"
              component={Suggest}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <SuggestTitle navigation={navigation} />,
                };
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <LoginTitle navigation={navigation} />,
                };
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <RegisterTitle navigation={navigation} />,
                };
              }}
            />
            <Stack.Screen
              name="ForgotPass"
              component={ForgotPass}
              options={({ navigation }) => {
                return {
                  headerTitle: () => (
                    <ForgotPassTitle navigation={navigation} />
                  ),
                };
              }}
            />
            <Stack.Screen
              name="TermsAndCo"
              component={TermsAndCo}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <TACTitle navigation={navigation} />,
                };
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <ProfileTitle navigation={navigation} />,
                };
              }}
            />
            <Stack.Screen
              name="SinglePlayer"
              component={SinglePlayer}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <SPTitle navigation={navigation} />,
                };
              }}
            />
            {/* Single Player Game 1 Screens */}
            <Stack.Screen
              name="StartScreen1"
              component={StartScreen1}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game1Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreen1"
              component={GameScreen1}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game1Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreenChallenge1"
              component={GameScreenChallenge1}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game1Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            {/* Single Player Game 2 Screens */}
            <Stack.Screen
              name="StartScreen2"
              component={StartScreen2}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game2Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreen2"
              component={GameScreen2}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game2Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreenChallenge2"
              component={GameScreenChallenge2}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game2Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            {/* Single Player Game 3 Screens */}
            <Stack.Screen
              name="StartScreen3"
              component={StartScreen3}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game3Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreen3"
              component={GameScreen3}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game3Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreenChallenge3"
              component={GameScreenChallenge3}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game3Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            {/* Single Player Game 4 Screens */}
            <Stack.Screen
              name="StartScreen4"
              component={StartScreen4}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game4Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreen4"
              component={GameScreen4}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game4Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreenChallenge4"
              component={GameScreenChallenge4}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game4Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            {/* Single Player Game 5 Screens */}
            <Stack.Screen
              name="StartScreen5"
              component={StartScreen5}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game5Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreen5"
              component={GameScreen5}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game5Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="MidScreen5"
              component={MidScreen5}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game5Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreenChallenge5"
              component={GameScreenChallenge5}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game5Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            {/* Single Player Game 6 Screens */}
            <Stack.Screen
              name="StartScreen6"
              component={StartScreen6}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game6Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreen6"
              component={GameScreen6}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game6Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="MidScreen6"
              component={MidScreen6}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game6Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
            <Stack.Screen
              name="GameScreenChallenge6"
              component={GameScreenChallenge6}
              options={({ navigation }) => {
                return {
                  headerTitle: () => <Game6Title navigation={navigation} />,
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SinglePlayer")}
                      style={{ flexDirection: "row", marginLeft: -10 }}
                    >
                      <AntDesign
                        name="arrowleft"
                        size={18}
                        color="black"
                        style={{ marginTop: 2.5 }}
                      />
                      <Text style={{ fontSize: 18, marginLeft: 5 }}>
                        Quit Game
                      </Text>
                    </TouchableOpacity>
                  ),
                };
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
