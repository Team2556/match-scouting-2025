import * as db from "@/scripts/database";
import * as SQLite from "expo-sqlite";
import { HomeDisplayType, MatchType } from "@/scripts/types";

const getMatchesScouted = async (database: SQLite.SQLiteDatabase) => {
  const scoutedMatches = await db.loadData(database);
  let scoutedMatchesList = [] as HomeDisplayType[];
  let currentMatch: MatchType;
  let targetedMatch: HomeDisplayType;

  for (let match in scoutedMatches) {
    currentMatch = scoutedMatches[match];
    if (
      scoutedMatchesList.filter((match) => match.match == currentMatch.matchNum)
        .length == 0
    ) {
      scoutedMatchesList.push({
        match: currentMatch.matchNum,
        posScouted: [false, false, false, false, false, false],
      });
    }
    targetedMatch = scoutedMatchesList.filter(
      (match) => match.match == currentMatch.matchNum
    )[0];

    targetedMatch.posScouted[currentMatch.position] = true;
  }

  return scoutedMatchesList;
};

export default getMatchesScouted;
