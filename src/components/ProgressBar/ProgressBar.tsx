import { ColorPropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useColor } from "../../hooks";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const color = useColor();

  return (
    <View style={{ backgroundColor: color.white, height: 7 }}>
      <View
        style={{
          backgroundColor: color.primary,
          width: `${Math.max(5, progress * 100)}%`,
          height: "100%",
          borderTopEndRadius: 10,
          borderBottomEndRadius: 10,
        }}
      />
    </View>
  );
};

export default ProgressBar;
