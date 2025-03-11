import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Button } from "react-native";
import { useState } from "react";

import * as db from "@/scripts/database";

export default function Camera() {
  const navigation = useNavigation();
  const [qrScanned, setQRScanned] = useState(false);

  const scanCode = (data: any) => {
    if (qrScanned) {
      return;
    }
    setQRScanned(true);

    db.saveData(data.data);
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
