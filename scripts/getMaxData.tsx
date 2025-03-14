import { MatchType, MaxDataType } from "./types";

const getMaxData = (data: MatchType[]) => {
    const coralAuto = Math.max(...data.map((obj) => obj.coralAuto));
    const coralAutoAtt = Math.max(...data.map((obj) => obj.coralAutoAtt));
    const algaeAuto = Math.max(...data.map((obj) => obj.algaeAuto));
    const coralTeleop = Math.max(...data.map((obj) => obj.coralTeleop));
    const coralTeleopAtt = Math.max(...data.map((obj) => obj.coralTeleopAtt));
    const algaeTeleop = Math.max(...data.map((obj) => obj.algaeTeleop));

    const result: MaxDataType = {
        coralAuto: coralAuto,
        coralAutoAtt: coralAutoAtt,
        algaeAuto: algaeAuto,
        coralTeleop: coralTeleop,
        coralTeleopAtt: coralTeleopAtt,
        algaeTeleop: algaeTeleop,
    };

    return result
}

export default getMaxData