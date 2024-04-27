import React, { FC } from "react";

import { formatDate } from "@utils/formatDate";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Student } from "types";
import { translateGender } from "@utils/translateGender";

import colors from "styles/colors";
import fonts from "styles/fonts";

interface StudentCardProps {
  student: Student;
  onPress: () => void;
}

export const StudentCard: FC<StudentCardProps> = ({ student, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.avatarImageStyles}
        source={{ uri: student.picture.large }}
      />

      <View style={{ gap: 5 }}>
        <Text style={styles.fontBold}>
          {student.name.title} {student.name.first} {student.name.last}
        </Text>

        <View style={{ gap: 5 }}>
          <Text style={styles.regularText}>{translateGender(student.gender)}</Text>
          <Text style={styles.regularText}>
            {formatDate(new Date(student.dob.date))}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 115,
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 25,
  },
  avatarImageStyles: {
    width: 85,
    height: 85,
    resizeMode: "contain",
    borderRadius: 10000,
    marginRight: 15,
  },
  fontBold: {
    ...fonts.boldFont,
    color: colors.gray400,
    fontSize: 16,
  },
  regularText: {
    ...fonts.regularFont,
    color: colors.gray400,
    fontSize: 16,
  },
});
