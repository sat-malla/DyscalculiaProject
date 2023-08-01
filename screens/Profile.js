import { StyleSheet, ScrollView, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, ButtonGroup } from "@rneui/base";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const maleFemaleAvatars = [
  "/Users/sathvikm/Documents/DyscalculiaProject/Images/maleProfilePic.png",
  "/Users/sathvikm/Documents/DyscalculiaProject/Images/femaleProfilePic.png",
];

const Profile = () => {
  const { colors } = useTheme();
  const [maleFemale, setMaleFemale] = useState(maleFemaleAvatars[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const buttonOptions = ["Male", "Female"];
  // Add glasses and party hat profile pictures

  return (
    <ScrollView
      style={{
        height: "100%",
        backgroundColor: colors.primary,
      }}
      contentContainerStyle={{
        alignItems: "center",
        paddingHorizontal: 15,
      }}
      scrollIndicatorInsets={{ right: 1 }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 50,
          color: colors.text,
        }}
      >
        Welcome to Your Profile!
      </Text>
      <Image
        source={
          selectedIndex == 0
            ? require("/Users/sathvikm/Documents/DyscalculiaProject/Images/maleProfilePic.png")
            : require("/Users/sathvikm/Documents/DyscalculiaProject/Images/femaleProfilePic.png")
        }
        style={{ width: 400, height: 400, marginTop: 30 }}
      />
      <ButtonGroup
        buttons={buttonOptions}
        selectedIndex={selectedIndex}
        onPress={(value) => setSelectedIndex(value)}
        containerStyle={[
          styles.buttonGStyle,
          { borderColor: colors.text, backgroundColor: colors.primary },
        ]}
        selectedButtonStyle={{ backgroundColor: "#6bffc6" }}
        textStyle={{ color: colors.text, fontWeight: "bold", fontSize: 20 }}
        selectedTextStyle={{ color: "black", fontWeight: "bold" }}
      />
      <Text
        style={{
          marginTop: 50,
          fontWeight: "500",
          fontSize: 15,
          textAlign: "center",
        }}
      >
        When you complete 3 single-player games(15 stars), you will earn this feature!:
      </Text>
      <TouchableOpacity
        style={{
          borderRadius: 8,
          padding: 10,
          elevation: 2,
          width: "75%",
          backgroundColor: colors.loginBanner,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 20,
          alignSelf: "center",
        }}
        //  Disable when user hasn't completed 3 games
        //   onPress={() => navigation.navigate("Register")}
      >
        <Ionicons name="glasses" size={35} color="#11ad71" />
        <Text
          style={{
            color: "#11ad71",
            fontWeight: "bold",
            fontSize: 18,
            marginRight: 35,
          }}
        >
          Add Glasses!
        </Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 50, fontWeight: "500", fontSize: 15, textAlign: "center" }}>
        When you complete 6 single-player games(30 stars), you will earn this feature!:
      </Text>
      <TouchableOpacity
        style={{
          borderRadius: 8,
          padding: 10,
          elevation: 2,
          width: "75%",
          backgroundColor: colors.loginBanner,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: 20,
          alignSelf: "center",
        }}
        //  Disable when user hasn't completed 6 games
        //   onPress={() => navigation.navigate("Register")}
      >
        <MaterialCommunityIcons name="party-popper" size={35} color="#11ad71" />
        <Text
          style={{
            color: "#11ad71",
            fontWeight: "bold",
            fontSize: 18,
            marginRight: 35,
          }}
        >
          Add Party Hat!
        </Text>
      </TouchableOpacity>
      <View style={{ height: 210 }} />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  buttonGStyle: {
    marginTop: 20,
    width: 380,
    height: 50,
    alignSelf: "center",
    borderWidth: "2",
    borderRadius: 8,
  },
});
