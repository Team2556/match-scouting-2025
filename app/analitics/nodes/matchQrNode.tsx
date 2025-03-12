import { View, Text, Pressable } from "react-native";
import * as db from "@/scripts/database";
import * as SQLite from "expo-sqlite";
import { useState, useCallback } from "react";
import { MatchType } from "@/scripts/types";
import { useNavigation } from "@react-navigation/native";

import { useFocusEffect } from "expo-router";
import QRCode from "react-native-qrcode-svg";
import { scale } from "react-native-size-matters";
import {
  blueStyle,
  posStyle,
  redStyle,
} from "../../styles/analytics/matchView";
import colorScheme from "@/constants/colorScheme";

const MatchQrNode = ({
  match,
  pos,
  scouted,
  onPress,
}: {
  match: number;
  pos: number;
  scouted: boolean;
  onPress: any;
}) => {
  if (!scouted) {
    return (
      <View style={posStyle.container}>
        <Text style={posStyle.label}>No Data</Text>
      </View>
    );
  }

  const database = SQLite.useSQLiteContext();
  const [data, setData] = useState<MatchType>();

  const getPositionString = () => {
    let posStr =
      data?.position != undefined
        ? ["Blue 1", "Blue 2", "Blue 3", "Red 1", "Red 2", "Red 3"][
            data.position
          ]
        : "No Position";

    return posStr;
  };

  const generateTeamString = () => {
    let teamNum = data?.team != undefined ? data.team : "No Team";
    return teamNum;
  };
  const loadMatchData = async () => {
    const result = await db.loadMatch(database, match, pos);
    setData(result);
  };

  useFocusEffect(
    useCallback(() => {
      loadMatchData();
    }, [])
  );

  let colorStyle = pos < 3 ? blueStyle : redStyle;

  return (
    <Pressable
      style={[posStyle.container, colorStyle.border]}
      onPress={onPress}
    >
      <QRCode
        value={data ? Object.values(data).slice(1, -1).join(",") : "null"}
        size={scale(160)}
        quietZone={scale(10)}
        
      />
      <View style={posStyle.labelRow}>
        <Text style={[posStyle.label, colorStyle.text]}>
          {getPositionString()}
        </Text>
        <Text style={posStyle.label}>{" | "}</Text>
        <Text
          style={{
            ...posStyle.label,
            color: data?.team == 2556 ? colorScheme.purple : colorScheme.text,
          }}
        >
          {generateTeamString()}
        </Text>
      </View>
    </Pressable>
  );
};

export default MatchQrNode;
