import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Alert
} from "react-native";
import React, { useState } from "react";
import { Text, Button } from "@rneui/base";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { useHeaderHeight } from "@react-navigation/elements";
import { auth } from "../firebase.js";

const ForgotPass = ({ navigation }) => {
  const { dark, colors } = useTheme();
  const [email, setEmail] = useState("");
  const myHeaderHeight = useHeaderHeight();

  const forgotPass = async () => {
    await auth
        .sendPasswordResetEmail(email)
        .catch((error) => alert(error))
        .then(() => {
            Alert.alert("Success!", "Password reset email sent."),
            navigation.navigate("Login")
        })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        flex: 1,
      }}
      keyboardVerticalOffset={myHeaderHeight + 47}
    >
      <TouchableWithoutFeedback>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 50,
              color: colors.text
            }}
          >
            Forgot Password?
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginTop: 30,
              textAlign: "center",
              color: colors.text
            }}
          >
            Type in your email address so we can send you a confirmation email.
          </Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="gray"
            style={[
              styles.styleInput,
              { borderColor: colors.text, color: colors.text },
            ]}
            textContentType="text"
            value={email}
            onChangeText={setEmail}
            keyboardAppearance={dark ? "dark" : "light"}
          />
          <Button
            disabled={!email}
            title="Send"
            style={{ marginTop: 30, width: 300, height: 60 }}
            titleStyle={{
              fontWeight: "bold",
              color: "#11ad71",
            }}
            buttonStyle={{
              borderRadius: 8,
              backgroundColor: colors.loginBanner,
              height: 45,
            }}
            onPress={forgotPass}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  styleInput: {
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 15,
    marginTop: 40,
    height: 45,
    elevation: 2,
    width: 300
  },
});
