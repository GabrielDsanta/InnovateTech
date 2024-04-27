import React, { FC, FormEvent, useState } from "react";

import { Formik, FormikValues } from "formik";
import { Modalize } from "react-native-modalize";
import { filterTrueValues } from "@utils/filterTrueValues";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { filterValidation } from "../../../../types";
import { IHandles } from "react-native-modalize/lib/options";

import colors from "styles/colors";
import fonts from "styles/fonts";

interface FilterModalizeProps {
  modalizeRef: React.RefObject<IHandles>;
}

export const FilterModalize: FC<FilterModalizeProps> = ({ modalizeRef }) => {
  const [currentFiltersActivated, setCurrentFilterActivated] =
    useState<Object | null>(null);
  const [generalFilterValue, setGeneralFilterValue] = useState<
    string | boolean
  >(false);

  return (
    <Modalize
      modalHeight={400}
      closeOnOverlayTap
      withHandle={false}
      scrollViewProps={{ showsVerticalScrollIndicator: false }}
      ref={modalizeRef}
      modalStyle={styles.containerModalize}
    >
      <Formik
        validationSchema={filterValidation}
        initialValues={{
          byDistance: false,
          biggestPrice: false,
          lowestPrice: false,
          mostRecent: false,
          thirtyDaysAgo: false,
        }}
        onSubmit={(values) => {
          const filteredValues = filterTrueValues(values);
          setCurrentFilterActivated(filteredValues);
          modalizeRef.current?.close();
        }}
      >
        {({
          handleSubmit,
          setFieldValue,
          values,
        }: {
          values: FormikValues;
          handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
          setFieldValue: (
            field: string,
            value: any,
            shouldValidate?: boolean
          ) => void;
        }) => {
          return (
            <View style={{ paddingBottom: 165 }}>
              <View
                style={[
                  styles.containerModalizeItem,
                  {
                    justifyContent: "space-between",
                    borderTopWidth: 0,
                    alignItems: "center",
                    flexDirection: "row",
                    marginTop: 15,
                    paddingBottom: 10,
                    paddingHorizontal: 20,
                  },
                ]}
              >
                <View style={{ width: 75 }}></View>
                <Text
                  style={[styles.boldText, { color: "#404040", fontSize: 16 }]}
                >
                  Filtro
                </Text>
                <TouchableOpacity
                  onPress={() => handleSubmit}
                  style={{
                    width: 70,
                    backgroundColor: colors.primary,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 25,
                    borderRadius: 1000,
                  }}
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
                    item.id === "thirtyDaysAgo" && { borderBottomWidth: 0 },
                  ]}
                  key={item.id}
                >
                  <Text
                    style={[
                      styles.regularText,
                      { color: colors.primary },
                      generalFilterValue === item.id && {
                        ...fonts.boldFont,
                        backgroundColor: colors.primary,
                        color: "white",
                        borderRadius: 10000,
                        paddingHorizontal: 15,
                        paddingVertical: 5,
                      },
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
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerScrollView: {
    flex: 1,
  },
  regularText: {
    ...fonts.regularFont,
  },
  containerContent: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImageStyles: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
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
  boldText: {
    ...fonts.boldFont,
  },
});

const FilterFields = [
  {
    id: "byDistance",
    title: "Por distância",
  },
  {
    id: "biggestPrice",
    title: "Maior preço",
  },
  {
    id: "lowestPrice",
    title: "Menor preço",
  },
  {
    id: "mostRecent",
    title: "Mais recentes",
  },
  {
    id: "thirtyDaysAgo",
    title: "Anunciados a mais de 30 dias",
  },
];
