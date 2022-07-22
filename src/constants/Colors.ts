const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

const commonColors = {
  primary: "#40F99B",
  secondary: "#E85D75",
  tertiary: "#9D69A3",
  darkL: "#61707D",
  white: "#fff",
  black: "#000",
  tabIconDefault: "#ccc",

  backgroundError: "#fbefef",
};

export default {
  light: {
    ...commonColors,
    processBackground: "#ddd",
    text: "#000",
    textReverse: "#F5FBEF",
    background: "#F5FBEF",
    tint: tintColorLight,
    tabIconSelected: tintColorLight,
  },
  dark: {
    ...commonColors,
    processBackground: "#555",

    text: "#F5FBEF",
    textReverse: "#000",
    background: "#000",
    tint: tintColorDark,
    tabIconSelected: tintColorDark,
  },
};
