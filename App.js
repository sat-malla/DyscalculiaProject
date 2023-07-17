import "react-native-gesture-handler";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@rneui/base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import {
  ThemeProvider,
  useTheme,
} from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";

// Importing Screens
import Home from "./screens/Home";
import Info from "./screens/Info";
import Suggest from "./screens/Suggest";
import SinglePlayer from "./screens/SinglePlayer";

// Importing Single Player Game 1 Screens
import StartScreen1 from "./screens/Game1Screens/StartScreen1";
import GameScreen1 from "./screens/Game1Screens/GameScreen1";
import GameScreenChallenge1 from "./screens/Game1Screens/GameScreenChallenge1";


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

function SPTitle({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Single Player</Text>;
}

function Game1Title({ navigation }) {
  return <Text style={{ fontSize: 25 }}>Game 1</Text>;
}

//ADD MODAL WHEN SOMEONE PRESS QUIT GAME, ASK ARE YOU SURE YOU WANT TO QUIT GAME!!!

export default function App() {
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
                  <TouchableOpacity onPress={() => navigation.navigate("SinglePlayer")} style={{ flexDirection: "row", marginLeft: -10 }}>
                    <AntDesign name="arrowleft" size={18} color="black" style={{ marginTop: 2.5 }} />
                    <Text style={{ fontSize: 18, marginLeft: 5 }}>Quit Game</Text>
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
                  <TouchableOpacity onPress={() => navigation.navigate("SinglePlayer")} style={{ flexDirection: "row", marginLeft: -10 }}>
                    <AntDesign name="arrowleft" size={18} color="black" style={{ marginTop: 2.5 }} />
                    <Text style={{ fontSize: 18, marginLeft: 5 }}>Quit Game</Text>
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
                  <TouchableOpacity onPress={() => navigation.navigate("SinglePlayer")} style={{ flexDirection: "row", marginLeft: -10 }}>
                    <AntDesign name="arrowleft" size={18} color="black" style={{ marginTop: 2.5 }} />
                    <Text style={{ fontSize: 18, marginLeft: 5 }}>Quit Game</Text>
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
});
