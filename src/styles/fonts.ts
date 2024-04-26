import { StyleSheet } from "react-native";

const fonts = StyleSheet.create({
  blackFont: {
    fontFamily: "Montserrat_900Black",
    color: "#FFF",
  },
  boldFont: {
    fontFamily: "Montserrat_700Bold",
    color: "#FFF",
  },
  MediumFont: {
    fontFamily: "Montserrat_500Medium",
    color: "#FFF",
  },
  regularFont: {
    fontFamily: "Montserrat_400Regular",
    color: "#FFF",
  },
  semiBoldFont: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#FFF",
  },
  extraBoldFont: {
    fontFamily: "Montserrat_800ExtraBold",
    color: "#FFF",
  },
  lightFont: {
    fontFamily: "Montserrat_300Light",
    color: "#FFF",
  },
  lightItalicFont: {
    fontFamily: "Montserrat_300Light_Italic",
    color: "#FFF",
  },
  square: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default fonts;
