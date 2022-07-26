import { Image, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { RootStackScreenProps } from "../../types/navigation";
import sadDuck from "../../../assets/images/sad.png";
import happyDuck from "../../../assets/images/happy.png";
import { useColor } from "../../hooks";
import { CustomButton } from "../../components";

const happyText = "Yay! you are a great learner!";
const sadText = "You need to practice more!";

const QuizEndScreen: React.FC<RootStackScreenProps<"QuizEnd">> = ({ route, navigation }) => {
  const color = useColor();
  const { nofQuestions, nofCorrectAnswers } = route.params;

  const percentage = (nofCorrectAnswers / nofQuestions) * 100;
  const isHappy = percentage >= 70;

  const text = isHappy ? happyText : sadText;

  const onPress = () => {
    navigation.navigate("Root");
  };

  return (
    <View style={[styles.container, { backgroundColor: color.white }]}>
      <Image source={isHappy ? happyDuck : sadDuck} style={styles.image} resizeMode={"contain"} />
      <Text style={styles.text}>{text}</Text>
      <Text style={[styles.title, { color: isHappy ? color.primary : color.secondary }]}>{percentage}% </Text>
      <Text style={styles.subTitle}>
        {nofCorrectAnswers} / {nofQuestions}
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton text="Finish" onPress={onPress} />
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
  image: {
    width: "25%",
    aspectRatio: 2 / 3,
    marginBottom: 10,
  },
  title: {
    fontSize: 80,
    color: "#333336",
    fontWeight: "bold",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: "auto",
    color: "#666",
  },
  text: {
    fontSize: 20,
    color: "#666",
  },
  buttonContainer: {
    alignSelf: "stretch",
  },
});

export default QuizEndScreen;
