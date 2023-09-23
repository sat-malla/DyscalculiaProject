import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Text, Button } from "@rneui/base";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { useHeaderHeight } from "@react-navigation/elements";
import { Link } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { auth } from "../firebase.js";
import { useGlobalState } from "./RewardSystem.js";

const Login = ({ navigation }) => {
  const { dark, colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [revealPass, setRevealPass] = useState(false);
  const [registered, isRegistered] = useGlobalState("registered");
  const myHeaderHeight = useHeaderHeight();

  const login = async () => {
    try {
      await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate("Home"), isRegistered(true))
    } catch (e) {
      isRegistered(false);
      switch (e.code) {
        case "auth/email-already-in-use":
          Alert.alert(`Email address ${email} already in use.`);
          break;
        case "auth/invalid-email":
          Alert.alert(`Email address ${email} is invalid.`);
          break;
        case "auth/operation-not-allowed":
          Alert.alert(`Error during sign up.`);
          break;
        case "auth/weak-password":
          Alert.alert(
            "Password is not strong enough. Add additional characters including special characters and numbers."
          );
          break;
        default:
          Alert.alert("Incorrect email or password, or user not found. Register below or type again.");
          break;
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{
        backgroundColor: colors.primary,
        flex: 1,
        padding: 10
      }}
      keyboardVerticalOffset={myHeaderHeight + 47}
    >
      <ScrollView scrollIndicatorInsets={{ right: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              alignItems: "center",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                marginTop: 50,
                color: colors.text,
              }}
            >
              Login
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginTop: 35,
                color: colors.text,
                textAlign: "center",
              }}
            >
              Login today to have custom profile pictures, achievements, and
              more!
            </Text>
            <Image
              source={require("../Images/loginPic.png")}
              style={{
                width: 300,
                height: 150,
                marginTop: 30,
                borderRadius: 8,
              }}
            />
            <View style={styles.inputCont}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="gray"
                style={[
                  styles.styleInput,
                  { borderColor: colors.text, color: colors.text },
                ]}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                keyboardAppearance={dark ? "dark" : "light"}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="gray"
                  style={[
                    styles.styleInput,
                    {
                      borderColor: colors.text,
                      width: 330,
                      color: colors.text,
                    },
                  ]}
                  keyboardType="default"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={revealPass ? false : true}
                />
                <TouchableOpacity
                  style={{
                    borderLeftWidth: 1,
                    borderColor: "gray",
                    padding: 5,
                    paddingHorizontal: 6,
                    width: 40,
                    height: 45,
                    marginLeft: -40,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => setRevealPass(!revealPass)}
                >
                  {revealPass ? (
                    <Feather name="eye" size={24} color={colors.text} />
                  ) : (
                    <Feather name="eye-off" size={24} color={colors.text} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <Button
              disabled={!email || !password}
              title="Login"
              style={[styles.button, { marginTop: 50 }]}
              titleStyle={{
                fontWeight: "bold",
                color: colors.bannerText,
              }}
              buttonStyle={{
                borderRadius: 8,
                backgroundColor: colors.loginBanner,
                height: 45,
              }}
              onPress={login}
            />
            <Link
              to={{ screen: "ForgotPass", params: { id: "id" } }}
              style={{
                marginTop: 20,
                color: colors.buttonColor,
                fontSize: 17,
              }}
            >
              Forgot Password?
            </Link>
            <Text
              style={{
                fontWeight: "bold",
                marginTop: 30,
                color: colors.orYouCan,
              }}
            >
              Or you can...
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 8,
                padding: 10,
                elevation: 2,
                width: "85%",
                backgroundColor: colors.orangeBG,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 30,
                alignSelf: "center",
              }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text
                style={{
                  color: colors.orangeText,
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Create New Account
              </Text>
            </TouchableOpacity>
            <View style={{ height: 50 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputCont: {
    marginTop: 50,
    width: 350,
    paddingHorizontal: 10,
  },
  styleInput: {
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 15,
    height: 45,
    elevation: 2,
  },
  button: {
    width: 330,
    height: 60,
  },
});
