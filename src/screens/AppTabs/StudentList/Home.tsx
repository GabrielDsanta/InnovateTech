import React, { FC, useEffect, useRef, useState } from "react";

import { FlatList, Image, Keyboard, StyleSheet, View } from "react-native";
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
import { Local } from "services/Local";

export const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [cachedData, setCachedData] = useState<Student[]>([]);

  const { getStudents } = useStudent(String(page), cachedData.length > 0 && page === 1 ? true : false);
  const { data, isLoading } = getStudents;

  const [currentFiltersActivated, setCurrentFilterActivated] =
    useState<Object | null>(null);
  const [filterTextValue, setFilterTextValue] = useState("");
  const [filteredList, setFilteresList] = useState<Student[] | null>(null);
  const [modalStudent, setModalStudent] = useState<Student | null>(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const modalizeRef = useRef<Modalize>(null);
  const flatListRef = useRef<FlatList>(null);

  const handleEndReached = () => {
    if (!data) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  const loadDataFromCache = async () => {
    const cachedDataJSON = await Local.get("cachedData");
    if (cachedDataJSON) {
      setCachedData(JSON.parse(cachedDataJSON));
    }
  };

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  };

  const getCurrentListToBeRendered = () => {
    if (page > 2) {
      return data?.data?.results;
    }
    if (!filteredList && cachedData.length > 0 && page === 1) {
      return cachedData;
    }

    if (filteredList !== null) {
      return filteredList;
    }

    if (!filteredList && cachedData.length === 0 && data?.data?.results) {
      return data.data.results;
    }
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    const filteredStudents = data?.data.results.filter((item: Student) => {
      return item.name.first
        .toLocaleLowerCase()
        .includes(filterTextValue.toLocaleLowerCase());
    });

    setFilteresList(filteredStudents);
  }, [filterTextValue]);

  useEffect(() => {
    loadDataFromCache();
    getStudents.refetch();
    scrollToTop();
  }, [page]);

  useEffect(() => {
    if (!data) {
      return;
    }

    for (let key in currentFiltersActivated) {
      if (currentFiltersActivated.hasOwnProperty(key)) {
        const newFilteredList = data?.data?.results.filter(
          (item: Student) => item.gender === key
        );

        setFilteresList(newFilteredList);
      }
    }
  }, [currentFiltersActivated]);

  useEffect(() => {
    if (data && data.data.results && page === 1) {
      setCachedData(data.data.results);
    }
  }, [data]);

  useEffect(() => {
    setCachedData(cachedData);
  }, [cachedData]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const studentList = getCurrentListToBeRendered();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerContent}>
        <View
          style={[
            styles.containerStudentListStyles,
            !isKeyboardOpen && { paddingBottom: 100 },
          ]}
        >
          <FlatList
            ListHeaderComponent={
              <View style={{ marginBottom: 25 }}>
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
              </View>
            }
            ref={flatListRef}
            style={{ height: "100%" }}
            ListEmptyComponent={<ListEmptyComponent />}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id.value + index}
            renderItem={({ item }) => (
              <StudentCard
                onPress={() => setModalStudent(item)}
                student={item}
              />
            )}
            data={studentList}
            refreshing={isLoading}
            onEndReached={handleEndReached}
            ListFooterComponent={<ListFooterComponent />}
          />
        </View>
      </View>

      <FilterModalize
        setCurrentFilterActivated={setCurrentFilterActivated}
        modalizeRef={modalizeRef}
      />
      <StudentDetailsModal
        setModalStudent={setModalStudent}
        modalStudent={modalStudent}
      />
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
    width: "100%",
    marginTop: 25,
    height: "100%",
  },
});
