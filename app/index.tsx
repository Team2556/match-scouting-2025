import * as React from "react";
import { Platform } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ScreenOrientation from "expo-screen-orientation";

import Home from "./home";
import ScoutingWrapper from "./scoutingWrapper";
import Camera from "./camera";
import Settings from "./settings";

import * as SQLite from "expo-sqlite";
import * as db from "@/scripts/database";

if (Platform.OS == "ios" || Platform.OS == "android") {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
}

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: Home,
    Scouting: ScoutingWrapper,
    Camera: Camera,
    Settings: Settings,
  },
  screenOptions: {
    headerShown: false,
  },
});
const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SQLite.SQLiteProvider databaseName="test.db" onInit={db.createDbIfNeeded}>
      <Navigation />
    </SQLite.SQLiteProvider>
  );
}
