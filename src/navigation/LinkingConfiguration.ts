/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types/navigation";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Module: {
            screens: {
              ModuleScreen: "JS 101",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "Profile",
            },
          },
        },
      },
      Topic: "topic",
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
