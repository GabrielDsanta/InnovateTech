import "react-native-reanimated";
import React from "react";

import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Loading } from "./src/components";

import configureStore from "./src/redux/store/configureStore";
import Routes from "./src/Routes";

const queryClient = new QueryClient();

const store = configureStore();

export default function App() {
  const [fontsLoadead] = useFonts(fonts);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="dark" backgroundColor="transparent" translucent />
          {fontsLoadead ? <Routes /> : <Loading />}
        </QueryClientProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

const fonts = {
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
};
