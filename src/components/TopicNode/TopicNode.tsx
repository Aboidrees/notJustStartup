import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Topic } from "../../types/modules";
import { useColor } from "../../hooks/useColors";

interface TopicNodeProps {
  topic: Topic;
  isDisabled?: boolean;
}

const TopicNode: React.FC<TopicNodeProps> = ({ topic, isDisabled = true }) => {
  const color = useColor();

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { backgroundColor: color.darkL }]}>
        <View
          style={[
            styles.circle,
            {
              borderColor: color.background,
              backgroundColor: isDisabled ? color.darkL : color.primary,
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
    width: "30%",
    maxWidth: 150,
  },
  progress: {
    width: "100%",
    padding: 10,
    borderRadius: 999,
  },
  circle: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
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
