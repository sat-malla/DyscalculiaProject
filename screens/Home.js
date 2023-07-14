import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import { Text } from "@rneui/base";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const { dark, colors, setScheme } = useTheme();

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
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 60,
          color: colors.text,
        }}
      >
        Let Dyscalculia guide you to conquer your math hurdles!
      </Text>
      <Text
        style={{
          fontSize: 15,
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
          borderColor: colors.text
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
          <AntDesign
            name="arrowright"
            size={24}
            style={{ marginTop: 5 }}
          />
        </LinearGradient>
      </TouchableOpacity>
      <Button
        title="Any problems or advice? Contact here"
        color={ colors.buttonColor }
        onPress={() => navigation.navigate("Suggest")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
