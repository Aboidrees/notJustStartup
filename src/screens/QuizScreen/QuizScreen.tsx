import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import Markdown from "react-native-markdown-display";

import { CustomButton, MultipleChoiceAnswers } from "../../components";
import { QuizType } from "../../types/modules";
import { useColor } from "../../hooks";

import quiz from "../../../assets/data/quiz";

const question = quiz[0];

const QuizScreen: React.FC = () => {
  const color = useColor();

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const onChoicePress = (choiceID: number) => {
    setSelectedAnswers((currentSelected) => {
      if (currentSelected.includes(choiceID)) {
        return currentSelected.filter((answer) => answer !== choiceID);
      } else {
        if (question.type === QuizType.MULTIPLE_ANSWERS) {
          return [...currentSelected, choiceID];
        } else {
          return [choiceID];
        }
      }
    });
  };

  const onSubmit = () => {
    console.warn("Submit");
  };

  const isButtonDisabled = selectedAnswers.length === 0;

  return (
    <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: color.white }}>
      <Text style={styles.question}>{question.question}</Text>
      {!!question.image && <Image source={{ uri: question.image }} style={styles.questionImage} resizeMode="contain" />}
      {!!question.content && <Markdown>{question.content}</Markdown>}

      {/* Choices */}
      {question?.choices?.map((choice) => (
        <MultipleChoiceAnswers
          key={choice.id}
          choice={choice}
          onPress={onChoicePress}
          isSelected={selectedAnswers.includes(choice.id)}
        />
      ))}
      {/* Button */}
      <View style={styles.button}>
        <CustomButton text="Submit" onPress={onSubmit} disabled={isButtonDisabled} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  question: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 10,
  },
  questionImage: {
    width: "100%",
    aspectRatio: 6 / 4,
  },
  button: {
    marginTop: "auto",
  },
});
export default QuizScreen;
