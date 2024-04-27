import { Student } from "types";

import AsyncStorage from "@react-native-async-storage/async-storage";

const keys = {
  cachedData: "@storage:cachedData",
};

type Keys = keyof typeof keys;

export class Local {
  static async setCachedData(data: Student[]) {
    return await this.set("cachedData", JSON.stringify(data));
  }

  static async get(key: Keys) {
    try {
      return await AsyncStorage.getItem(keys[key]);
    } catch (error) {
      alert(error);
    }
  }

  static async set(key: Keys, value: string) {
    try {
      return await AsyncStorage.setItem(keys[key], value);
    } catch (error) {
      alert(error);
    }
  }

  static async cleanAll() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      alert(error);
    }
  }
}
