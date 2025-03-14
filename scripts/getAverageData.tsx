import { AvgDataType, MatchType } from "./types";

const averageArrayReduce = (arr: any) => {
  if (!arr || arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc: any, current: any) => acc + current, 0);
  return sum / arr.length;
};

const getLayerAvg = (arr: string[][]) => {
  let numOfMatches = arr.length;
  let l1 = 0;
  let l2 = 0;
  let l3 = 0;
  let l4 = 0;
  for (let i = 0; i < numOfMatches; i++) {
    l1 += parseInt(arr[i][0]);
    l2 += parseInt(arr[i][1]);
    l3 += parseInt(arr[i][2]);
    l4 += parseInt(arr[i][3]);
  }
  l1 = Math.round((l1 / numOfMatches) * 100);
  l2 = Math.round((l2 / numOfMatches) * 100);
  l3 = Math.round((l3 / numOfMatches) * 100);
  l4 = Math.round((l4 / numOfMatches) * 100);
  return [l1, l2, l3, l4];
};

const getFinishAvg = (arr: number[]) => {
  let currentFinish: number;
  let finishNum = [0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    currentFinish = arr[i];
    finishNum[currentFinish as number] += 1;
  }
  finishNum = finishNum.map((num) => {
    return Math.round((num / arr.length) * 100);
  });

  return finishNum;
};

const getAverageData = (data: MatchType[]) => {
  const coralAuto = averageArrayReduce(data.map((obj) => obj.coralAuto));
  const coralAutoAtt = averageArrayReduce(data.map((obj) => obj.coralAutoAtt));
  const algaeAuto = averageArrayReduce(data.map((obj) => obj.algaeAuto));

  const levelAuto = getLayerAvg(data.map((obj) => obj.levelAuto.split("|")));

  const moved = averageArrayReduce(data.map((obj) => +obj.moved)) * 100;
  const coralTeleop = averageArrayReduce(data.map((obj) => obj.coralTeleop));
  const coralTeleopAtt = averageArrayReduce(
    data.map((obj) => obj.coralTeleopAtt)
  );
  const algaeTeleop = averageArrayReduce(data.map((obj) => obj.algaeTeleop));

  const levelTeleop = getLayerAvg(
    data.map((obj) => obj.levelTeleop.split("|"))
  );

  const finish = getFinishAvg(data.map((obj) => obj.finish));

  const defense = averageArrayReduce(data.map((obj) => +obj.defense)) * 100;
  const ground = averageArrayReduce(data.map((obj) => +obj.ground)) * 100;
  const foul = averageArrayReduce(data.map((obj) => +obj.foul)) * 100;
  const net = averageArrayReduce(data.map((obj) => +obj.net)) * 100;

  const avgData: AvgDataType = {
    coralAuto: coralAuto,
    coralAutoAtt: coralAutoAtt,
    algaeAuto: algaeAuto,
    levelAuto: levelAuto,
    moved: moved,
    coralTeleop: coralTeleop,
    coralTeleopAtt: coralTeleopAtt,
    algaeTeleop: algaeTeleop,
    levelTeleop: levelTeleop,
    finish: finish,
    defense: defense,
    ground: ground,
    foul: foul,
    net: net,
  };

  return avgData;
};

export default getAverageData;
