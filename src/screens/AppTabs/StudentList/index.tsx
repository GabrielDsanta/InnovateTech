import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home";

const Stack = createNativeStackNavigator();

export const StudentList: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        animation: "none",
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
