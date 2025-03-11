import { View, Text, Pressable } from "react-native";

import { HomeDisplayType } from "@/scripts/types";
import { matchStyle } from "../styles/analytics/overview";

const OverViewMatch = ({ match }: { match: HomeDisplayType }) => {
  return (
    <Pressable
      style={matchStyle.container}
      onPress={() => alert("Match: " + match.match)}
    >
      <Text style={matchStyle.title}>Match: {match.match}</Text>
      <View style={matchStyle.posRow}>
        <View style={matchStyle.posContainer}>
          <View
            style={
              match.posScouted[0] ? matchStyle.blueFill : matchStyle.blueOutline
            }
          ></View>
          <Text style={[matchStyle.posLabel, matchStyle.blueText]}>B1</Text>
        </View>
        <View style={matchStyle.posContainer}>
          <View
            style={
              match.posScouted[1] ? matchStyle.blueFill : matchStyle.blueOutline
            }
          ></View>
          <Text style={[matchStyle.posLabel, matchStyle.blueText]}>B2</Text>
        </View>
        <View style={matchStyle.posContainer}>
          <View
            style={
              match.posScouted[2] ? matchStyle.blueFill : matchStyle.blueOutline
            }
          ></View>
          <Text style={[matchStyle.posLabel, matchStyle.blueText]}>B3</Text>
        </View>
      </View>
      <View style={matchStyle.posRow}>
        <View style={matchStyle.posContainer}>
          <View
            style={
              match.posScouted[3] ? matchStyle.redFill : matchStyle.redOutline
            }
          ></View>
          <Text style={[matchStyle.posLabel, matchStyle.redText]}>R1</Text>
        </View>
        <View style={matchStyle.posContainer}>
          <View
            style={
              match.posScouted[4] ? matchStyle.redFill : matchStyle.redOutline
            }
          ></View>
          <Text style={[matchStyle.posLabel, matchStyle.redText]}>R2</Text>
        </View>
        <View style={matchStyle.posContainer}>
          <View
            style={
              match.posScouted[5] ? matchStyle.redFill : matchStyle.redOutline
            }
          ></View>
          <Text style={[matchStyle.posLabel, matchStyle.redText]}>R3</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default OverViewMatch;
