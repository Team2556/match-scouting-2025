type data = {
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

const generateDataCode = (dataCode: data) => {
  let code = Object.values(dataCode).join(",");
  return code;
};

export default generateDataCode;
