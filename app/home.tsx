import { View, Text, TextInput, Pressable, FlatList } from "react-native";
import { footer, header, layout } from "./styles/homeStyle";
import { useCallback, useState } from "react";
import colorScheme from "@/constants/colorScheme";

import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import * as SQLite from "expo-sqlite";
import { useFocusEffect } from "expo-router";
import { scale } from "react-native-size-matters";

import { useCameraPermissions } from "expo-camera";

type MatchType = {
  id: number;
  matchNum: number;
  pos: number;
  team: number;
  scouter: string;
  coralAuto: number;
  coralAutoAtt: number;
  algaeAuto: number;
  levelAuto: string;
  moved: boolean;
  coralTeleop: number;
  coralTeleopAtt: number;
  algaeTeleop: number;
  levelTeleop: string;
  finish: number;
  defense: boolean;
  ground: boolean;
  foul: boolean;
  net: boolean;
};

export default function Home() {
  const [teamSearch, setTeamSearch] = useState("");
  const [matchSearch, setMatchSearch] = useState("");

  const navigation = useNavigation();
  const [permission, requestPermission] = useCameraPermissions();

  const [data, setData] = useState<MatchType[]>([]);
  const db = SQLite.useSQLiteContext();

  const loadData = async () => {
    const result = await db.getAllAsync<MatchType>("SELECT * FROM matchTest;");
    setData(result);
  };
  
  const dropDatabase = async () => {
    // await db.execAsync(`
    //   DROP TABLE matchTest;
    // CREATE TABLE IF NOT EXISTS competition (id INTEGER PRIMARY KEY AUTOINCREMENT, matchNum INTEGER, position INTEGER, team INTEGER, scouter TEXT, coralAuto INTEGER, coralAutoAtt INTEGER, algaeAuto INTEGER, levelAuto TEXT, moved BOOLEAN, coralTeleop INTEGER, coralTeleopAtt INTEGER, algaeTeleop INTEGER, levelTeleop TEXT, finish INTEGER, defense BOOLEAN, ground BOOLEAN, foul BOOLEAN, net BOOLEAN);
    // `);
    loadData();
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <View style={layout.body}>
      <View style={layout.header}>
        <TextInput
          style={header.search}
          value={teamSearch}
          onChangeText={setTeamSearch}
          placeholder="Team # / Team Name"
          placeholderTextColor={colorScheme.faded}
        />
        <Pressable
          style={header.searchButton}
          onPress={() => {
            alert("Searching for " + teamSearch);
          }}
        >
          <Text style={header.searchButtonText}>Search</Text>
          <Feather name="search" size={scale(30)} color="white" />
        </Pressable>
      </View>
      <View style={layout.content}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.id}</Text>
                <Text>{item.matchNum}</Text>
                <Text>{item.pos}</Text>
                <Text>{item.team}</Text>
                <Text>{item.scouter}</Text>
                <Text>{item.coralAuto}</Text>
                <Text>{item.coralAutoAtt}</Text>
                <Text>{item.algaeAuto}</Text>
                <Text>{item.levelAuto}</Text>
                <Text>{item.moved}</Text>
                <Text>{item.coralTeleop}</Text>
                <Text>{item.coralTeleopAtt}</Text>
                <Text>{item.algaeTeleop}</Text>
                <Text>{item.levelTeleop}</Text>
                <Text>{item.finish}</Text>
                <Text>{item.defense}</Text>
                <Text>{item.ground}</Text>
                <Text>{item.foul}</Text>
                <Text>{item.net}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={layout.footer}>
        <View style={footer.search}>
          <TextInput
            style={footer.searchBar}
            value={matchSearch}
            onChangeText={setMatchSearch}
            placeholder="Match #"
            placeholderTextColor={colorScheme.faded}
            keyboardType="numeric"
            maxLength={3}
          />
          <Pressable
            style={footer.searchButton}
            onPress={() => {
              alert("Searching for " + matchSearch);
            }}
          >
            <Feather name="search" size={scale(30)} color="white" />
          </Pressable>
        </View>
        <View style={footer.scoutButtons}>
          <Pressable style={footer.scoutButton} onPress={dropDatabase}>
            <Ionicons name="trash" size={scale(30)} color="red" />
          </Pressable>
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
