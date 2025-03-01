import { View, Text, TextInput, Pressable } from "react-native";
import { footer, header, layout } from "./styles/homeStyle";
import { useState } from "react";
import colorScheme from "@/constants/colorScheme";

import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [teamSearch, setTeamSearch] = useState("");
  const [matchSearch, setMatchSearch] = useState("");

  const navigation = useNavigation();

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
          <Feather name="search" size={40} color="white" />
        </Pressable>
      </View>
      <View style={layout.content}></View>
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
            <Feather name="search" size={40} color="white" />
          </Pressable>
        </View>
        <View style={footer.scoutButtons}>
          <Pressable
            style={footer.scoutButton}
            onPress={() => {
              alert("Camera mode ACTIVATED");
            }}
          >
            <Ionicons name="camera-outline" size={70} color="white" />{" "}
          </Pressable>
          <Pressable
            style={footer.scoutButton}
            onPress={() => {
              navigation.navigate("Details");
            }}
          >
            <Entypo name="plus" size={70} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
