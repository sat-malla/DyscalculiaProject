import { StyleSheet, View, Button, TouchableOpacity, FlatList, Modal, Pressable, ImageBackground } from "react-native";
import React, { useState } from "react";
import { useTheme } from "/Users/sathvikm/Documents/DyscalculiaProject/DarkTheme/ThemeProvider.js";
import { Text } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

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

const GameScreenChallenge1 = ({ navigation }) => {
  const { colors } = useTheme();
  const [gameModal, setGameModal] = useState(false);

  const finishGame = () => {
    setGameModal(false)
    navigation.navigate("SinglePlayer")
  }

  return (
    <View
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
        visible={gameModal}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!gameModal);
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
              }}
            >
              {/* Give confetti image credit: https://unsplash.com/@dendrolago89 */}
              <ImageBackground
                source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/confetti.jpeg")}
                imageStyle={{ opacity: 0.2 }}
                animationType="fade"
                style={{ width: 378, height: 318, padding: 35 }}
              >
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                  }}
                >
                  Congragulations! You completed the Game!
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
                  onPress={() => finishGame()}
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
      <Button 
        title="Temporary congrats, actually open modal"
        onPress={() => setGameModal(true)}
      />
    </View>
  );
};

export default GameScreenChallenge1;

const styles = StyleSheet.create({
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
