import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useColor } from "../../hooks";
import { ChoiceItem } from "../../types/modules";

interface MultipleChoiceAnswersProps extends PressableProps {
  choice: ChoiceItem;
  isSelected?: boolean;
  onPress?: (arg0: number) => void;
}

const MultipleChoiceAnswers: React.FC<MultipleChoiceAnswersProps> = ({
  choice,
  onPress = (arg0: number) => {},
  isSelected = false,
  ...otherProps
}) => {
  const color = useColor();

  return (
    <Pressable
      onPress={() => onPress(choice.id)}
      style={[styles.container, { borderColor: color.tabIconDefault }, isSelected && { borderColor: color.primary }]}
      {...otherProps}
    >
      <Text style={[styles.text, isSelected && { color: color.primary }]}>{choice.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default MultipleChoiceAnswers;
