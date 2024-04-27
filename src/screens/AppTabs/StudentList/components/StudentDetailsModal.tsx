import React, { FC } from "react";

import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Student } from "types";
import { formatDate } from "@utils/formatDate";
import { translateGender } from "@utils/translateGender";

import fonts from "styles/fonts";
import colors from "styles/colors";

const { width } = Dimensions.get("window");

interface StudentDetailsModalProps {
  modalStudent: Student | null;
  setModalStudent: (student: Student | null) => void;
}

export const StudentDetailsModal: FC<StudentDetailsModalProps> = ({
  modalStudent,
  setModalStudent,
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      onDismiss={() => setModalStudent(null)}
      visible={modalStudent !== null}
    >
      <TouchableOpacity
        touchSoundDisabled
        activeOpacity={0}
        onPress={() => setModalStudent(null)}
        style={styles.modalStyles}
      >
        <View style={styles.containerModalStyles}>
          <Image
            style={{
              width: 130,
              height: 130,
              resizeMode: "contain",
              borderRadius: 1000,
              marginBottom: 20,
            }}
            source={{ uri: modalStudent?.picture.large }}
          />

          <View style={styles.containerTextLine}>
            <Text style={styles.fontBold}>ID:</Text>
            <Text style={styles.fontRegular}>{modalStudent?.id.value}</Text>
          </View>
          <View style={styles.containerTextLine}>
            <Text style={styles.fontBold}>Nome:</Text>
            <Text style={styles.fontRegular}>
              {modalStudent?.name.title} {modalStudent?.name.first}{" "}
              {modalStudent?.name.last}
            </Text>
          </View>
          <View style={styles.containerTextLine}>
            <Text style={styles.fontBold}>E-mail:</Text>
            <Text style={styles.fontRegular}>{modalStudent?.email}</Text>
          </View>
          <View style={styles.containerTextLine}>
            <Text style={styles.fontBold}>Gênero:</Text>
            <Text style={styles.fontRegular}>{translateGender(modalStudent?.gender!)}</Text>
          </View>
          <View style={styles.containerTextLine}>
            <Text style={styles.fontBold}>Data de nascimento:</Text>
            <Text style={styles.fontRegular}>{formatDate(new Date(modalStudent?.dob?.date!))}</Text>
          </View>
          <View style={styles.containerTextLine}>
            <Text style={styles.fontBold}>Telefone:</Text>
            <Text style={styles.fontRegular}>{modalStudent?.cell}</Text>
          </View>
          <View style={styles.containerTextLine}>
            <Text style={styles.fontBold}>Nacionalidade:</Text>
            <Text style={styles.fontRegular}>
              {modalStudent?.location.country}
            </Text>
          </View>
          <View style={styles.containerTextLine}>
            <Text style={styles.fontBold}>Endereço:</Text>
            <Text style={styles.fontRegular}>
              {modalStudent?.location.street.name} {modalStudent?.location.street.number}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyles: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 20,
  },
  containerModalStyles: {
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    width: width * 0.9,
    height: "65%",
    backgroundColor: "white",
  },
  containerTextLine: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 10
  },
  fontBold: {
    ...fonts.boldFont,
    color: colors.gray400,
    fontSize: 16,
  },
  fontRegular: {
    ...fonts.regularFont,
    color: colors.gray400,
  },
});
