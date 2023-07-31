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
} from "react-native";
import React, { useState } from "react";
import { Text, Button } from "@rneui/base";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { useHeaderHeight } from "@react-navigation/elements";
import { Feather } from "@expo/vector-icons";
import { auth } from "../firebase.js";

const Login = ({ navigation }) => {
  const { dark, colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [revealPass, setRevealPass] = useState(false);
  const myHeaderHeight = useHeaderHeight();

  const login = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error))
      .then(
        () => navigation.navigate("Home")
        //   isGlobalRegistered(true),
        //   console.log("Is Global Registered?: " + globalRegistered)
      );
  };

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
          <Image
            source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/loginPic.png")}
            style={{ width: 300, height: 150, marginTop: 15 }}
          />
          <View style={styles.inputCont}>
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
                  { borderColor: colors.text, width: 330 },
                ]}
                textContentType="text"
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
                  <Feather name="eye" size={24} color="black" />
                ) : (
                  <Feather name="eye-off" size={24} color="black" />
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
              color: "#11ad71",
            }}
            buttonStyle={{
              borderRadius: 8,
              backgroundColor: "#c9ffea",
              height: 45,
            }}
            onPress={login}
          />
          {/* Create button for Forgot Password */}
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
              backgroundColor: "#fcede1",
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
                color: "#ed8939",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Create New Account
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
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
