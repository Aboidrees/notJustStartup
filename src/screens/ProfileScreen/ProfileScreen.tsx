import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useColor } from "../../hooks";
import { CustomButton } from "../../components";
import happyDuck from "../../../assets/images/happy.png";
import { Auth } from "aws-amplify";

const ProfileScreen: React.FC = () => {
  const color = useColor();

  return (
    <View style={[styles.container, { backgroundColor: color.white }]}>
      <View style={[styles.avatar, { backgroundColor: color.background }]}>
        <Image source={happyDuck} resizeMode={"contain"} style={styles.image} />
      </View>
      <Text style={styles.name}>Muhammad Yousif</Text>

      <View style={styles.buttonContainer}>
        <CustomButton text="Sing out" onPress={() => Auth.signOut()} type={"TERTIARY"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
    padding: 10,
    margin: 10,
  },
  image: {
    width: "100%",
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  buttonContainer: {
    marginTop: "auto",
    alignSelf: "stretch",
  },
});

export default ProfileScreen;
