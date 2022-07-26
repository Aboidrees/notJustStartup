import { View, Text, Image, StyleSheet, FlatList, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useApplyHeaderWorkaround, useColor } from "../../hooks";
import { CustomButton, ResourceListItem } from "../../components";
import topics from "../../../assets/data/topics";
import { RootStackScreenProps } from "../../types/navigation";
import Markdown from "react-native-markdown-display";
import TopicSection from "./TopicSection";

const TopicScreen: React.FC<RootStackScreenProps<"Topic">> = ({ route, navigation }) => {
  const color = useColor();

  const topicId = route?.params?.id;

  const topic = topics.find((topic) => topic.id === topicId);

  const onStartQuiz = () => navigation.navigate("Quiz", { id: "123" });
  useApplyHeaderWorkaround(navigation.setOptions);
  useEffect(() => {
    if (topic) navigation.setOptions({ title: topic?.title });
  }, [topic]);

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: color.white }]}>
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

      <CustomButton onPress={onStartQuiz} text="Start Quiz" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexGrow: 1,
  },
});

export default TopicScreen;
