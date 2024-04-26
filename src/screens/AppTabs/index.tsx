import React, { FC, useEffect, useState } from "react";

import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Host } from "react-native-portalize";
import { BottomTab } from "components/BottomTab";
import { Keyboard } from "react-native";
import { StudentList } from "./StockRoutes";

type AppRoutesType = {
  StudentList: undefined;
}

export type AppTabsRoutesNavigationRoutesProps = BottomTabNavigationProp<AppRoutesType>

const Tab = createBottomTabNavigator<AppRoutesType>()

export const AppTabs: FC = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

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

  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => isKeyboardOpen ? <></> : <BottomTab {...props} />}
        initialRouteName="StudentList">
        <Tab.Screen name="StudentList" component={StudentList} />
      </Tab.Navigator>
    </Host>
  );
};
