import React, { FC, useEffect, useState } from "react";

import {
  Keyboard,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppTabsRoutesNavigationRoutesProps } from "screens/AppTabs";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

type IconName = "package" | "truck" | "calendar";
type RouteNames = "Home";

const isAndroid = Platform.OS === "android";

export const BottomTab: FC<BottomTabBarProps> = ({ state }) => {
  const navigation = useNavigation<AppTabsRoutesNavigationRoutesProps>();

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const color = state.index === index ? colors.primary : colors.gray300;
        return (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => navigation.navigate(route.name as RouteNames)}
          >
            <Feather
              name={["package", "truck", "calendar"][index] as IconName}
              size={32}
              color={color}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    height: "9%",
    backgroundColor: colors.gray100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    paddingHorizontal: 40,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,

    position: "absolute",
    zIndex: 1,
    bottom: -1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: isAndroid ? 1 : 0.4,
    shadowRadius: 5,

    elevation: 10,
  },
  label: {
    backgroundColor: colors.primary,
    width: 22,
    height: 22,
    borderRadius: 10000,
    position: "absolute",
    right: -13,
    top: -10,
    alignItems: "center",
    justifyContent: "center",
  },
  labelText: {
    ...fonts.boldFont,
    color: "white",
  },
});
