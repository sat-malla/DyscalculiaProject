import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { Text } from "@rneui/base";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { isRegistered } from "./RegisteredOrNot.js";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const { dark, colors, setScheme } = useTheme();
  const { globalRegistered } = isRegistered();

  const toggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

  navigation.setOptions({
    headerLeft: () => (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: 22,
          marginLeft: -5,
          marginBottom: 2,
        }}
      >
        <TouchableOpacity
          onPress={toggleTheme}
          style={{
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 8,
            padding: 5,
            paddingHorizontal: 6,
          }}
        >
          {dark ? (
            <Entypo name="light-up" size={17} color={"black"} />
          ) : (
            <Ionicons name="moon" size={17} color={"black"} />
          )}
        </TouchableOpacity>
      </View>
    ),
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
          onPress={() => navigation.navigate("Info")}
          activeOpacity={0.5}
        >
          <AntDesign name="infocirlceo" size={25} color="black" />
        </TouchableOpacity>
      </View>
    ),
  });

  return (
    <View
      style={{
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
      }}
    >
      {globalRegistered ? (
        <View
          style={{
            backgroundColor: "#c9ffea",
            width: 300,
            padding: 15,
            overflow: "hidden",
            borderWidth: 2,
            borderRadius: 8,
            borderColor: colors.text,
            marginTop: 20,
            width: "86%",
          }}
        >
          <Image
            source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/helloHome.png")}
            style={{ width: 300, height: 200, borderRadius: 6 }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 20,
              color: colors.text,
            }}
          >
            Hey There! 👋
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          style={{
            borderRadius: 10,
            padding: 10,
            elevation: 2,
            width: "75%",
            backgroundColor: colors.loginBanner,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign
            name="infocirlceo"
            size={19}
            color="#11ad71"
            style={{ marginRight: 10, marginLeft: 12, marginTop: 7 }}
          />
          <Text style={{ color: "#11ad71", fontWeight: "500" }}>
            Login today to have custom profile pictures, achievements, and more!
          </Text>
          <AntDesign
            name="arrowright"
            size={15}
            color="#11ad71"
            style={{ marginTop: 10, marginLeft: 3, marginRight: 10 }}
          />
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
          textAlign: "center",
          color: colors.text,
        }}
      >
        Let Dyscalculia guide you to conquer your math hurdles!
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          marginTop: 50,
          color: colors.text,
        }}
      >
        Get started by pressing anything below!
      </Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          height: 170,
          width: 180,
          alignItems: "center",
          marginTop: 50,
          marginBottom: 50,
          borderRadius: 16,
          borderColor: colors.text,
        }}
        onPress={() => navigation.navigate("SinglePlayer")}
      >
        <LinearGradient
          colors={["#6bffc6", colors.gradientEndCol]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 0.8 }}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 16,
            width: 178,
            marginRight: 0.75,
            height: 168,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
            Single Player
          </Text>
          <Text style={{ fontSize: 17, marginTop: 10 }}>
            Solve exciting challenges for desired self-improvement!
          </Text>
          <AntDesign name="arrowright" size={24} style={{ marginTop: 5 }} />
        </LinearGradient>
      </TouchableOpacity>
      <Button
        title="Any problems or advice? Contact here"
        color={colors.buttonColor}
        onPress={() => navigation.navigate("Suggest")}
      />
      <TouchableOpacity
        style={{
          backgroundColor: colors.loginBanner,
          alignItems: "center",
          padding: 15,
          overflow: "hidden",
          borderWidth: 2,
          borderRadius: 8,
          borderColor: colors.text,
          marginTop: 20,
          width: "80%",
        }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Check Your Profile Here! 👇</Text>
        <Ionicons name="ios-person-circle-outline" size={130} color="black" style={{ marginTop: 10 }}/>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
