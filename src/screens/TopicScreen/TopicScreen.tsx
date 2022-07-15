import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useColor } from "../../hooks";
import { ResourceListItem } from "../../components";
import topics from "../../../assets/data/topics";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackScreenProps } from "../../types/navigation";

const TopicScreen: React.FC<RootStackScreenProps<"Topic">> = ({ route, navigation }) => {
  const color = useColor();

  const topicId = route?.params?.id;

  const topic = topics.find((topic) => topic.id === topicId);

  if (topic) navigation.setOptions({ title: topic?.title });

  return (
    <View style={[styles.container, { backgroundColor: color.background }]}>
      {/* <Image source={{ uri: "https://picsum.photos/300/300" }} style={styles.image} /> */}
      <Text style={styles.title}>Resources</Text>
      {topic?.resources?.map((resource, index) => (
        <ResourceListItem
          resource={resource}
          key={resource.id}
          index={index}
          isLast={index + 1 === topic.resources.length}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 1.1,
  },
});

export default TopicScreen;
