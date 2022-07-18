/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Feather } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import { ModuleScreen, NotFoundScreen, ProfileScreen, QuizScreen, TopicScreen } from "../screens";
import { RootStackParamList, RootTabParamList } from "../types/navigation";
import LinkingConfiguration from "./LinkingConfiguration";
import { useColor } from "../hooks";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Topic" component={TopicScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
    </Stack.Navigator>
  );
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator: React.FC = () => {
  const color = useColor();

  return (
    <BottomTab.Navigator initialRouteName="Module" screenOptions={{ tabBarActiveTintColor: color.tint }}>
      <BottomTab.Screen
        name="Module"
        component={ModuleScreen}
        options={{ title: "JS 101", tabBarIcon: ({ color }) => <Feather name="book" size={24} color={color} /> }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile", tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} /> }}
      />
    </BottomTab.Navigator>
  );
};

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
