import { View, Text, Pressable } from "react-native";
import { useState, useCallback } from "react";

import { useNavigation } from "@react-navigation/native";
import * as db from "@/scripts/database";
import * as SQLite from "expo-sqlite";

import { AvgDataType, MatchType, MaxDataType } from "@/scripts/types";

import NoTeamFound from "./teamNodes/noTeamFound";
import MatchesPlayed from "./teamNodes/matchesPlayed";
import { layout } from "@/app/styles/analytics/team";
import { useFocusEffect } from "expo-router";
import getAverageData from "@/scripts/getAverageData";
import GamePageAuto from "./teamNodes/gamePageAuto";
import getMaxData from "@/scripts/getMaxData";
import GamePageTeleop from "./teamNodes/gamePageTeleop";
import OverallPage from "./teamNodes/overallPage";
import getGrades from "@/scripts/getTeamGrades";

const TeamContainer = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const database = SQLite.useSQLiteContext();
  const team: number = route.params.team;
  const [teamData, setTeamData] = useState<MatchType[]>();
  const [avgTeamData, setAvgTeamData] = useState<AvgDataType>();
  const [maxTeamData, setMaxTeamData] = useState<MaxDataType>();
  const [page, setPage] = useState(0);

  const getTeamData = async () => {
    let _data = await db.loadTeam(database, team);
    setTeamData(_data);
    setAvgTeamData(getAverageData(_data));
    setMaxTeamData(getMaxData(_data));
  };

  useFocusEffect(
    useCallback(() => {
      getTeamData();
    }, [])
  );

  if (teamData == undefined) {
    return <NoTeamFound team={team} />;
  }
  if (teamData.length == 0) {
    return <NoTeamFound team={team} />;
  }

  return (
    <View style={layout.container}>
      <View style={layout.header}>
        <Text style={layout.title}>Team {team}</Text>
        <Text style={[layout.titleBox, ]}>Overall Grade: {getGrades(teamData)[0]}</Text>
      </View>
      <View style={layout.body}>
        <View style={layout.bodyContent}>
          <View style={layout.navBar}>
            {["AUTO", "TELEOP", "OTHER"].map((pageName, index) => (
              <Text
                style={
                  index == page ? layout.navItemSelect : layout.navItemDeselect
                }
                onPress={() => setPage(index)}
                key={index}
              >
                {pageName}
              </Text>
            ))}
          </View>
          <View style={layout.content}>
            {page == 0 && (
              <GamePageAuto
                data={teamData}
                avgData={avgTeamData}
                maxData={maxTeamData}
              />
            )}
            {page == 1 && (
              <GamePageTeleop
                data={teamData}
                avgData={avgTeamData}
                maxData={maxTeamData}
              />
            )}
            {page == 2 && (
              <OverallPage
                data={teamData}
                avgData={avgTeamData}
                maxData={maxTeamData}
              />
            )}
          </View>
        </View>
      </View>
      <View style={layout.footer}>
        <Text style={layout.button} onPress={navigation.goBack}>
          Back
        </Text>
        <View style={{ width: "60%" }}>
          <MatchesPlayed data={teamData} />
        </View>
      </View>
    </View>
  );
};

export default TeamContainer;
