import {
  StyleSheet,
  View,
  Modal,
  Alert,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Text, Input, Button } from "@rneui/base";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { db } from "../firebase";

const Suggest = ({ navigation }) => {
  const { dark, colors } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const sendMessage = async () => {
    await db
      .collection("contactresponses")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setModalVisible(true);
      })
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        alignItems: "center",
        height: "100%",
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Closed");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <View style={[styles.modalView, { backgroundColor: colors.primary, borderColor: colors.text, borderWidth: 1 }]}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 25,
                marginBottom: 15,
                color: colors.text,
              }}
            >
              Message Sent!
            </Text>
            <Text
              style={{
                marginBottom: 20,
                textAlign: "center",
                fontSize: 20,
                color: colors.text,
              }}
            >
              We will try to get back to you within a week.
            </Text>
            <Pressable
              style={[
                { borderRadius: 20, padding: 10, elevation: 2, width: 150 },
                { backgroundColor: "#6bffc6" },
              ]}
              onPress={() => navigation.goBack()}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
        }}
      >
        Contact Here
      </Text>
      <Text style={{ fontSize: 20, marginTop: 50, color: colors.text }}>
        Any issues or suggestions? Please contact me to get the best out of this
        app!
      </Text>
      <View style={styles.inputCont}>
        <Input
          placeholder="Name"
          autoFocus
          multiline={true}
          type="text"
          keyboardAppearance={dark ? "dark" : "light"}
          value={name}
          style={{ color: colors.text }}
          onChangeText={(text) => setName(text)}
          containerStyle={[styles.inputStyl, { borderColor: colors.text }]} // Add this for dark mode:  { borderColor: colors.text }
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
        <Input
          placeholder="Email"
          multiline={true}
          type="email"
          keyboardAppearance={dark ? "dark" : "light"}
          value={email}
          style={{ color: colors.text }}
          onChangeText={(text) => setEmail(text)}
          containerStyle={[styles.inputStyl, { borderColor: colors.text }]} // Add this for dark mode:  { borderColor: colors.text }
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
        <Input
          placeholder="Your Message"
          multiline={true}
          type="text"
          keyboardAppearance={dark ? "dark" : "light"}
          value={message}
          style={{ color: colors.text }}
          onChangeText={(text) => setMessage(text)}
          containerStyle={[styles.mesContainer, { borderColor: colors.text }]} // Add this for dark mode:  { borderColor: colors.text }
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
      </View>
      <Button
        disabled={!name || !email || !message}
        title="Send"
        style={styles.button}
        titleStyle={{
          color: colors.text,
          fontWeight: "bold",
          color: "black",
        }}
        buttonStyle={{
          borderRadius: 8,
          backgroundColor: "#6bffc6",
        }}
        onPress={sendMessage}
      />
    </KeyboardAvoidingView>
  );
};

export default Suggest;

const styles = StyleSheet.create({
  inputCont: {
    marginTop: 50,
    width: 350,
    paddingHorizontal: 10,
  },
  inputStyl: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 5,
    marginTop: 20,
    height: 50,
  },
  mesContainer: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 5,
    marginTop: 20,
    height: 200,
  },
  button: {
    width: 200,
    marginTop: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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