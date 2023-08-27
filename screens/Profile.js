import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Text, ButtonGroup } from "@rneui/base";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useGlobalState } from "/Users/sathvikm/Documents/DyscalculiaProject/screens/RewardSystem.js";
import { auth, db } from "../firebase.js";

const Profile = () => {
  const { colors, dark, setScheme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [glasses, updateGlasses] = useState(false);
  const [partyHat, setPartyHat] = useState(false);
  const [saved, isSaved] = useState(false);
  const [starCount, setStarCount] = useGlobalState("starCount");

  const loadUserData = () => {
    let breakPoint = false;
    db.collection("userdata")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (breakPoint) {
            console.log("User: " + auth.currentUser.uid);
            return;
          }
          if (doc.data().id == auth.currentUser.uid) {
            setSelectedIndex(0);
            updateGlasses(doc.data().glasses);
            setPartyHat(doc.data().partyHat);
            setStarCount(doc.data().stars);
            console.log("Document data: " + JSON.stringify(doc.data().stars));
            console.log("Glasses from doc data: " + doc.data().glasses);
            console.log("Glasses: " + glasses);
            console.log("Party hat: " + partyHat);
            breakPoint = true;
            return;
          }
          //    setGlasses(JSON.stringify(doc.data().glasses))
         // console.log("Doc user id: " + doc.data().id);
        });
      });
  };

  useEffect(() => {
    loadUserData();
    console.log("Glasses in useEffect: " + glasses);
  }, [glasses]);

  const toggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

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
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          marginTop: 15,
          color: colors.text,
        }}
      >
        Make your desired changes, and hit save below!
      </Text>
      {glasses && partyHat ? (
        <Image
          source={
            selectedIndex == 0
              ? require("/Users/sathvikm/Documents/DyscalculiaProject/Images/maleGPHProfilePic.png")
              : require("/Users/sathvikm/Documents/DyscalculiaProject/Images/femaleGPHProfilePic.png")
          }
          style={{ width: 400, height: 400 }}
        />
      ) : glasses ? (
        <Image
          source={
            selectedIndex == 0
              ? require("/Users/sathvikm/Documents/DyscalculiaProject/Images/maleGlassesProfilePic.png")
              : require("/Users/sathvikm/Documents/DyscalculiaProject/Images/femaleGlassesProfilePic.png")
          }
          style={{ width: 400, height: 400 }}
        />
      ) : partyHat ? (
        <Image
          source={
            selectedIndex == 0
              ? require("/Users/sathvikm/Documents/DyscalculiaProject/Images/malePHProfilePic.png")
              : require("/Users/sathvikm/Documents/DyscalculiaProject/Images/femalePHProfilePic.png")
          }
          style={{ width: 400, height: 400 }}
        />
      ) : (
        <Image
          source={
            selectedIndex == 0
              ? require("/Users/sathvikm/Documents/DyscalculiaProject/Images/maleProfilePic.png")
              : require("/Users/sathvikm/Documents/DyscalculiaProject/Images/femaleProfilePic.png")
          }
          style={{ width: 400, height: 400 }}
        />
      )}
      {dark ? (
        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 40,
            color: colors.text,
          }}
        >
          Light Mode:
        </Text>
      ) : (
        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 40,
            color: colors.text,
          }}
        >
          Dark Mode:
        </Text>
      )}
      <TouchableOpacity
        onPress={toggleTheme}
        style={{
          marginTop: 15,
          marginBottom: 70,
          width: "95%",
          height: "3.5%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          borderWidth: 2,
          padding: 5,
          paddingHorizontal: 6,
          backgroundColor: dark ? "#2E293A" : "white",
          borderColor: dark ? "white" : "black",
        }}
      >
        {dark ? (
          <Entypo name="light-up" size={25} color={"white"} />
        ) : (
          <Ionicons name="moon" size={25} color={"black"} />
        )}
      </TouchableOpacity>
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
          marginTop: 30,
          fontSize: 20,
          textAlign: "center",
          color: colors.text,
        }}
      >
        Current number of stars earned: {starCount}
      </Text>
      <Text
        style={{
          marginTop: 50,
          fontWeight: "500",
          fontSize: 20,
          textAlign: "center",
          color: colors.text,
        }}
      >
        When you complete 3 single-player games(15 stars), you will earn this
        feature!:
      </Text>
      {glasses ? (
        <TouchableOpacity
          disabled={starCount < 15}
          style={{
            borderRadius: 8,
            padding: 10,
            elevation: 2,
            width: "40%",
            backgroundColor: colors.loginBanner,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            alignSelf: "center",
          }}
          //  Disable when user hasn't completed 3 games
          onPress={() => setGlasses(!glasses)}
        >
          <Text
            style={{
              color: colors.bannerText,
              fontWeight: "bold",
              fontSize: 18,
              marginLeft: 30,
            }}
          >
            Added!
          </Text>
          <Feather
            name="check"
            size={24}
            color={colors.bannerText}
            style={{ marginLeft: 20, marginRight: 20 }}
          />
        </TouchableOpacity>
      ) : (
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
          onPress={() => setGlasses(!glasses)}
        >
          <Ionicons name="glasses" size={35} color={colors.bannerText} />
          <Text
            style={{
              color: colors.bannerText,
              fontWeight: "bold",
              fontSize: 18,
              marginRight: 35,
            }}
          >
            Add Glasses!
          </Text>
        </TouchableOpacity>
      )}
      {glasses ? (
        <Text
          style={{
            color: colors.redComp,
            fontSize: 15,
            marginTop: 10,
          }}
        >
          Tap to remove glasses
        </Text>
      ) : (
        <Text> </Text>
      )}
      <Text
        style={{
          marginTop: 50,
          fontWeight: "500",
          fontSize: 20,
          textAlign: "center",
          color: colors.text,
        }}
      >
        When you complete 6 single-player games(30 stars), you will earn this
        feature!:
      </Text>
      {partyHat ? (
        <TouchableOpacity
          style={{
            borderRadius: 8,
            padding: 10,
            elevation: 2,
            width: "40%",
            backgroundColor: colors.loginBanner,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            alignSelf: "center",
          }}
          //  Disable when user hasn't completed 3 games
          onPress={() => setPartyHat(!partyHat)}
        >
          <Text
            style={{
              color: colors.bannerText,
              fontWeight: "bold",
              fontSize: 18,
              marginLeft: 30,
            }}
          >
            Added!
          </Text>
          <Feather
            name="check"
            size={24}
            color={colors.bannerText}
            style={{ marginLeft: 20, marginRight: 20 }}
          />
        </TouchableOpacity>
      ) : (
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
          onPress={() => setPartyHat(!partyHat)}
        >
          <MaterialCommunityIcons
            name="party-popper"
            size={35}
            color={colors.bannerText}
          />
          <Text
            style={{
              color: colors.bannerText,
              fontWeight: "bold",
              fontSize: 18,
              marginRight: 35,
            }}
          >
            Add Party Hat!
          </Text>
        </TouchableOpacity>
      )}
      {partyHat ? (
        <Text
          style={{
            color: colors.redComp,
            fontSize: 15,
            marginTop: 10,
          }}
        >
          Tap to remove party hat
        </Text>
      ) : (
        <Text> </Text>
      )}
      <TouchableOpacity
        style={{
          backgroundColor: colors.saveButtonBG,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          marginBottom: 50,
          width: "55%",
          borderRadius: 8,
          padding: 10,
          elevation: 2,
        }}
        //  Save changes, GLOBALLY!!!, put this in a const function later
        onPress={() => {
          showMessage({
            message: "Saved!",
            type: "success",
            titleStyle: {
              fontSize: 19,
              marginTop: 20,
              fontWeight: "bold",
              color: colors.bannerText,
            },
            backgroundColor: colors.savedBG,
            style: {
              alignItems: "center",
              alignSelf: "center",
              width: 450,
              borderTopStartRadius: 8,
              borderTopEndRadius: 8,
              overflow: "scroll",
            },
            position: "bottom",
          });
        }}
      >
        <Text
          style={{
            color: colors.saveButtonText,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
      <Button 
        title="Logout"
        color={colors.redComp}
      />
      <FlashMessage />
      <View style={{ height: 50 }} />
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
