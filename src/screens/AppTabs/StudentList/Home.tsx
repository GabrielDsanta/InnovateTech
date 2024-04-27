import React, { FC, useEffect, useRef, useState } from "react";

import { FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modalize } from "react-native-modalize";
import { useStudent } from "hooks/useStudent";
import { Student } from "../../../types";
import {
  FilterModalize,
  StudentCard,
  ListEmptyComponent,
  ListFooterComponent,
} from "./components";
import { SearchBar } from "components/SearchBar";
import { StudentDetailsModal } from "./components/StudentDetailsModal";

export const Home: FC = () => {
  const [page, setPage] = useState(1);

  const { getStudents } = useStudent(String(page));
  const { data, isLoading } = getStudents;

  const [filterTextValue, setFilterTextValue] = useState("");
  const [filteredList, setFilteresList] = useState<Student[] | null>(null);
  const [modalStudent, setModalStudent] = useState<Student | null>(null);

  const modalizeRef = useRef<Modalize>(null);
  const flatListRef = useRef<FlatList>(null);

  const handleEndReached = () => {
    if (!data) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  useEffect(() => {
    const filteredStudents = data?.data.results.filter((item: Student) => {
      return item.name.first
        .toLocaleLowerCase()
        .includes(filterTextValue.toLocaleLowerCase());
    });

    setFilteresList(filteredStudents);
  }, [filterTextValue]);

  useEffect(() => {
    getStudents.refetch();
    scrollToTop();
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerContent}>
        <Image
          style={styles.logoImageStyles}
          source={require("@assets/InnovateTechLogo.jpeg")}
        />

        <SearchBar
          setFilterTextValue={setFilterTextValue}
          filterTextValue={filterTextValue}
          onPressFilterButton={() => {
            setFilteresList(null);
            modalizeRef.current?.open();
          }}
        />

        <View style={styles.containerStudentListStyles}>
          <FlatList
            ref={flatListRef}
            style={{ height: "70%" }}
            ListEmptyComponent={<ListEmptyComponent />}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id.value + index}
            renderItem={({ item }) => (
              <StudentCard
                onPress={() => setModalStudent(item)}
                student={item}
              />
            )}
            data={filteredList ? filteredList : data?.data?.results}
            refreshing={isLoading}
            onEndReached={handleEndReached}
            ListFooterComponent={<ListFooterComponent />}
          />
        </View>
      </View>

      <FilterModalize modalizeRef={modalizeRef} />
      <StudentDetailsModal setModalStudent={setModalStudent} modalStudent={modalStudent} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerContent: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoImageStyles: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  containerStudentListStyles: {
    paddingBottom: 100,
    width: "100%",
    marginTop: 25,
  },
});
