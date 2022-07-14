import { View } from "react-native";
import React from "react";

const TopicNodesRow: React.FC<any> = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around", // center || space-around
      }}
    >
      {children}
    </View>
  );
};

export default TopicNodesRow;
