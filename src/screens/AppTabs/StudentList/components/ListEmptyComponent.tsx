import React, { FC } from "react";

import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "styles/colors";
import fonts from "styles/fonts";

export const ListEmptyComponent: FC = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <MaterialIcons name="error-outline" size={50} color={colors.gray200} />
      <Text style={[styles.boldText, { color: colors.gray200, fontSize: 18 }]}>
        Sem Resultados
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boldText: {
    ...fonts.boldFont,
  },
});
