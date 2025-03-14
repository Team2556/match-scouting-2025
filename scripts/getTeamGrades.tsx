import { GradeType, MatchType } from "./types";

export const GradeValues: GradeType = {
  coralAuto: 3,
  coralAutoAtt: 1,
  algaeAuto: 3,
  l1Auto: 2,
  l2Auto: 3,
  l3Auto: 4,
  l4Auto: 6,
  moved: 2,
  coralTeleop: 2,
  coralTeleopAtt: 1,
  algaeTeleop: 3,
  l1Teleop: 1,
  l2Teleop: 2,
  l3Teleop: 3,
  l4Teleop: 5,
  fDeep: 6,
  fShallow: 3,
  fParked: 2,
  fNone: -1,
  ground: 3,
  foul: -3,
  net: 5,
};

const getGrade = (matchData: MatchType) => {
  console.log(matchData);
  let result: GradeType = {
    coralAuto: matchData.coralAuto * GradeValues.coralAuto,
    coralAutoAtt: matchData.coralAutoAtt * GradeValues.coralAutoAtt,
    algaeAuto: matchData.algaeAuto * GradeValues.algaeAuto,
    l1Auto: parseInt(matchData.levelAuto.split('|')[0]) * GradeValues.l1Auto,
    l2Auto: parseInt(matchData.levelAuto.split('|')[1]) * GradeValues.l2Auto,
    l3Auto: parseInt(matchData.levelAuto.split('|')[2]) * GradeValues.l3Auto,
    l4Auto: parseInt(matchData.levelAuto.split('|')[3]) * GradeValues.l4Auto,
    moved: +matchData.moved * GradeValues.moved,
    coralTeleop: matchData.coralTeleop * GradeValues.coralTeleop,
    coralTeleopAtt: matchData.coralTeleopAtt * GradeValues.coralTeleopAtt,
    algaeTeleop: matchData.algaeTeleop * GradeValues.algaeTeleop,
    l1Teleop: parseInt(matchData.levelTeleop.split('|')[0]) * GradeValues.l1Teleop,
    l2Teleop: parseInt(matchData.levelTeleop.split('|')[1]) * GradeValues.l2Teleop,
    l3Teleop: parseInt(matchData.levelTeleop.split('|')[2]) * GradeValues.l3Teleop,
    l4Teleop: parseInt(matchData.levelTeleop.split('|')[3]) * GradeValues.l4Teleop,
    fDeep: (matchData.finish == 3 ? 1 : 0) * GradeValues.fDeep,
    fShallow: (matchData.finish == 2 ? 1 : 0) * GradeValues.fShallow,
    fParked: (matchData.finish == 1 ? 1 : 0) * GradeValues.fParked,
    fNone: (matchData.finish == 0 ? 1 : 0) * GradeValues.fNone,
    ground: +matchData.ground * GradeValues.ground,
    foul: +matchData.foul * GradeValues.foul,
    net: +matchData.net * GradeValues.net,
  };
  return result;
};

const getAverageGrades = (MatchData: MatchType[]) => {
  let averageGrades: GradeType[] = MatchData.map((match) => getGrade(match));
  return averageGrades;
};

const getAverageGrade = (MatchData: MatchType[]) => {
  let averageGrades: GradeType[] = getAverageGrades(MatchData);
  let averageGrade: GradeType = {
    coralAuto: 0,
    coralAutoAtt: 0,
    algaeAuto: 0,
    l1Auto: 0,
    l2Auto: 0,
    l3Auto: 0,
    l4Auto: 0,
    moved: 0,
    coralTeleop: 0,
    coralTeleopAtt: 0,
    algaeTeleop: 0,
    l1Teleop: 0,
    l2Teleop: 0,
    l3Teleop: 0,
    l4Teleop: 0,
    fDeep: 0,
    fShallow: 0,
    fParked: 0,
    fNone: 0,
    ground: 0,
    foul: 0,
    net: 0,
  };
  for (let i = 0; i < averageGrades.length; i++) {
    averageGrade.coralAuto += averageGrades[i].coralAuto;
    averageGrade.coralAutoAtt += averageGrades[i].coralAutoAtt;
    averageGrade.algaeAuto += averageGrades[i].algaeAuto;
    averageGrade.l1Auto += averageGrades[i].l1Auto;
    averageGrade.l2Auto += averageGrades[i].l2Auto;
    averageGrade.l3Auto += averageGrades[i].l3Auto;
    averageGrade.l4Auto += averageGrades[i].l4Auto;
    averageGrade.moved += averageGrades[i].moved;
    averageGrade.coralTeleop += averageGrades[i].coralTeleop;
    averageGrade.coralTeleopAtt += averageGrades[i].coralTeleopAtt;
    averageGrade.algaeTeleop += averageGrades[i].algaeTeleop;
    averageGrade.l1Teleop += averageGrades[i].l1Teleop;
    averageGrade.l2Teleop += averageGrades[i].l2Teleop;
    averageGrade.l3Teleop += averageGrades[i].l3Teleop;
    averageGrade.l4Teleop += averageGrades[i].l4Teleop;
    averageGrade.fDeep += averageGrades[i].fDeep;
    averageGrade.fShallow += averageGrades[i].fShallow;
    averageGrade.fParked += averageGrades[i].fParked;
  }
  for (let i = 0; i < Object.keys(averageGrade).length; i++) {
    averageGrade[Object.keys(averageGrade)[i] as keyof GradeType] /=
      averageGrades.length;
  }
  return averageGrade;
};

const getOverallGrade = (MatchData: MatchType[]) => {
    let averageGrade = getAverageGrade(MatchData);
    let overallGrade = Object.values(averageGrade).reduce((a, b) => a + b);
    return overallGrade;
} 

const getAutoGrade = (MatchData: MatchType[]) => {
    let averageGrade = getAverageGrade(MatchData);
    let autoGrade = averageGrade.coralAuto + averageGrade.coralAutoAtt + averageGrade.algaeAuto + averageGrade.l1Auto + averageGrade.l2Auto + averageGrade.l3Auto + averageGrade.l4Auto;
    return autoGrade;
}

const getTeleopGrade = (MatchData: MatchType[]) => {
    let averageGrade = getAverageGrade(MatchData);
    let teleopGrade = averageGrade.coralTeleop + averageGrade.coralTeleopAtt + averageGrade.algaeTeleop + averageGrade.l1Teleop + averageGrade.l2Teleop + averageGrade.l3Teleop + averageGrade.l4Teleop;
    return teleopGrade;
}

const getGrades = (MatchData: MatchType[]) => {
    let overallGrade = getOverallGrade(MatchData).toFixed(1);
    let autoGrade = getAutoGrade(MatchData).toFixed(1);
    let teleopGrade = getTeleopGrade(MatchData).toFixed(1);
    return [overallGrade, autoGrade, teleopGrade];
}

export default getGrades;