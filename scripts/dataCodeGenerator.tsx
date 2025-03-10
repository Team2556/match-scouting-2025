type data = {
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

const generateDataCode = (dataCode: data) => {
  let code = Object.values(dataCode).join(",");
  return code;
};

export default generateDataCode;
