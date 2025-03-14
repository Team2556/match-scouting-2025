export type DataType = {
  matchNum: number;
  pos: number;
  team: number;
  scouter: string;
  coralAuto: number;
  coralAutoAtt: number;
  algaeAuto: number;
  levelAuto: string;
  moved: number;
  coralTeleop: number;
  coralTeleopAtt: number;
  algaeTeleop: number;
  levelTeleop: string;
  finish: number;
  defense: number;
  ground: number;
  foul: number;
  net: number;
};

export type MatchType = {
  id: number;
  matchNum: number;
  position: number;
  team: number;
  scouter: string;
  coralAuto: number;
  coralAutoAtt: number;
  algaeAuto: number;
  levelAuto: string;
  moved: number;
  coralTeleop: number;
  coralTeleopAtt: number;
  algaeTeleop: number;
  levelTeleop: string;
  finish: number;
  defense: number;
  ground: number;
  foul: number;
  net: number;
};

export type AvgDataType = {
  coralAuto: number;
  coralAutoAtt: number;
  algaeAuto: number;
  levelAuto: number[];
  moved: number;
  coralTeleop: number;
  coralTeleopAtt: number;
  algaeTeleop: number;
  levelTeleop: number[];
  finish: number[];
  defense: number;
  ground: number;
  foul: number;
  net: number;
}

export type MaxDataType = {
  coralAuto: number;
  coralAutoAtt: number;
  algaeAuto: number;
  coralTeleop: number;
  coralTeleopAtt: number;
  algaeTeleop: number;
}

export type ModalType = {
  title: string,
  text: string,
  bad: boolean,
}

export type MatchPosType = {
  match: number,
  posScouted: [boolean, boolean, boolean, boolean, boolean, boolean],
}

export type GradeType = {
  coralAuto: number;
  coralAutoAtt: number;
  algaeAuto: number;
  l1Auto: number;
  l2Auto: number;
  l3Auto: number;
  l4Auto: number;
  moved: number;
  coralTeleop: number;
  coralTeleopAtt: number;
  algaeTeleop: number;
  l1Teleop: number;
  l2Teleop: number;
  l3Teleop: number;
  l4Teleop: number;
  fDeep: number;
  fShallow: number;
  fParked: number;
  fNone: number;
  ground: number;
  foul: number;
  net: number;
}