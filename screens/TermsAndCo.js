import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "../DarkTheme/ThemeProvider.js";

const TermsAndCo = () => {
  const { colors } = useTheme();

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
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
        }}
      >
        Terms & Conditions
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 50,
          color: colors.text,
          textAlign: "center"
        }}
      >
        Welcome to LearnCulia!
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 50,
          color: colors.text,
          textAlign: "center"
        }}
      >
        These terms and conditions outline the rules and regulations for the use
        of LearnCulia.
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 50,
          color: colors.text,
          textAlign: "center"
        }}
      >
        By using this app we assume you accept these terms and conditions. Do
        not continue to use LearnCulia if you do not agree to take all of the
        terms and conditions stated on this page.
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 50,
          color: colors.text,
          textAlign: "center"
        }}
      >
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: "Client", "You" and
        "Your" refers to you, the person log on this website and compliant to
        the Company’s terms and conditions. "The Company", "Ourselves", "We",
        "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client’s needs in respect of
        provision of the Company’s stated services, in accordance with and
        subject to, prevailing law of Netherlands. Any use of the above
        terminology or other words in the singular, plural, capitalization
        and/or he/she or they, are taken as interchangeable and therefore as
        referring to the same.
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 50,
          color: colors.text,
        }}
      >
        License
      </Text>
      <View style={{ height: 70 }} />
    </ScrollView>
  );
};

export default TermsAndCo;

const styles = StyleSheet.create({});
