import React, { FC } from "react";
import { Image, StyleSheet } from "react-native";

export const Loading: FC = () => {
  return (
    <Image
      style={styles.imageStyles}
      source={require("@assets/InnovateTechLogo.jpeg")}
    />
  );
};

const styles = StyleSheet.create({
  imageStyles: {
    alignSelf: "center",
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginTop: "50%",
  },
});
