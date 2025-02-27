import { Text, View, Pressable } from "react-native";

import colorScheme from "@/constants/colorScheme";
import Entypo from "@expo/vector-icons/Entypo";
import { game, other, sideInput } from "../styles/scoutingStyles";

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
    <View style={game.container}>
      <View style={game.mainInputContainer}>
        {/* Coral */}
        <View style={game.inputSection}>
          <Text style={game.inputHeading}>CORAL</Text>
          <View style={game.amountDisplayContainer}>
            <Text style={game.amountDisplay}>{coralAuto}</Text>
            <Text style={game.amountLabel}>SCORED</Text>
            <Text style={game.amountDisplay}>{coralAttAuto}</Text>
            <Text style={game.amountLabelSmall}>ATTEMPTED</Text>
          </View>
          <View style={game.buttonContainer}>
            <Text
              style={game.buttonTextLarge}
              onPress={() => {
                setCoralAuto(coralAuto + 1);
                setCoralAttAuto(coralAttAuto + 1);
              }}
            >
              SCORE
            </Text>
            <Text
              style={game.buttonIconLarge}
              onPress={() => {
                if (coralAuto > 0) {
                  setCoralAuto(coralAuto - 1);
                  setCoralAttAuto(coralAttAuto - 1);
                }
              }}
            >
              <Entypo name="minus" size={80} color={colorScheme.faded} />
            </Text>
          </View>
          <View style={game.buttonContainer}>
            <Text
              style={game.buttonTextSmall}
              onPress={() => setCoralAttAuto(coralAttAuto + 1)}
            >
              MISS
            </Text>
            <Text
              style={game.buttonIconSmall}
              onPress={() => {
                if (coralAttAuto > coralAuto) {
                  setCoralAttAuto(coralAttAuto - 1);
                }
              }}
            >
              <Entypo name="minus" size={50} color={colorScheme.faded} />
            </Text>
          </View>
        </View>
        {/* Algae */}
        <View style={game.inputSection}>
          <Text style={game.inputHeading}>ALGAE</Text>
          <View style={game.smallInput}>
            <Text style={game.amountDisplay}>{algaeAuto}</Text>
            <Text style={game.amountLabel}>SCORED</Text>
            <Text
              style={[
                game.buttonTextSmall,
                game.smallInputAdjustments,
                { borderColor: colorScheme.green, color: colorScheme.green },
              ]}
              onPress={() => setAlgaeAuto(algaeAuto + 1)}
            >
              SCORE
            </Text>
            <Text
              style={[
                game.buttonIconSmall,
                game.smallInputAdjustments,
                { marginLeft: 15 },
              ]}
              onPress={() => {
                if (algaeAuto > 0) {
                  setAlgaeAuto(algaeAuto - 1);
                }
              }}
            >
              <Entypo name="minus" size={50} color={colorScheme.faded} />
            </Text>
          </View>
        </View>
        {/* Moved? */}
        <Pressable
          style={other.checkBoxOption}
          onPress={() => setMovedAuto(!movedAuto)}
        >
          <View
            style={movedAuto ? other.checkBoxTrue : other.checkBoxFalse}
          ></View>

          <Text style={other.checkBoxText}>Robot Moved</Text>
        </Pressable>
      </View>

      {/* Branches */}
      <View style={sideInput.container}>
        <Text
          style={[
            branch4Auto ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
            sideInput.optionTop,
          ]}
          onPress={() => setBranch4Auto(!branch4Auto)}
        >
          L4
        </Text>
        <Text
          style={[
            branch3Auto ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
          ]}
          onPress={() => setBranch3Auto(!branch3Auto)}
        >
          L3
        </Text>
        <Text
          style={[
            branch2Auto ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
          ]}
          onPress={() => setBranch2Auto(!branch2Auto)}
        >
          L2
        </Text>
        <Text
          style={[
            branch1Auto ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
            sideInput.optionBottom,
          ]}
          onPress={() => setBranch1Auto(!branch1Auto)}
        >
          L1
        </Text>
      </View>
    </View>
  );
}
