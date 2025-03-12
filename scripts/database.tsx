import * as SQLite from "expo-sqlite";
import { DataType, MatchType } from "./types";

export const createDbIfNeeded = async (db: SQLite.SQLiteDatabase) => {
  await db.execAsync(`
        CREATE TABLE IF NOT EXISTS competition (id INTEGER PRIMARY KEY AUTOINCREMENT, matchNum INTEGER, position INTEGER, team INTEGER, scouter TEXT, coralAuto INTEGER, coralAutoAtt INTEGER, algaeAuto INTEGER, levelAuto TEXT, moved BOOLEAN, coralTeleop INTEGER, coralTeleopAtt INTEGER, algaeTeleop INTEGER, levelTeleop TEXT, finish INTEGER, defense BOOLEAN, ground BOOLEAN, foul BOOLEAN, net BOOLEAN);
        `);
};

export const loadData = async (db: SQLite.SQLiteDatabase) => {
  const result = await db.getAllAsync<MatchType>("SELECT * FROM competition;");
  return result;
};

export const dropData = async (db: SQLite.SQLiteDatabase) => {
  await db.execAsync(`DROP TABLE competition;`);
  await createDbIfNeeded(db);
};

export const saveData = async (db: SQLite.SQLiteDatabase, data: string) => {
  db.runAsync(
    "INSERT INTO competition (matchNum, position, team, scouter, coralAuto, coralAutoAtt, algaeAuto, levelAuto, moved, coralTeleop, CoralTeleopAtt, algaeTeleop, levelTeleop, finish, defense, ground, foul, net) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
    data.split(",")
  );
};

export const loadMatch = async (
  db: SQLite.SQLiteDatabase,
  match: number,
  pos: number
) => {
  const result = await db.getAllAsync<MatchType>(
    `SELECT * FROM competition WHERE matchNum = ${match} AND position = ${pos};`
  );
  if (result.length==1) {
    return result[0]
  }
  else {
    return result[-1]
  }
};
