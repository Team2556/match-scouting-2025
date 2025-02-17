import colorScheme from "@/constants/colorScheme";
import { Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function FinalContent({
  dataCode,
  coralAuto,
  coralAttAuto,
  algaeAuto,
  branch1Auto,
  branch2Auto,
  branch3Auto,
  branch4Auto,
  movedAuto,
  coralTeleop,
  coralAttTeleop,
  algaeTeleop,
  branch1Teleop,
  branch2Teleop,
  branch3Teleop,
  branch4Teleop,
  finishState,
  playedDefense,
  offGroundIntake,
  receivedFoul,
  scoredNet,
}: {
  dataCode: any;
  coralAuto: any;
  coralAttAuto: any;
  algaeAuto: any;
  branch1Auto: any;
  branch2Auto: any;
  branch3Auto: any;
  branch4Auto: any;
  movedAuto: any;
  coralTeleop: any;
  coralAttTeleop: any;
  algaeTeleop: any;
  branch1Teleop: any;
  branch2Teleop: any;
  branch3Teleop: any;
  branch4Teleop: any;
  finishState: any;
  playedDefense: any;
  offGroundIntake: any;
  receivedFoul: any;
  scoredNet: any;
}) {
  const generateBranchText = (branches: any) => {
    let branchesUsed = "";
    for (let i in branches) {
      if (!branches[i]) continue;
      if (branchesUsed != "") branchesUsed += ', ';
      branchesUsed += String(parseInt(i)+1);
    }
    return (branchesUsed) ? branchesUsed : 'NONE'
  };

  return (
    <View style={{ padding: 15, width: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          gap: 15,
        }}
      >
        <View style={{ width: "40%" }}>
          <View>
            <Text
              style={{
                fontSize: 35,
                color: colorScheme.text,
                textAlign: "center",
              }}
            >
              AUTO
            </Text>
            <View
              style={{
                width: "100%",
                height: 3,
                backgroundColor: colorScheme.text,
              }}
            ></View>
            <Text style={{ fontSize: 30, color: colorScheme.text }}>
              Coral: {coralAuto}/{coralAttAuto}
            </Text>
            <Text style={{ fontSize: 30, color: colorScheme.text, top: -10 }}>
              Algae: {algaeAuto}
            </Text>
            <Text style={{ fontSize: 30, color: colorScheme.text, top: -20 }}>
              Level: {generateBranchText([branch1Auto, branch2Auto, branch3Auto, branch4Auto])}
            </Text>
            <Text style={{ fontSize: 30, color: colorScheme.text, top: -20 }}>
              Moved: {movedAuto ? "YES" : "NO"}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 35,
                color: colorScheme.text,
                textAlign: "center",
              }}
            >
              TELEOP
            </Text>
            <View
              style={{
                width: "100%",
                height: 3,
                backgroundColor: colorScheme.text,
              }}
            ></View>
            <Text style={{ fontSize: 30, color: colorScheme.text }}>
              Coral: {coralTeleop}/{coralAttTeleop}
            </Text>
            <Text style={{ fontSize: 30, color: colorScheme.text, top: -10 }}>
              Algae: {algaeTeleop}
            </Text>
            <Text style={{ fontSize: 30, color: colorScheme.text, top: -20 }}>
              Level: {generateBranchText([branch1Teleop, branch2Teleop, branch3Teleop, branch4Teleop])}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 35,
                color: colorScheme.text,
                textAlign: "center",
              }}
            >
              ENDGAME
            </Text>
            <View
              style={{
                width: "100%",
                height: 3,
                backgroundColor: colorScheme.text,
              }}
            ></View>
            <Text style={{ fontSize: 28, color: colorScheme.text }}>
              Finish: {['NONE', 'PARKED', 'SHALLOW', 'DEEP'][finishState]}
            </Text>
          </View>
        </View>
        <View>
          <QRCode
            value={dataCode}
            size={300}
            color="black"
            backgroundColor="white"
            quietZone={10}
          />
          <View>
            <Text
              style={{
                fontSize: 35,
                color: colorScheme.text,
                textAlign: "center",
              }}
            >
              OVERALL
            </Text>
            <View
              style={{
                width: "100%",
                height: 3,
                backgroundColor: colorScheme.text,
              }}
            ></View>
            <Text style={{ fontSize: 30, color: colorScheme.text }}>
              Defense: {(playedDefense) ? 'YES' : 'NO'}
            </Text>
            <Text style={{ fontSize: 30, color: colorScheme.text, top: -10 }}>
              Ground Intake: {(offGroundIntake) ? 'YES' : 'NO'}
            </Text>
            <Text style={{ fontSize: 30, color: colorScheme.text, top: -20 }}>
              Foul(s): {(receivedFoul) ? 'YES' : 'NO'}
            </Text>
            <Text style={{ fontSize: 30, color: colorScheme.text, top: -30 }}>
              Net: {(scoredNet) ? 'YES' : 'NO'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
