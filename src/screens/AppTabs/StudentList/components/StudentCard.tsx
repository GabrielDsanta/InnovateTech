import React, { FC } from "react";

import { formatDate } from "@utils/formatDate";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Student } from "types";

interface StudentCardProps {
  student: Student;
}

export const StudentCard: FC<StudentCardProps> = ({ student }) => {
  return (
    <TouchableOpacity>
      <Image
        style={{
          width: 75,
          height: 75,
          resizeMode: "contain",
          borderRadius: 1000,
        }}
        source={{ uri: student.picture.large }}
      />

      <View>
        <Text>
          {student.name.title} {student.name.first} {student.name.last}
        </Text>

        <View>
          <Text>{student.gender}</Text>
          <Text>{formatDate(new Date(student.dob.date))}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        flexDirection: 'row',
        
    }
});
