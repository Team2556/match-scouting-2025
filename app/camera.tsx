import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Button } from "react-native";
import { useState } from "react";
import * as SQLite from "expo-sqlite";

export default function Camera() {
  const navigation = useNavigation();
  const db = SQLite.useSQLiteContext();

  const [permission, requestPermission] = useCameraPermissions();
  const [qrScanned, setQRScanned] = useState(false);

  const scanCode = (data: any) => {
    if (qrScanned) {
      return;
    }
    setQRScanned(true);
    db.runAsync(
      "CREATE TABLE IF NOT EXISTS competition (id INTEGER PRIMARY KEY AUTOINCREMENT, matchNum INTEGER, position INTEGER, team INTEGER, scouter TEXT, coralAuto INTEGER, coralAutoAtt INTEGER, algaeAuto INTEGER, levelAuto TEXT, moved BOOLEAN, coralTeleop INTEGER, coralTeleopAtt INTEGER, algaeTeleop INTEGER, levelTeleop TEXT, finish INTEGER, defense BOOLEAN, ground BOOLEAN, foul BOOLEAN, net BOOLEAN);"
    );
    db.runAsync(
      "INSERT INTO matchTest (matchNum, position, team, scouter, coralAuto, coralAutoAtt, algaeAuto, levelAuto, moved, coralTeleop, CoralTeleopAtt, algaeTeleop, levelTeleop, finish, defense, ground, foul, net) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
      data.data.split(",")
    );
    console.log(data.data);
    navigation.navigate("Home" as never);
  };

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={scanCode}
      />
      <View style={{ position: "fixed", bottom: 0, right: 0 }}>
        <Button title="Close" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
