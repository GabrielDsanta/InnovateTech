import React, { FC } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import colors from "styles/colors";

interface SearchBarProps {
  filterTextValue: string;
  setFilterTextValue: (textValue: string) => void;
  onPressFilterButton?: () => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  onPressFilterButton,
  filterTextValue,
  setFilterTextValue,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.gray200}
          placeholder="Pesquise pelo nome"
          value={filterTextValue}
          onChangeText={setFilterTextValue}
        />
        <Entypo name="magnifying-glass" size={24} color={colors.gray200} />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPressFilterButton}
        style={styles.actionButton}
      >
        <AntDesign name="filter" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  containerInput: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 10000,
    paddingHorizontal: 20,
    width: 300,
    height: 40,
    alignItems: "center",
  },
  input: {
    width: "94%",
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 10000,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7,
  },
});
