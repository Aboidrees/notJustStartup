import { View, Text, StyleSheet, Image, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Markdown from "react-native-markdown-display";

import { CustomButton, MultipleChoiceAnswers, ProgressBar } from "../../components";
import { QuizType } from "../../types/modules";
import { useApplyHeaderWorkaround, useColor } from "../../hooks";
import Animated, { SlideInDown, SlideInUp, SlideOutDown } from "react-native-reanimated";

import quiz from "../../../assets/data/quiz";
import { RootStackScreenProps } from "../../types/navigation";

const QuizScreen: React.FC<RootStackScreenProps<"Quiz">> = ({ navigation }) => {
  const color = useColor();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(quiz[questionIndex]);

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | undefined>(undefined);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

  useApplyHeaderWorkaround(navigation.setOptions);

  useEffect(() => {
    if (questionIndex === quiz.length) {
      navigation.navigate("QuizEnd", { nofQuestions: quiz.length, nofCorrectAnswers: numberOfCorrectAnswers });
      return;
    }
    setQuestion(quiz[questionIndex]);
    setAnsweredCorrectly(undefined);
    setSelectedAnswers([]);
  }, [questionIndex]);

  const onChoicePress = (choiceID: number) => {
    setSelectedAnswers((currentSelected) => {
      if (currentSelected.includes(choiceID)) {
        return currentSelected.filter((answer) => answer !== choiceID);
      } else {
        return question.type === QuizType.MULTIPLE_ANSWERS ? [...currentSelected, choiceID] : [choiceID];
      }
    });
  };

  const onSubmit = () => {
    const correctAnswers = question.choices.map((choice) => choice.correct && choice.id).filter((answer) => answer);
    if (selectedAnswers.length !== correctAnswers.length) {
      setAnsweredCorrectly(false);
      return;
    }
    const isCorrect = selectedAnswers.every((answer) => correctAnswers.includes(answer));
    setAnsweredCorrectly(isCorrect);
    if (isCorrect) setNumberOfCorrectAnswers((n) => n + 1);
  };

  const onContinue = () => setQuestionIndex((currentIndex) => currentIndex + 1);

  const isButtonDisabled = selectedAnswers.length === 0;

  return (
    <>
      <ProgressBar progress={questionIndex / quiz.length} />
      <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: color.white }}>
        <Text style={styles.question}>{question.question}</Text>
        {!!question.image && (
          <Image source={{ uri: question.image }} style={styles.questionImage} resizeMode="contain" />
        )}
        {!!question.content && <Markdown>{question.content}</Markdown>}

        {/* Choices */}
        <View style={styles.choicesContainer}>
          {question?.choices?.map((choice) => (
            <MultipleChoiceAnswers
              key={choice.id}
              choice={choice}
              onPress={onChoicePress}
              isSelected={selectedAnswers.includes(choice.id)}
              disabled={answeredCorrectly !== undefined}
            />
          ))}
          {/* Button */}
        </View>
        <CustomButton text="Submit" onPress={onSubmit} disabled={isButtonDisabled} />
      </ScrollView>

      {answeredCorrectly === true && (
        <Animated.View
          entering={SlideInDown.duration(500)}
          exiting={SlideOutDown.duration(500)}
          style={[styles.answerBox, { backgroundColor: color.background, borderColor: color.primary }]}
        >
          <Text style={[styles.answerTitle, { color: color.primary }]}>Correct</Text>
          <CustomButton text="Continue" onPress={onContinue} />
        </Animated.View>
      )}

      {answeredCorrectly === false && (
        <Animated.View
          entering={SlideInDown.duration(500)}
          exiting={SlideOutDown.duration(500)}
          style={[styles.answerBox, { backgroundColor: color.backgroundError, borderColor: color.secondary }]}
        >
          <Text style={[styles.answerTitle, { color: color.secondary }]}>Wrong!</Text>
          <CustomButton text="Continue" onPress={onContinue} />
        </Animated.View>
      )}
    </>
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
  choicesContainer: {
    marginTop: "auto",
  },
  answerBox: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 10,
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    //
    shadowColor: "black",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  answerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
export default QuizScreen;
