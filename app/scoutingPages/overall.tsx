import { Text, View, Pressable } from "react-native";

import colorScheme from "@/constants/colorScheme";
import { checkbox, input, sidebar } from "../styles/scoutingStyles";

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
    <View style={input.container}>
      <View style={input.main}>
        {/* Played Defense */}
        <Pressable
          style={checkbox.container}
          onPress={() => setPlayedDefense(!playedDefense)}
        >
          <View
            style={playedDefense ? checkbox.true : checkbox.false}
          ></View>

          <Text style={checkbox.text}>Played Defense</Text>
        </Pressable>
        {/* Off-Ground Intake */}
        <Pressable
          style={checkbox.container}
          onPress={() => setOffGroundIntake(!offGroundIntake)}
        >
          <View
            style={offGroundIntake ? checkbox.true : checkbox.false}
          ></View>

          <Text style={checkbox.text}>Off-Ground Intake</Text>
        </Pressable>
        {/* Recieved Fouls */}
        <Pressable
          style={checkbox.container}
          onPress={() => setReceivedFoul(!receivedFoul)}
        >
          <View
            style={receivedFoul ? checkbox.true : checkbox.false}
          ></View>

          <Text style={checkbox.text}>Recieved Foul(s)</Text>
        </Pressable>
        {/* Scored in Net */}
        <Pressable
          style={checkbox.container}
          onPress={() => setScoredNet(!scoredNet)}
        >
          <View
            style={scoredNet ? checkbox.true : checkbox.false}
          ></View>

          <Text style={checkbox.text}>Scored in Net</Text>
        </Pressable>
      </View>
      <View style={sidebar.container}>
        <Text
          style={[
            finishState == 3 ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
            sidebar.buttonTop,
          ]}
          onPress={() => setFinishState(3)}
        >
          D
        </Text>
        <Text
          style={[
            finishState == 2 ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
          ]}
          onPress={() => setFinishState(2)}
        >
          S
        </Text>
        <Text
          style={[
            finishState == 1 ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
          ]}
          onPress={() => setFinishState(1)}
        >
          P
        </Text>
        <Text
          style={[
            finishState == 0 ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
            sidebar.buttonBottom,
          ]}
          onPress={() => setFinishState(0)}
        >
          N
        </Text>
      </View>
    </View>
  );
}
