import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Text, Button } from "@rneui/base";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { useHeaderHeight } from "@react-navigation/elements";
import { AntDesign, FontAwesome, Feather, Entypo } from "@expo/vector-icons";
import { CheckBox } from "@rneui/base";
import { Link } from "@react-navigation/native";
import { isRegistered } from "./RegisteredOrNot.js";
import { auth } from "../firebase.js";

const Register = ({ navigation }) => {
  const { dark, colors } = useTheme();
  const { globalRegistered, isTrueRegistered } = isRegistered();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsCo, setTermsCo] = useState(false);
  const [revealPass, setRevealPass] = useState(false);
  const myHeaderHeight = useHeaderHeight();

  const register = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error))
      .then(
        () => navigation.navigate("Home"),
        globalRegistered ? isTrueRegistered(true) : isTrueRegistered(false),
        console.log("Is Global Registered 3?: " + globalRegistered)
      );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
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
            onPress={() => navigation.navigate("Home")}
            activeOpacity={0.5}
          >
            <Entypo name="home" size={30} color="black" />
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])

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
            Register Today!
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginTop: 50,
              color: colors.text,
              textAlign: "center",
            }}
          >
            Register for customized profile pictures, achievements, and more!
          </Text>
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
                style={[styles.styleInput, { borderColor: colors.text, width: 330, color: colors.text }]}
                textContentType="text"
                value={password}
                onChangeText={setPassword}
                keyboardAppearance={dark ? "dark" : "light"}
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
                  justifyContent: "center"
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
            disabled={!email || !password || !termsCo}
            title="Register"
            style={[styles.button, { marginTop: 50 }]}
            titleStyle={{
              fontWeight: "bold",
              color: "#11ad71",
            }}
            buttonStyle={{
              borderRadius: 8,
              backgroundColor: colors.loginBanner,
              height: 45,
            }}
            onPress={register}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              marginRight: 20,
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckBox
                style={{
                  alignSelf: "center",
                }}
                containerStyle={{
                  marginTop: 15,
                  marginRight: -5,
                  backgroundColor: "transparent",
                }}
                checkedColor="#11ad71"
                checked={termsCo}
                onPress={() => setTermsCo(!termsCo)}
              />
              <Text style={{ marginTop: 10, color: colors.text }}>
                By registering, you confirm that you accept our
              </Text>
            </View>
            <Link
              to={{ screen: "TermsAndCo", params: { id: "id" } }}
              style={{ marginTop: -20, color: colors.buttonColor }}
            >
              Terms & Conditions
            </Link>
          </View>

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
            //   onPress={() => navigation.navigate("Register")}
          >
            <AntDesign name="google" size={24} color="#ed8939" />
            <Text
              style={{
                color: "#ed8939",
                fontWeight: "bold",
                fontSize: 18,
                marginRight: 45,
              }}
            >
              Sign up with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 8,
              padding: 10,
              elevation: 2,
              width: "85%",
              backgroundColor: "#e1eafc",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 15,
              alignSelf: "center",
            }}
            // onPress={() => navigation.navigate("Register")}
          >
            <FontAwesome
              name="facebook-f"
              size={24}
              color="#4f8aff"
              style={{ marginLeft: 5 }}
            />
            <Text
              style={{
                color: "#4f8aff",
                fontWeight: "bold",
                fontSize: 18,
                marginRight: 35,
              }}
            >
              Sign up with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;

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
