import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { Text, ButtonGroup } from "@rneui/base";
import { useTheme } from "../DarkTheme/ThemeProvider.js";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message";

const Profile = () => {
  const { colors } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [glasses, setGlasses] = useState(false);
  const [partyHat, setPartyHat] = useState(false);
  const [saved, isSaved] = useState(false);

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
      {glasses ? (
        <Image
          source={
            selectedIndex == 0
              ? require("/Users/sathvikm/Documents/DyscalculiaProject/Images/maleGlassesProfilePic.png")
              : require("/Users/sathvikm/Documents/DyscalculiaProject/Images/femaleGlassesProfilePic.png")
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
        Current number of stars earned:
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
              color: "#11ad71",
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
            color="#11ad71"
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
              color: "#11ad71",
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
            color="#11ad71"
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
          backgroundColor: "#e1eafc",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
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
                titleStyle: { fontSize: 19, marginTop: 20, fontWeight: "bold", color: "#11ad71" },
                backgroundColor: colors.loginBanner,
                style: { alignItems: "center", alignSelf: "center", width: 450, borderTopStartRadius: 8, borderTopEndRadius: 8, overflow: "scroll" },
                position: "bottom"
            });
        }}
      >
        <Text
          style={{
            color: "#4f8aff",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
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
