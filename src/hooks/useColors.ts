import Colors from "../constants/Colors";
import useColorScheme from "./useColorScheme";

export const useColor = () => {
  const colorScheme = useColorScheme();

  return Colors[colorScheme];
};
