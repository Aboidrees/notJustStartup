import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { ResourceItem } from "../../types/modules";
import { useColor } from "../../hooks";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

interface ResourceListItemProps {
  resource: ResourceItem;
  index: number;
  isLast?: boolean;
}

const ResourceListItem: React.FC<ResourceListItemProps> = ({ resource, index, isLast = false }) => {
  const color = useColor();

  const onPress = () => WebBrowser.openBrowserAsync(resource.url);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      {!isLast && (
        <View
          style={[
            styles.lineIndicator,
            resource.completed ? { backgroundColor: color.primary } : { backgroundColor: color.darkL },
          ]}
        />
      )}
      <View
        style={[
          styles.indexContainer,
          resource.completed && { backgroundColor: color.primary, borderColor: color.primary },
          !resource.completed && { borderColor: color.darkL },
        ]}
      >
        {resource.completed && <Ionicons name="ios-checkmark-sharp" size={20} color={color.textReverse} />}
        {!resource.completed && <Text>{index + 1}</Text>}
      </View>
      <Text>{resource.title}</Text>
      <Ionicons name="open-outline" size={24} color="black" style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 30,
    alignItems: "center",
  },
  indexContainer: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 15,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  icon: {
    marginLeft: "auto",
  },
  lineIndicator: {
    position: "absolute",
    height: "100%",
    width: 2,
    left: 15,
    top: 30,
  },
});

export default ResourceListItem;
