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
} from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Text, Button } from "@rneui/base";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { useHeaderHeight } from "@react-navigation/elements";
import { AntDesign, FontAwesome, Feather, Entypo } from "@expo/vector-icons";
import { CheckBox } from "@rneui/base";
import { Link } from "@react-navigation/native";
import { auth, db } from "../firebase.js";
import firebase from "firebase/compat/app";
import { useGlobalState } from "/Users/sathvikm/Documents/DyscalculiaProject/screens/RewardSystem.js";

const Register = ({ navigation }) => {
  const { dark, colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsCo, setTermsCo] = useState(false);
  const [revealPass, setRevealPass] = useState(false);
  const [registered, isRegistered] = useGlobalState("registered");
  const [userId, setUserId] = useGlobalState("userId");
  const [userFieldId, setUserFieldId] = useGlobalState("docUserId");
  const myHeaderHeight = useHeaderHeight();

  const addUserData = async () => {
    await db
      .collection("userdata")
      .add({
        email: auth.currentUser.email,
        gender: 0,
        glasses: false,
        partyHat: false,
        id: auth.currentUser.uid,
      })
      .catch((error) => alert(error));
  };

  const register = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(
         navigation.navigate("Home"),
         isRegistered(true),
      )
      .catch((error) => alert(error));
    setUserId(auth.currentUser.uid);
    addUserData();
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
    });
  }, [navigation]);

  return (
    <ScrollView
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}
      scrollIndicatorInsets={{ right: 1 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
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
            <Image
              source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/registerPic.png")}
              style={{
                width: 300,
                height: 220,
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
                keyboardType="default"
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
              disabled={!email || !password || !termsCo}
              title="Register"
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
          </View>
        </TouchableWithoutFeedback>
        <View style={{ height: 100 }} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  inputCont: {
    marginTop: 30,
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
