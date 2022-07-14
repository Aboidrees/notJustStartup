import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Topic } from "../../types/modules";
import { useColor } from "../../hooks/useColors";
import Svg, { Circle } from "react-native-svg";
import CircularProgress from "../CircularProgress";

interface TopicNodeProps {
  topic: Topic;
  isDisabled?: boolean;
}

const TopicNode: React.FC<TopicNodeProps> = ({ topic, isDisabled = true }) => {
  const color = useColor();
  const { width } = useWindowDimensions();
  const itemWidth = width * 0.25;
  return (
    <View style={[styles.container, { width: itemWidth }]}>
      <View style={[styles.process, { width: itemWidth }]}>
        <CircularProgress
          size={itemWidth}
          strokeWidth={8}
          progressPercent={topic.progress * 100}
          bgColor={color.processBackground}
          progressColor={color.secondary}
          progressCompleteColor={color.primary}
        />
        <View
          style={[
            styles.circle,
            {
              width: itemWidth - 25,
              backgroundColor: isDisabled ? color.processBackground : color.primary,
            },
          ]}
        >
          <Image source={{ uri: topic.icon }} style={styles.image} />
        </View>
      </View>
      <Text style={[styles.title, { color: color.text }]}>{topic.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
    maxWidth: 150,
  },

  process: {
    aspectRatio: 1,
    justifyContent: "center",
  },

  circle: {
    alignItems: "center",
    alignSelf: "center",
    aspectRatio: 1,
    borderRadius: 999,
    justifyContent: "center",
  },

  image: {
    width: "50%",
    aspectRatio: 1,
  },

  title: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "500",
  },
});

export default TopicNode;
