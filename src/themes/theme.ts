export const colors = {
  black: "#000000",
  white: "#FFFFFF",
  lightGrey: "#DCDCDC",
  darkGrey: "#999999",
  blue: "#5DADE2",
  lightGrayishOrange: "#F3F2F1",
  radicalRed: "#FE4066",
};

export const theme = {
  ...colors,
};

export const lightTheme = {
  backgroundColor: colors.white,
  textColor: colors.black,
  borderColor: colors.lightGrey,
  darkBorderColor: colors.darkGrey,
  linkColor: colors.blue,
  primaryColor: colors.radicalRed,
};

export type MyTheme = typeof lightTheme;
