import { Text, Pressable, PressableProps, StyleSheet } from "react-native";
import React from "react";
import { useColor } from "../../hooks";
import Colors from "../../constants/Colors";

interface CustomButtonProps extends PressableProps {
  text: string;
  type?: "PRIMARY" | "SECONDARY" | "TERTIARY";
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, style, disabled, type = "PRIMARY", ...otherProps }) => {
  const color = useColor();
  const buttonStyle = styles[`container_${type}`];
  const textStyle = styles[`text_${type}`];

  return (
    <Pressable
      disabled={disabled}
      style={[styles.container, buttonStyle, style as any, disabled && { backgroundColor: color.tabIconDefault }]}
      {...otherProps}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
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
  container_PRIMARY: {
    backgroundColor: Colors.light.primary,
  },
  container_SECONDARY: {
    borderWidth: 2,
    backgroundColor: Colors.light.white,
    borderColor: Colors.light.primary,
  },
  container_TERTIARY: { backgroundColor: Colors.light.white },
  text: { fontSize: 16, fontWeight: "500" },

  //
  text_PRIMARY: { color: Colors.light.white },
  //
  text_SECONDARY: { color: Colors.light.primary },
  //
  text_TERTIARY: { color: Colors.light.primary },
});

export default CustomButton;
