import { Text, View, Pressable } from "react-native";

import colorScheme from "@/constants/colorScheme";
import Entypo from "@expo/vector-icons/Entypo";
import {
  border,
  button,
  checkbox,
  input,
  sidebar,
} from "../styles/scoutingStyles";
import { text } from "../styles/styles";
import { scale } from "react-native-size-matters";

export default function AutoContent({
  coralAuto,
  setCoralAuto,
  coralAttAuto,
  setCoralAttAuto,
  algaeAuto,
  setAlgaeAuto,
  branch1Auto,
  setBranch1Auto,
  branch2Auto,
  setBranch2Auto,
  branch3Auto,
  setBranch3Auto,
  branch4Auto,
  setBranch4Auto,
  movedAuto,
  setMovedAuto,
}: {
  coralAuto: any;
  setCoralAuto: any;
  coralAttAuto: any;
  setCoralAttAuto: any;
  algaeAuto: any;
  setAlgaeAuto: any;
  branch1Auto: any;
  setBranch1Auto: any;
  branch2Auto: any;
  setBranch2Auto: any;
  branch3Auto: any;
  setBranch3Auto: any;
  branch4Auto: any;
  setBranch4Auto: any;
  movedAuto: any;
  setMovedAuto: any;
}) {
  return (
    <View style={input.container}>
      <View style={input.main}>
        {/* Coral */}
        <View style={[input.section, border.default]}>
          <Text style={input.sectionLabel}>CORAL</Text>
          <View style={input.largeRow}>
            <Text style={input.amount}>{coralAuto}</Text>
            <Text style={input.amountLabelBig}>SCORED</Text>
            <Text style={input.amount}>{coralAttAuto}</Text>
            <Text style={input.amountLabelSmall}>ATTEMPTED</Text>
          </View>
          <View style={input.largeRow}>
            <Text
              style={[button.large, button.green]}
              onPress={() => {
                setCoralAuto(coralAuto + 1);
                setCoralAttAuto(coralAttAuto + 1);
              }}
            >
              SCORE
            </Text>
            <Text
              style={button.gray}
              onPress={() => {
                if (coralAuto > 0) {
                  setCoralAuto(coralAuto - 1);
                  setCoralAttAuto(coralAttAuto - 1);
                }
              }}
            >
              <Entypo name="minus" size={scale(55)} color={colorScheme.faded} />
            </Text>
          </View>
          <View style={input.smallRow}>
            <Text
              style={[button.small, button.red]}
              onPress={() => setCoralAttAuto(coralAttAuto + 1)}
            >
              MISS
            </Text>
            <Text
              style={button.gray}
              onPress={() => {
                if (coralAttAuto > coralAuto) {
                  setCoralAttAuto(coralAttAuto - 1);
                }
              }}
            >
              <Entypo name="minus" size={scale(35)} color={colorScheme.faded} />
            </Text>
          </View>
        </View>
        {/* Algae */}
        <View style={[input.section, border.default]}>
          <Text style={input.sectionLabel}>ALGAE</Text>
          <View style={input.oneRow}>
            <Text style={input.amount}>{algaeAuto}</Text>
            <Text style={input.amountLabelBig}>SCORED</Text>
            <Text
              style={[button.medium, button.green, { paddingTop: scale(8) }]}
              onPress={() => setAlgaeAuto(algaeAuto + 1)}
            >
              SCORE
            </Text>
            <Text
              style={[button.gray]}
              onPress={() => {
                if (algaeAuto > 0) {
                  setAlgaeAuto(algaeAuto - 1);
                }
              }}
            >
              <Entypo name="minus" size={scale(45)} color={colorScheme.faded} />
            </Text>
          </View>
        </View>
        {/* Moved? */}
        <Pressable
          style={checkbox.container}
          onPress={() => setMovedAuto(!movedAuto)}
        >
          <View style={movedAuto ? checkbox.true : checkbox.false}></View>

          <Text style={checkbox.text}>Robot Moved</Text>
        </Pressable>
      </View>

      {/* Branches */}
      <View style={sidebar.container}>
        <Text
          style={[
            branch4Auto ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
            sidebar.buttonTop,
          ]}
          onPress={() => setBranch4Auto(!branch4Auto)}
        >
          L4
        </Text>
        <Text
          style={[
            branch3Auto ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
          ]}
          onPress={() => setBranch3Auto(!branch3Auto)}
        >
          L3
        </Text>
        <Text
          style={[
            branch2Auto ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
          ]}
          onPress={() => setBranch2Auto(!branch2Auto)}
        >
          L2
        </Text>
        <Text
          style={[
            branch1Auto ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
            sidebar.buttonBottom,
          ]}
          onPress={() => setBranch1Auto(!branch1Auto)}
        >
          L1
        </Text>
      </View>
    </View>
  );
}
