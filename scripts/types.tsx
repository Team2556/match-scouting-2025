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

export type ModalType = {
  title: string,
  text: string,
  bad: boolean,
}