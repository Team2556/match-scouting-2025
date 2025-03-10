import { Text, View } from "react-native";

import colorScheme from "@/constants/colorScheme";
import Entypo from "@expo/vector-icons/Entypo";
import { border, button, input, sidebar } from "../styles/scoutingStyles";
import { scale } from "react-native-size-matters";

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
    <View style={input.container}>
      <View style={input.main}>
        {/* Coral */}
        <View style={[input.section, border.default]}>
          <Text style={input.sectionLabel}>CORAL</Text>
          <View style={input.largeRow}>
            <Text style={input.amount}>{coralTeleop}</Text>
            <Text style={input.amountLabelBig}>SCORED</Text>
            <Text style={input.amount}>{coralAttTeleop}</Text>
            <Text style={input.amountLabelSmall}>ATTEMPTED</Text>
          </View>
          <View style={input.largeRow}>
            <Text
              style={[button.large, button.green]}
              onPress={() => {
                setCoralTeleop(coralTeleop + 1);
                setCoralAttTeleop(coralAttTeleop + 1);
              }}
            >
              SCORE
            </Text>
            <Text
              style={button.gray}
              onPress={() => {
                if (coralTeleop > 0) {
                  setCoralTeleop(coralTeleop - 1);
                  setCoralAttTeleop(coralAttTeleop - 1);
                }
              }}
            >
              <Entypo name="minus" size={scale(55)} color={colorScheme.faded} />
            </Text>
          </View>
          <View style={input.smallRow}>
            <Text
              style={[button.small, button.red]}
              onPress={() => setCoralAttTeleop(coralAttTeleop + 1)}
            >
              MISS
            </Text>
            <Text
              style={button.gray}
              onPress={() => {
                if (coralAttTeleop > coralTeleop) {
                  setCoralAttTeleop(coralAttTeleop - 1);
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
          <View style={input.largeRow}>
            <Text style={input.amount}>{algaeTeleop}</Text>
            <Text style={input.amountLabelBig}>SCORED</Text>
            <Text
              style={[button.medium, button.green, { paddingTop: scale(8) }]}
              onPress={() => setAlgaeTeleop(algaeTeleop + 1)}
            >
              SCORE
            </Text>
            <Text
              style={[button.gray]}
              onPress={() => {
                if (algaeTeleop > 0) {
                  setAlgaeTeleop(algaeTeleop - 1);
                }
              }}
            >
              <Entypo name="minus" size={scale(45)} color={colorScheme.faded} />
            </Text>
          </View>
        </View>
      </View>
      {/* Branches */}
      <View style={sidebar.container}>
        <Text
          style={[
            branch4Teleop ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
            sidebar.buttonTop,
          ]}
          onPress={() => setBranch4Teleop(!branch4Teleop)}
        >
          L4
        </Text>
        <Text
          style={[
            branch3Teleop ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
          ]}
          onPress={() => setBranch3Teleop(!branch3Teleop)}
        >
          L3
        </Text>
        <Text
          style={[
            branch2Teleop ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
          ]}
          onPress={() => setBranch2Teleop(!branch2Teleop)}
        >
          L2
        </Text>
        <Text
          style={[
            branch1Teleop ? sidebar.enabled : sidebar.disabled,
            sidebar.button,
            sidebar.buttonBottom,
          ]}
          onPress={() => setBranch1Teleop(!branch1Teleop)}
        >
          L1
        </Text>
      </View>
    </View>
  );
}
