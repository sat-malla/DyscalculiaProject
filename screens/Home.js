import {
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { Text } from "@rneui/base";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { useGlobalState } from "/Users/sathvikm/Documents/DyscalculiaProject/screens/RewardSystem.js";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { auth, db } from "../firebase.js";

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const [heyThere, setHeyThere] = useState(false);
  const [registered, isRegistered] = useGlobalState("registered");
  const [userClosed, setUserClosed] = useState(false);
  const userId = useGlobalState("userId");

  const checkIfUserClosed = () => {
    let idUser = userId;
    let userInfo = db.collection("userdata").doc(idUser).get();
    userInfo.then((snapshot) => {
      if (snapshot.exists) {
        let boolean = "false";
        let closed = snapshot.data().closed;
        setUserClosed(boolean === closed);
      }
    });
    db.collection("userdata")
      .doc(idUser)
      .set(
        {
          closed: "true",
        },
        { merge: true }
      )
      .catch((error) => {
        alert(error);
      });
  };

  // useEffect(() => {
  //   checkIfUserClosed();
  // }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => ((
        registered ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 22,
              marginLeft: -5,
              marginBottom: 2,
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Profile")}
            >
              <Ionicons
                name="ios-person-circle-outline"
                size={40}
                color="black"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )
      )),
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
            onPress={() => navigation.navigate("Info")}
            activeOpacity={0.5}
          >
            <AntDesign name="infocirlceo" size={25} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView
      style={{
        height: "100%",
        backgroundColor: colors.primary,
      }}
      contentContainerStyle={{
        alignItems: "center",
        paddingHorizontal: 20,
      }}
      scrollIndicatorInsets={{ right: 1 }}
    >
      {registered ? (
        heyThere ? (
          <Text> </Text>
        ) : (
          <View
            style={{
              backgroundColor: "#c9ffea",
              width: 300,
              padding: 15,
              paddingVertical: 10,
              overflow: "hidden",
              borderWidth: 2,
              borderRadius: 8,
              borderColor: colors.text,
              marginTop: 20,
              width: "86%",
            }}
          >
            <Button
              title="Close"
              onPress={() => setHeyThere(true)}
              style={{ marginTop: -20, marginBottom: 20, marginRight: 50 }}
            />
            <Image
              source={require("/Users/sathvikm/Documents/DyscalculiaProject/Images/helloHome.png")}
              style={{ width: 300, height: 200, borderRadius: 6 }}
            />
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Hey There! 👋
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Click the top left corner above to access your profile! ↖️
            </Text>
          </View>
        )
      ) : (
        <TouchableOpacity
          style={{
            borderRadius: 10,
            padding: 10,
            elevation: 2,
            width: "75%",
            backgroundColor: colors.loginBanner,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign
            name="infocirlceo"
            size={19}
            color={colors.bannerText}
            style={{ marginRight: 10, marginLeft: 12, marginTop: 7 }}
          />
          <Text style={{ color: colors.bannerText, fontWeight: "500" }}>
            Login today to have custom profile pictures, achievements, and more!
          </Text>
          <AntDesign
            name="arrowright"
            size={15}
            color={colors.bannerText}
            style={{ marginTop: 10, marginLeft: 3, marginRight: 10 }}
          />
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
          textAlign: "center",
          color: colors.text,
        }}
      >
        Let Dyscalculia guide you to conquer your math hurdles!
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          marginTop: 50,
          color: colors.text,
        }}
      >
        Get started below!
      </Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          height: 170,
          width: 180,
          alignItems: "center",
          marginTop: 50,
          marginBottom: 50,
          borderRadius: 16,
          borderColor: colors.text,
        }}
        onPress={() => navigation.navigate("SinglePlayer")}
      >
        <LinearGradient
          colors={["#6bffc6", colors.gradientEndCol]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 0.8 }}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 16,
            width: 178,
            marginRight: 0.75,
            height: 168,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
            Single Player
          </Text>
          <Text style={{ fontSize: 17, marginTop: 10 }}>
            Solve exciting challenges for desired self-improvement!
          </Text>
          <AntDesign name="arrowright" size={24} style={{ marginTop: 5 }} />
        </LinearGradient>
      </TouchableOpacity>
      <Button
        title="Any problems or advice? Contact here"
        color={colors.buttonColor}
        onPress={() => navigation.navigate("Suggest")}
      />
      <View style={{ height: 70, marginTop: 200 }} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
