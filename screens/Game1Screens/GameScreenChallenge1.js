import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";

const buttons = [
    {
      id: "1",
      number: 1,
    },
    {
      id: "2",
      number: 2,
    },
    {
      id: "3",
      number: 3,
    },
    {
      id: "4",
      number: 4,
    },
    {
      id: "5",
      number: 5,
    },
  ];
  
  const buttons1 = [
      {
        id: "1",
        number: 6,
      },
      {
        id: "2",
        number: 7,
      },
      {
        id: "3",
        number: 8,
      },
      {
        id: "4",
        number: 9,
      },
      {
        id: "5",
        number: 10,
      },
    ];

const GameScreenChallenge1 = () => {
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
          color: colors.text,
          marginTop: 60,
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Count the number of fruits on the screen!
      </Text>
      <FlatList
        data={buttons}
        scrollEnabled={false}
        contentContainerStyle={{ flexDirection: "row", justifyContent: "center" }}
        style={{ marginTop: 50 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              borderColor: colors.text,
              borderWidth: 1,
              height: 40,
              width: 40,
              marginTop: 10,
              marginLeft: 15,
              alignItems: "center",
              borderRadius: 8,
              padding: 10,
              backgroundColor: "#b3ffe4"
            }}
          >
            <Text>{item.number}</Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={buttons1}
        scrollEnabled={false}
        contentContainerStyle={{ flexDirection: "row", justifyContent: "center" }}
        style={{ marginTop: -520}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              borderColor: colors.text,
              borderWidth: 1,
              height: 40,
              width: 40,
              marginLeft: 15,
              alignItems: "center",
              borderRadius: 8,
              padding: 10,
              backgroundColor: "#b3ffe4"
            }}
          >
            <Text>{item.number}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default GameScreenChallenge1;

const styles = StyleSheet.create({});
