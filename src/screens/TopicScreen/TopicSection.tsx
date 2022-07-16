import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface TopicNodeProps {
  title: string;
  display?: boolean;
}

const TopicSection: React.FC<TopicNodeProps> = ({ title, display = true, children }) => {
  if (!display) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <>{children}</>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    fontWeight: "500",
    letterSpacing: 1.1,
    marginTop: 25,
    marginBottom: 10,
  },
});

export default TopicSection;
