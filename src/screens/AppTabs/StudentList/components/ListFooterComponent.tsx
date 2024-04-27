import React, { FC } from "react";

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import colors from "styles/colors";
import fonts from "styles/fonts";

export const ListFooterComponent: FC = () => {
  return (
    <View style={styles.containerLoading}>
      <ActivityIndicator size={25} color={colors.gray400} />
      <Text style={[styles.boldText, { color: colors.gray400, marginTop: 5 }]}>
        CARREGANDO MAIS
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStudentListStyles: {
    paddingBottom: 100,
    width: "100%",
    marginTop: 25,
  },
  containerLoading: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  boldText: {
    ...fonts.boldFont,
  },
});
