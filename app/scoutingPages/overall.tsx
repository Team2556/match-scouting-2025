import { Text, View, Pressable } from "react-native";

import colorScheme from "@/constants/colorScheme";
import { game, other, sideInput } from "../styles/scoutingStyles";

export default function OverallContent({
  finishState,
  setFinishState,
  playedDefense,
  setPlayedDefense,
  offGroundIntake,
  setOffGroundIntake,
  receivedFoul,
  setReceivedFoul,
  scoredNet,
  setScoredNet,
}: {
  finishState: any;
  setFinishState: any;
  playedDefense: any;
  setPlayedDefense: any;
  offGroundIntake: any;
  setOffGroundIntake: any;
  receivedFoul: any;
  setReceivedFoul: any;
  scoredNet: any;
  setScoredNet: any;
}) {
  return (
    <View style={game.container}>
      <View style={{ width: "75%" }}>
        {/* Played Defense */}
        <Pressable
          style={other.checkBoxOption}
          onPress={() => setPlayedDefense(!playedDefense)}
        >
          <View
            style={playedDefense ? other.checkBoxTrue : other.checkBoxFalse}
          ></View>

          <Text style={other.checkBoxText}>Played Defense</Text>
        </Pressable>
        {/* Off-Ground Intake */}
        <Pressable
          style={other.checkBoxOption}
          onPress={() => setOffGroundIntake(!offGroundIntake)}
        >
          <View
            style={offGroundIntake ? other.checkBoxTrue : other.checkBoxFalse}
          ></View>

          <Text style={other.checkBoxText}>Off-Ground Intake</Text>
        </Pressable>
        {/* Recieved Fouls */}
        <Pressable
          style={other.checkBoxOption}
          onPress={() => setReceivedFoul(!receivedFoul)}
        >
          <View
            style={receivedFoul ? other.checkBoxTrue : other.checkBoxFalse}
          ></View>

          <Text style={other.checkBoxText}>Recieved Foul(s)</Text>
        </Pressable>
        {/* Scored in Net */}
        <Pressable
          style={other.checkBoxOption}
          onPress={() => setScoredNet(!scoredNet)}
        >
          <View
            style={scoredNet ? other.checkBoxTrue : other.checkBoxFalse}
          ></View>

          <Text style={other.checkBoxText}>Scored in Net</Text>
        </Pressable>
      </View>
      <View style={sideInput.container}>
        <Text
          style={[
            finishState == 3 ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
            sideInput.optionTop,
          ]}
          onPress={() => setFinishState(3)}
        >
          D
        </Text>
        <Text
          style={[
            finishState == 2 ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
          ]}
          onPress={() => setFinishState(2)}
        >
          S
        </Text>
        <Text
          style={[
            finishState == 1 ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
          ]}
          onPress={() => setFinishState(1)}
        >
          P
        </Text>
        <Text
          style={[
            finishState == 0 ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
            sideInput.optionBottom,
          ]}
          onPress={() => setFinishState(0)}
        >
          N
        </Text>
      </View>
    </View>
  );
}
