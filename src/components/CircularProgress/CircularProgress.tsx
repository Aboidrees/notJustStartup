import React from "react";
import { View } from "react-native";
import { Svg, Circle, Text as SVGText } from "react-native-svg";

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  progressPercent: number;
  bgColor?: string;
  progressColor?: string;
  text?: string;
  textSize?: number;
  textColor?: string;
}

const CircularProgress = (props: CircularProgressProps) => {
  const { size, strokeWidth, text } = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - props.progressPercent;

  return (
    <View style={{ position: "absolute" }}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={props.bgColor ? props.bgColor : "#f2f2f2"}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />

        {/* Progress Circle */}
        <Circle
          stroke={props.progressColor ? props.progressColor : "#3b5998"}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{ strokeWidth }}
        />
        {/* Text */}
        {text && (
          <SVGText
            fontSize={props.textSize ? props.textSize : "10"}
            x={size / 2}
            y={size / 2 + (props.textSize ? props.textSize / 2 - 1 : 5)}
            textAnchor="middle"
            fill={props.textColor ? props.textColor : "#333333"}
          >
            {text}
          </SVGText>
        )}
      </Svg>
    </View>
  );
};

export default CircularProgress;
