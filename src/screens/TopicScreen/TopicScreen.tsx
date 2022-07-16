import { View, Text, Image, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import { useColor } from "../../hooks";
import { ResourceListItem } from "../../components";
import topics from "../../../assets/data/topics";
import { RootStackScreenProps } from "../../types/navigation";
import Markdown from "react-native-markdown-display";
import TopicSection from "./TopicSection";

const TopicScreen: React.FC<RootStackScreenProps<"Topic">> = ({ route, navigation }) => {
  const color = useColor();

  const topicId = route?.params?.id;

  const topic = topics.find((topic) => topic.id === topicId);

  if (topic) navigation.setOptions({ title: topic?.title });

  return (
    <ScrollView style={[styles.container, { backgroundColor: color.background }]}>
      {/* <Image source={{ uri: "https://picsum.photos/300/300" }} style={styles.image} /> */}
      <TopicSection title="Introduction" display={!!topic?.description}>
        <Markdown>{topic?.description}</Markdown>
      </TopicSection>

      <TopicSection title="Resources" display={!!topic?.resources}>
        {topic?.resources?.map((resource, index) => (
          <ResourceListItem
            resource={resource}
            key={resource.id}
            index={index}
            isLast={index + 1 === topic.resources.length}
          />
        ))}
      </TopicSection>

      <TopicSection title="Context" display={!!topic?.context}>
        <Markdown>{topic?.context}</Markdown>
      </TopicSection>

      <TopicSection title="Exercises" display={!!topic?.exercises}>
        {topic?.exercises?.map((resource, index) => (
          <ResourceListItem
            resource={resource}
            key={resource.id}
            index={index}
            isLast={index + 1 === topic.exercises.length}
          />
        ))}
      </TopicSection>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  image: {
    width: "100%",
    height: 200,
  },
});

export default TopicScreen;
