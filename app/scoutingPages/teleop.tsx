import { Text, View } from "react-native";

import colorScheme from "@/constants/colorScheme";
import Entypo from "@expo/vector-icons/Entypo";
import { game, sideInput } from "../styles/scoutingStyles";

export default function TeleopContent({
  coralTeleop,
  setCoralTeleop,
  coralAttTeleop,
  setCoralAttTeleop,
  algaeTeleop,
  setAlgaeTeleop,
  branch1Teleop,
  setBranch1Teleop,
  branch2Teleop,
  setBranch2Teleop,
  branch3Teleop,
  setBranch3Teleop,
  branch4Teleop,
  setBranch4Teleop,
}: {
  coralTeleop: any;
  setCoralTeleop: any;
  coralAttTeleop: any;
  setCoralAttTeleop: any;
  algaeTeleop: any;
  setAlgaeTeleop: any;
  branch1Teleop: any;
  setBranch1Teleop: any;
  branch2Teleop: any;
  setBranch2Teleop: any;
  branch3Teleop: any;
  setBranch3Teleop: any;
  branch4Teleop: any;
  setBranch4Teleop: any;
}) {
  return (
    <View style={game.container}>
      <View style={game.mainInputContainer}>
        {/* Coral */}
        <View style={game.inputSection}>
          <Text style={game.inputHeading}>CORAL</Text>
          <View style={game.amountDisplayContainer}>
            <Text style={game.amountDisplay}>{coralTeleop}</Text>
            <Text style={game.amountLabel}>SCORED</Text>
            <Text style={game.amountDisplay}>{coralAttTeleop}</Text>
            <Text style={game.amountLabelSmall}>ATTEMPTED</Text>
          </View>
          <View style={game.buttonContainer}>
            <Text
              style={game.buttonTextLarge}
              onPress={() => {
                setCoralTeleop(coralTeleop + 1);
                setCoralAttTeleop(coralAttTeleop + 1);
              }}
            >
              SCORE
            </Text>
            <Text
              style={game.buttonIconLarge}
              onPress={() => {
                if (coralTeleop > 0) {
                  setCoralTeleop(coralTeleop - 1);
                  setCoralAttTeleop(coralAttTeleop - 1);
                }
              }}
            >
              <Entypo name="minus" size={80} color={colorScheme.faded} />
            </Text>
          </View>
          <View style={game.buttonContainer}>
            <Text
              style={game.buttonTextSmall}
              onPress={() => setCoralAttTeleop(coralAttTeleop + 1)}
            >
              MISS
            </Text>
            <Text
              style={game.buttonIconSmall}
              onPress={() => {
                if (coralAttTeleop > coralTeleop) {
                  setCoralAttTeleop(coralAttTeleop - 1);
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
            <Text style={game.amountDisplay}>{algaeTeleop}</Text>
            <Text style={game.amountLabel}>SCORED</Text>
            <Text
              style={[
                game.buttonTextSmall,
                game.smallInputAdjustments,
                { borderColor: colorScheme.green, color: colorScheme.green },
              ]}
              onPress={() => setAlgaeTeleop(algaeTeleop + 1)}
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
                if (algaeTeleop > 0) {
                  setAlgaeTeleop(algaeTeleop - 1);
                }
              }}
            >
              <Entypo name="minus" size={50} color={colorScheme.faded} />
            </Text>
          </View>
        </View>
      </View>
      {/* Branches */}
      <View style={sideInput.container}>
        <Text
          style={[
            branch4Teleop ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
            sideInput.optionTop,
          ]}
          onPress={() => setBranch4Teleop(!branch4Teleop)}
        >
          L4
        </Text>
        <Text
          style={[
            branch3Teleop ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
          ]}
          onPress={() => setBranch3Teleop(!branch3Teleop)}
        >
          L3
        </Text>
        <Text
          style={[
            branch2Teleop ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
          ]}
          onPress={() => setBranch2Teleop(!branch2Teleop)}
        >
          L2
        </Text>
        <Text
          style={[
            branch1Teleop ? sideInput.enabled : sideInput.disabled,
            sideInput.option,
            sideInput.optionBottom,
          ]}
          onPress={() => setBranch1Teleop(!branch1Teleop)}
        >
          L1
        </Text>
      </View>
    </View>
  );
}
