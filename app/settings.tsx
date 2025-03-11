import { Text, View } from "react-native";
import * as db from "@/scripts/database";
import * as SQLite from "expo-sqlite";
import { settings } from "./styles/settingsStyle";
import { SettingsModal } from "./extras/modal";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Settings() {
  const [deleteModal, setDeleteModal] = useState(false);

  const database = SQLite.useSQLiteContext();
  const navigation = useNavigation();

  const deleteContent = {
    title: "Delete Database",
    text: "Are you sure you want to delete the database?",
    bad: true,
  };

  return (
    <View style={settings.container}>
      <SettingsModal
        display={deleteModal}
        setDisplay={setDeleteModal}
        content={deleteContent}
        func={() => db.dropData(database)}
      />

      <Text
        style={[settings.label, settings.outline, settings.red]}
        onPress={() => setDeleteModal(true)}
      >
        Delete Database
      </Text>
      <Text
        onPress={() => navigation.navigate("Home" as never)}
        style={[settings.label, settings.footer, settings.outline]}
      >
        Home
      </Text>
    </View>
  );
}
