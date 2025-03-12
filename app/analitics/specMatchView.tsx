import { View, ScrollView, Text, Pressable } from "react-native";
import * as db from "@/scripts/database";
import * as SQLite from "expo-sqlite";
import { MatchType } from "@/scripts/types";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { layout } from "../styles/analytics/matchView";
import { useNavigation } from "@react-navigation/native";
import colorScheme from "@/constants/colorScheme";

const SpecificMatchView = ({ route }: { route: any }) => {
  const match: { match: number; position: number } = route.params.match;
  const [data, setData] = useState<MatchType>();
  const database = SQLite.useSQLiteContext();
  const navigation = useNavigation();

  const loadMatchData = async () => {
    const result = await db.loadMatch(database, match.match, match.position);
    setData(result);
  };

  useFocusEffect(
    useCallback(() => {
      loadMatchData();
    }, [])
  );

  return (
    <View style={layout.container}>
      <ScrollView style={layout.content}>
        <View style={layout.column}>
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <Text
          onPress={() => navigation.goBack()}
          style={layout.footerButton}
        >
          Back
        </Text>
        <View style={layout.titleRow}>

        <Text style={layout.title}>Match: {match.match}</Text>
        <Text style={layout.title}>|</Text>
        <Text style={[layout.title, (match.position < 3) ? {color: colorScheme.blue} : {color: colorScheme.red}]}>{['B1','B2', 'B3', 'R1', 'R2', 'R3'][match.position]}</Text>
        </View>
      </View>
    </View>
  );
};

export default SpecificMatchView;