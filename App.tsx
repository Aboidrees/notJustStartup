import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
import Colors from "./src/constants/Colors";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Full name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string",
      placeholder: "Enter your full name",
    },
    {
      label: "Email",
      key: "username", // this is the name of the field in the database
      required: true,
      displayOrder: 2,
      type: "string",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 4,
      type: "password",
      placeholder: "Enter your password",
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: Colors.light.primary,
    borderRadius: 5,
    paddingVertical: 15,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: Colors.light.tabIconDefault,
    borderRadius: 5,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooter,
    color: Colors.light.primary,
  },
};

export default withAuthenticator(App, { signUpConfig, theme: customTheme });
