import colorScheme from "@/constants/colorScheme";
import { Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { overview } from "../styles/scoutingStyles";

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
      if (branchesUsed != "") branchesUsed += ", ";
      branchesUsed += String(parseInt(i) + 1);
    }
    return branchesUsed ? branchesUsed : "NONE";
  };

  return (
    <View style={overview.container}>
      <View style={[overview.column, { width: "40%" }]}>
        <View>
          <Text style={overview.heading}>AUTO</Text>
          <View style={overview.hr}></View>
          <Text style={overview.text}>
            Coral: {coralAuto}/{coralAttAuto}
          </Text>
          <Text style={overview.text}>Algae: {algaeAuto}</Text>
          <Text style={overview.text}>
            Level:{" "}
            {generateBranchText([
              branch1Auto,
              branch2Auto,
              branch3Auto,
              branch4Auto,
            ])}
          </Text>
          <Text style={overview.text}>Moved: {movedAuto ? "YES" : "NO"}</Text>
        </View>
        <View>
          <Text
            style={overview.heading}
          >
            TELEOP
          </Text>
          <View
            style={overview.hr}
          ></View>
          <Text style={overview.text}>
            Coral: {coralTeleop}/{coralAttTeleop}
          </Text>
          <Text style={overview.text}>
            Algae: {algaeTeleop}
          </Text>
          <Text style={overview.text}>
            Level:{" "}
            {generateBranchText([
              branch1Teleop,
              branch2Teleop,
              branch3Teleop,
              branch4Teleop,
            ])}
          </Text>
        </View>
        <View>
          <Text
            style={overview.heading}
          >
            ENDGAME
          </Text>
          <View
            style={overview.hr}
          ></View>
          <Text style={overview.text}>
            Finish: {["NONE", "PARKED", "SHALLOW", "DEEP"][finishState]}
          </Text>
        </View>
      </View>
      <View style={overview.column}>
        <QRCode
          value={dataCode}
          size={450}
          color="black"
          backgroundColor="white"
          quietZone={10}
        />
        <View>
          <Text
            style={overview.heading}
          >
            OVERALL
          </Text>
          <View
            style={overview.hr}
          ></View>
          <Text style={overview.text}>
            Defense: {playedDefense ? "YES" : "NO"}
          </Text>
          <Text style={overview.text}>
            Ground Intake: {offGroundIntake ? "YES" : "NO"}
          </Text>
          <Text style={overview.text}>
            Foul(s): {receivedFoul ? "YES" : "NO"}
          </Text>
          <Text style={overview.text}>
            Net: {scoredNet ? "YES" : "NO"}
          </Text>
        </View>
      </View>
    </View>
  );
}
