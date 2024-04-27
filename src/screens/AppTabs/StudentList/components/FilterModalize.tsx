import React, { FC, useState } from "react";

import { Formik, FormikValues } from "formik";
import { Modalize } from "react-native-modalize";
import { filterTrueValues } from "@utils/filterTrueValues";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FilterObject, filterValidation } from "../../../../types";
import { IHandles } from "react-native-modalize/lib/options";

import colors from "styles/colors";
import fonts from "styles/fonts";

interface FilterModalizeProps {
  modalizeRef: React.RefObject<IHandles>;
  setCurrentFilterActivated: (obj: Object) => void;
}

export const FilterModalize: FC<FilterModalizeProps> = ({
  modalizeRef,
  setCurrentFilterActivated,
}) => {
  const [generalFilterValue, setGeneralFilterValue] = useState<
    string | boolean
  >(false);

  const handleSubmitForm = (values: FilterObject) => {
    const filteredValues = filterTrueValues(values);
    setCurrentFilterActivated(filteredValues);
    modalizeRef.current?.close();
  };

  return (
    <Modalize
      modalHeight={300}
      closeOnOverlayTap
      withHandle={false}
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
      ref={modalizeRef}
      modalStyle={styles.containerModalize}
    >
      <Formik
        validationSchema={filterValidation}
        initialValues={{
          male: false,
          female: false
        }}
        onSubmit={handleSubmitForm}
      >
        {({
          handleSubmit,
          setFieldValue,
          values,
        }: {
          values: FormikValues;
          handleSubmit: () => void;
          setFieldValue: (field: string, value: any) => void;
        }) => {
          return (
            <View>
              <View
                style={[styles.containerModalizeItem, styles.formRowStyles]}
              >
                <View style={{ width: 75 }}></View>
                <Text
                  style={[styles.boldText, { color: "#404040", fontSize: 16 }]}
                >
                  Filtro
                </Text>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.submitButtonStyles}
                >
                  <Text style={[styles.boldText]}>Salvar</Text>
                </TouchableOpacity>
              </View>

              {FilterFields.map((item) => (
                <TouchableOpacity
                  onPress={() => {
                    setFieldValue(item.id, !values[item.id]);
                    setGeneralFilterValue(item.id);
                  }}
                  style={[
                    styles.containerModalizeItem,
                    { height: 50, borderTopWidth: 0 },
                    item.id === "female" && { borderBottomWidth: 0 },
                  ]}
                  key={item.id}
                >
                  <Text
                    style={[
                      styles.regularText,
                      { color: colors.primary },
                      generalFilterValue === item.id &&
                        styles.activeFilterStyles,
                    ]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          );
        }}
      </Formik>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  regularText: {
    ...fonts.regularFont,
  },
  containerModalize: {
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  containerModalizeItem: {
    height: 35,
    width: "100%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  formRowStyles: {
    justifyContent: "space-between",
    borderTopWidth: 0,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  submitButtonStyles: {
    width: 80,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 28,
    borderRadius: 1000,
  },
  activeFilterStyles: {
    ...fonts.boldFont,
    backgroundColor: colors.primary,
    color: "white",
    borderRadius: 10000,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  boldText: {
    ...fonts.boldFont,
  },
});

const FilterFields = [
  {
    id: "male",
    title: "Masculino",
  },
  {
    id: "female",
    title: "Feminino",
  }
];
