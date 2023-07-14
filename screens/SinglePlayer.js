import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Text } from "@rneui/base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { LinearGradient } from "expo-linear-gradient";

const data = [
  {
    id: "1",
    title: "Game 1",
    image: require("/Users/sathvikm/Documents/DyscalculiaProject/Images/hand.jpg"),
  },
  {
    id: "2",
    title: "Game 3",
  },
  {
    id: "3",
    title: "Game 5",
  },
];

const data1 = [
  {
    id: "4",
    title: "Game 2",
  },
  {
    id: "5",
    title: "Game 4",
  },
  {
    id: "6",
    title: "Game 6",
  },
];

const SinglePlayer = () => {
  const { colors } = useTheme();

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
        Single Player Activities
      </Text>
      <Text style={{ fontSize: 20, marginTop: 40, color: colors.text }}>
        What do you want to work on today?
      </Text>
      <View style={{ flexDirection: "row", marginLeft: 30 }}>
        <FlatList
          data={data}
          scrollEnabled={false}
          contentContainerStyle={{ justifyContent: "center" }}
          style={{ marginTop: 50 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                borderColor: colors.text,
                borderWidth: 1,
                height: 120,
                width: 140,
                marginTop: 10,
                alignItems: "center",
                borderRadius: 16,
              }}
            >
              <LinearGradient
                colors={["#6bffc6", colors.gradientEndCol]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 16,
                  alignItems: "center",
                  height: 118,
                  width: 138,
                  // marginRight: 0.75,
                }}
              >
                <ImageBackground
                  source={item.image}
                  imageStyle={{ opacity: 0.3 }}
                  style={{ width: 138, height: 118 }}
                >
                  <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
                  <AntDesign
                    name="arrowright"
                    size={23}
                    color="black"
                    style={{ alignSelf: "flex-end", marginRight: 15, marginTop: 40 }}
                  />
                </ImageBackground>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={data1}
          scrollEnabled={false}
          contentContainerStyle={{ justifyContent: "center" }}
          style={{ marginTop: 50 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                borderColor: colors.text,
                borderWidth: 1,
                height: 120,
                width: 140,
                marginTop: 10,
                marginLeft: 15,
                alignItems: "center",
                borderRadius: 16,
              }}
            >
              <LinearGradient
                colors={["#6bffc6", colors.gradientEndCol]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 16,
                  alignItems: "center",
                  height: 118,
                  width: 138,
                  // marginRight: 0.75,
                }}
              >
                <ImageBackground
                  source={item.image}
                  imageStyle={{ opacity: 0.3 }}
                  style={{ width: 138, height: 118 }}
                >
                  <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
                  <AntDesign
                    name="arrowright"
                    size={23}
                    color="black"
                    style={{ alignSelf: "flex-end", marginRight: 15, marginTop: 40 }}
                  />
                </ImageBackground>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default SinglePlayer;

const styles = StyleSheet.create({});
