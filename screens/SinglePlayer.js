import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  ImageBackground,
  Pressable,
  Animated,
  Button,
} from "react-native";
import { Text } from "@rneui/base";
import React, { useState, useRef, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { LinearGradient } from "expo-linear-gradient";

const SinglePlayer = ({ navigation }) => {
  const { colors } = useTheme();
  const [firstGameModal, setFirstGameModal] = useState(false);
  const [secondGameModal, setSecondGameModal] = useState(false);
  const [thirdGameModal, setThirdGameModal] = useState(false);
  const [fourthGameModal, setFourthGameModal] = useState(false);
  const [fifthGameModal, setFifthGameModal] = useState(false);
  const [sixthGameModal, setSixthGameModal] = useState(false);

  const data = [
    {
      id: "1",
      title: "Game 1",
      image: require("/Users/sathvikm/Documents/DyscalculiaProject/Images/hand.jpg"),
      openModal: () => setFirstGameModal(true),
    },
    {
      id: "2",
      title: "Game 3",
      image: require("/Users/sathvikm/Documents/DyscalculiaProject/Images/hand.jpg"),
      openModal: () => setThirdGameModal(true)
    },
    {
      id: "3",
      title: "Game 5",
      image: require("/Users/sathvikm/Documents/DyscalculiaProject/Images/hand.jpg"),
      openModal: () => setFifthGameModal(true)
    },
  ];

  const data1 = [
    {
      id: "4",
      title: "Game 2",
      image: require("/Users/sathvikm/Documents/DyscalculiaProject/Images/addition.jpg"),
      openModal: () => setSecondGameModal(true)
    },
    {
      id: "5",
      title: "Game 4",
      image: require("/Users/sathvikm/Documents/DyscalculiaProject/Images/hand.jpg"),
      openModal: () => setFourthGameModal(true)
    },
    {
      id: "6",
      title: "Game 6",
      image: require("/Users/sathvikm/Documents/DyscalculiaProject/Images/hand.jpg"),
      openModal: () => setSixthGameModal(true)
    },
  ];

  function startGame1() {
    navigation.navigate("StartScreen1");
    setFirstGameModal(false)
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
      {/* Game 1 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={firstGameModal}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!firstGameModal);
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
                height: 298,
                width: 378,
                alignItems: "center",
                // marginRight: 0.75,
              }}
            >
              <ImageBackground
                source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/hand.jpg")}
                imageStyle={{ opacity: 0.2 }}
                animationType="fade"
                style={{ width: 378, height: 318, padding: 20 }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    marginBottom: 15,
                  }}
                >
                  Game 1
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  Game Information:
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  Lorem ipsum dolor
                </Text>
                <Pressable
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    width: 200,
                    backgroundColor: "#6bffc6",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: 10,
                    marginBottom: 50,
                    alignSelf: "center",
                  }}
                  onPress={() => startGame1()}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Start Game
                  </Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                </Pressable>
                <Button
                  title="Close"
                  onPress={() => setFirstGameModal(false)}
                  color="black"
                />
              </ImageBackground>
            </LinearGradient>
          </View>
        </View>
      </Modal>
      {/* Game 2 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={secondGameModal}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!secondGameModal);
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
                height: 298,
                width: 378,
                alignItems: "center",
                // marginRight: 0.75,
              }}
            >
              <ImageBackground
                source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/addition.jpg")}
                imageStyle={{ opacity: 0.2 }}
                animationType="fade"
                style={{ width: 378, height: 318, padding: 20 }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    marginBottom: 15,
                  }}
                >
                  Game 2
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  Game Information:
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  Lorem ipsum dolor
                </Text>
                <Pressable
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    width: 200,
                    backgroundColor: "#6bffc6",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: 10,
                    marginBottom: 50,
                    alignSelf: "center",
                  }}
                  // onPress={!setFirstGameModal}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Start Game
                  </Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                </Pressable>
                <Button
                  title="Close"
                  onPress={() => setSecondGameModal(false)}
                  color="black"
                />
              </ImageBackground>
            </LinearGradient>
          </View>
        </View>
      </Modal>
      {/* Game 3 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={thirdGameModal}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!thirdGameModal);
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
                height: 298,
                width: 378,
                alignItems: "center",
                // marginRight: 0.75,
              }}
            >
              <ImageBackground
                source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/addition.jpg")}
                imageStyle={{ opacity: 0.2 }}
                animationType="fade"
                style={{ width: 378, height: 318, padding: 20 }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    marginBottom: 15,
                  }}
                >
                  Game 3
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  Game Information:
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  Lorem ipsum dolor
                </Text>
                <Pressable
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    width: 200,
                    backgroundColor: "#6bffc6",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: 10,
                    marginBottom: 50,
                    alignSelf: "center",
                  }}
                  // onPress={!setFirstGameModal}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Start Game
                  </Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                </Pressable>
                <Button
                  title="Close"
                  onPress={() => setThirdGameModal(false)}
                  color="black"
                />
              </ImageBackground>
            </LinearGradient>
          </View>
        </View>
      </Modal>
      {/* Game 4 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={fourthGameModal}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!fourthGameModal);
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
                height: 298,
                width: 378,
                alignItems: "center",
                // marginRight: 0.75,
              }}
            >
              <ImageBackground
                source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/addition.jpg")}
                imageStyle={{ opacity: 0.2 }}
                animationType="fade"
                style={{ width: 378, height: 318, padding: 20 }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    marginBottom: 15,
                  }}
                >
                  Game 4
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  Game Information:
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  Lorem ipsum dolor
                </Text>
                <Pressable
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    width: 200,
                    backgroundColor: "#6bffc6",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: 10,
                    marginBottom: 50,
                    alignSelf: "center",
                  }}
                  // onPress={!setFirstGameModal}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Start Game
                  </Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                </Pressable>
                <Button
                  title="Close"
                  onPress={() => setFourthGameModal(false)}
                  color="black"
                />
              </ImageBackground>
            </LinearGradient>
          </View>
        </View>
      </Modal>
      {/* Game 5 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={fifthGameModal}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!fifthGameModal);
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
                height: 298,
                width: 378,
                alignItems: "center",
                // marginRight: 0.75,
              }}
            >
              <ImageBackground
                source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/addition.jpg")}
                imageStyle={{ opacity: 0.2 }}
                animationType="fade"
                style={{ width: 378, height: 318, padding: 20 }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    marginBottom: 15,
                  }}
                >
                  Game 5
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  Game Information:
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  Lorem ipsum dolor
                </Text>
                <Pressable
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    width: 200,
                    backgroundColor: "#6bffc6",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: 10,
                    marginBottom: 50,
                    alignSelf: "center",
                  }}
                  // onPress={!setFirstGameModal}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Start Game
                  </Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                </Pressable>
                <Button
                  title="Close"
                  onPress={() => setFifthGameModal(false)}
                  color="black"
                />
              </ImageBackground>
            </LinearGradient>
          </View>
        </View>
      </Modal>
      {/* Game 6 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={sixthGameModal}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!sixthGameModal);
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
                height: 298,
                width: 378,
                alignItems: "center",
                // marginRight: 0.75,
              }}
            >
              <ImageBackground
                source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/addition.jpg")}
                imageStyle={{ opacity: 0.2 }}
                animationType="fade"
                style={{ width: 378, height: 318, padding: 20 }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    marginBottom: 15,
                  }}
                >
                  Game 6
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  Game Information:
                </Text>
                <Text
                  style={{
                    marginBottom: 20,
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  Lorem ipsum dolor
                </Text>
                <Pressable
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    width: 200,
                    backgroundColor: "#6bffc6",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginTop: 10,
                    marginBottom: 50,
                    alignSelf: "center",
                  }}
                  // onPress={!setFirstGameModal}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Start Game
                  </Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                </Pressable>
                <Button
                  title="Close"
                  onPress={() => setSixthGameModal(false)}
                  color="black"
                />
              </ImageBackground>
            </LinearGradient>
          </View>
        </View>
      </Modal>
      
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
              onPress={item.openModal}
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
                  <Text
                    style={{
                      marginLeft: 15,
                      marginTop: 15,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 15,
                      marginTop: 50,
                      fontSize: 12,
                      fontWeight: "500",
                    }}
                  >
                    Press for more info
                  </Text>
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
              onPress={item.openModal}
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
                  <Text
                    style={{
                      marginLeft: 15,
                      marginTop: 15,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 15,
                      marginTop: 50,
                      fontSize: 12,
                      fontWeight: "500",
                    }}
                  >
                    Press for more info
                  </Text>
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