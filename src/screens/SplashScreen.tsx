import React, { FC } from "react";

import { wait } from "@utils/time";
import { Image, StyleSheet, View } from "react-native";
import { useQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "Routes";

export const SplashScreen: FC = () => {
  const navigation = useNavigation<AppNavigationRoutesProps>()

  const { data } = useQuery("checkUser", async () => {
    await wait(1);
    navigation.navigate("AppTabs");
  });
  

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyles}
        source={require("@assets/InnovateTechLogo.jpeg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyles: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
