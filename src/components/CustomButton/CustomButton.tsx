import { Text, Pressable, PressableProps, StyleSheet } from "react-native";
import React from "react";
import { useColor } from "../../hooks";
import { Shadow } from "react-native-shadow-2";

interface CustomButtonProps extends PressableProps {
  text: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, disabled = false, text, ...otherProps }) => {
  const color = useColor();

  return (
    <Shadow
      containerViewStyle={[{ marginVertical: 10 }]}
      viewStyle={[{ width: "100%" }]}
      distance={2}
      offset={[2, 7]}
      startColor={"#00000040"}
      getChildRadius
    >
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[styles.container, { backgroundColor: disabled ? color.processBackground : color.primary }]}
        {...otherProps}
      >
        <Text style={[styles.text, { color: color.white }]}>{text}</Text>
      </Pressable>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  container: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CustomButton;
