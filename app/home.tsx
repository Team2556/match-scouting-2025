import { View, Text, TextInput, Pressable, FlatList, ScrollView } from "react-native";
import { footer, header, layout } from "./styles/homeStyle";
import { useCallback, useState } from "react";
import colorScheme from "@/constants/colorScheme";

import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useFocusEffect } from "expo-router";
import { scale } from "react-native-size-matters";

import { useCameraPermissions } from "expo-camera";
import { MatchPosType, MatchType } from "@/scripts/types";

import * as db from "@/scripts/database";
import * as SQLite from "expo-sqlite";
import getMatchesScouted from "@/scripts/getMatchesScouted";
import OverviewContainer from "./analitics/homeOverview";

export default function Home() {
  const [teamSearch, setTeamSearch] = useState("");
  const [matchSearch, setMatchSearch] = useState("");

  const navigation = useNavigation();
  const database = SQLite.useSQLiteContext();

  const [permission, requestPermission] = useCameraPermissions();

  const [data, setData] = useState<MatchPosType[]>([]);

  const loadData = async () => {
    const result = await getMatchesScouted(database);
    setData(result);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const searchMatch = () => {
    for (let i in data) {
      if (data[i].match == parseInt(matchSearch)) {
        navigation.navigate("Match", { match: data[i] });
        return
      }
    }
    navigation.navigate("Match", {match: parseInt(matchSearch)});
  }

  return (
    <View style={layout.body}>
      <View style={layout.header}>
        <TextInput
          style={header.search}
          value={teamSearch}
          onChangeText={setTeamSearch}
          placeholder="Team #"
          keyboardType="number-pad"
          placeholderTextColor={colorScheme.faded}
          maxLength={5}
        />
        <Pressable
          style={header.searchButton}
          onPress={() => {navigation.navigate("SpecTeam", { team: parseInt(teamSearch)})}}
        >
          <Text style={header.searchButtonText}>Search</Text>
          <Feather name="search" size={scale(30)} color="white" />
        </Pressable>
          <Pressable
            style={footer.searchButton}
            onPress={() => navigation.navigate("Settings" as never)}
          >
            <Feather name="settings" size={scale(30)} color="white" />
          </Pressable>
      </View>
      <OverviewContainer matches={data} />
      <View style={layout.footer}>
        <View style={footer.search}>
          <TextInput
            style={footer.searchBar}
            value={matchSearch}
            onChangeText={setMatchSearch}
            placeholder="Match #"
            placeholderTextColor={colorScheme.faded}
            keyboardType="number-pad"
            maxLength={3}
          />
          <Pressable
            style={footer.searchButton}
            onPress={searchMatch}
          >
            <Feather name="search" size={scale(30)} color="white" />
          </Pressable>
        </View>
        <View style={footer.scoutButtons}>
          
          <Pressable
            style={footer.scoutButton}
            onPress={() => {
              requestPermission();
              navigation.navigate("Camera" as never);
            }}
          >
            <Ionicons name="camera-outline" size={scale(30)} color="white" />
          </Pressable>
          <Pressable
            style={[footer.scoutButton, footer.plusButton]}
            onPress={() => {
              navigation.navigate("Scouting" as never);
            }}
          >
            <Entypo name="plus" size={scale(30)} color={colorScheme.green} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

