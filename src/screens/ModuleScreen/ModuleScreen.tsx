import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import TopicNode from "../../components/TopicNode";
import TopicNodesRow from "../../components/TopicNodesRow/TopicNodesRow";
import topics from "../../../assets/data/topics";
import { getCurrentActiveLevel, groupByLevel } from "../../utils/topics";

const levels = groupByLevel(topics);
const currentLevel = getCurrentActiveLevel(levels);

const ModuleScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={levels}
        renderItem={({ item }) => (
          <TopicNodesRow>
            {item.map((topic) => (
              <TopicNode topic={topic} key={topic.id} isDisabled={currentLevel < topic.level} />
            ))}
          </TopicNodesRow>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default ModuleScreen;
