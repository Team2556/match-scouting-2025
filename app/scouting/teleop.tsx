import { Text, View } from "react-native";

import colorScheme from "@/constants/colorScheme";
import Entypo from "@expo/vector-icons/Entypo";

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
    <View
      style={{
        height: "100%",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between",
      }}
    >
      <View style={{ width: "70%" }}>
        {/* Coral */}
        <View
          style={{
            borderWidth: 3,
            borderColor: colorScheme.text,
            borderRadius: 8,
            marginTop: 10,
            padding: 10,
            paddingTop: 0,
          }}
        >
          <Text
            style={{
              color: colorScheme.text,
              position: "absolute",
              left: 40,
              top: -20,
              fontSize: 20,
              width: 80,
              textAlign: "center",
              padding: 5,
              backgroundColor: colorScheme.background,
            }}
          >
            CORAL
          </Text>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: colorScheme.text,
                  fontSize: 80,
                  textAlign: "right",
                  width: 100,
                  top: -5,
                }}
              >
                {coralTeleop}
              </Text>
              <Text
                style={{
                  color: colorScheme.text,
                  fontSize: 18,
                  width: "auto",
                  height: 30,
                  transform: "rotateZ(-90deg)",
                  left: -20,
                }}
              >
                SCORED
              </Text>
              <Text
                style={{
                  color: colorScheme.text,
                  fontSize: 80,
                  textAlign: "right",
                  width: 100,
                  top: -5,
                }}
              >
                {coralAttTeleop}
              </Text>
              <Text
                style={{
                  color: colorScheme.text,
                  fontSize: 13,
                  width: "auto",
                  height: 30,
                  transform: "rotateZ(-90deg)",
                  left: -20,
                }}
              >
                ATTEMPTED
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text
                style={{
                  color: colorScheme.green,
                  fontSize: 50,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 5,
                  borderWidth: 3,
                  borderColor: colorScheme.green,
                  borderRadius: 8,
                }}
                onPress={() => {
                  setCoralTeleop(coralTeleop + 1);
                  setCoralAttTeleop(coralAttTeleop + 1);
                }}
              >
                SCORE
              </Text>
              <Text
                style={{
                  color: colorScheme.faded,
                  fontSize: 50,
                  paddingLeft: 11,
                  paddingRight: 11,
                  paddingBottom: 5,
                  borderWidth: 3,
                  borderColor: colorScheme.faded,
                  borderRadius: 8,
                }}
                onPress={() => {
                  if (coralTeleop > 0) {
                    setCoralTeleop(coralTeleop - 1);
                    setCoralAttTeleop(coralAttTeleop - 1);
                  }
                }}
              >
                <Entypo name="minus" size={50} color={colorScheme.faded} />
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text
                style={{
                  color: colorScheme.red,
                  fontSize: 30,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 5,
                  borderWidth: 3,
                  borderColor: colorScheme.red,
                  borderRadius: 8,
                }}
                onPress={() => setCoralAttTeleop(coralAttTeleop + 1)}
              >
                MISS
              </Text>
              <Text
                style={{
                  color: colorScheme.faded,
                  fontSize: 30,
                  paddingLeft: 7.5,
                  paddingRight: 7.5,
                  paddingBottom: 5,
                  borderWidth: 3,
                  borderColor: colorScheme.faded,
                  borderRadius: 8,
                }}
                onPress={() => {
                  if (coralAttTeleop > coralTeleop) {
                    setCoralAttTeleop(coralAttTeleop - 1);
                  }
                }}
              >
                <Entypo name="minus" size={30} color={colorScheme.faded} />
              </Text>
            </View>
          </View>
        </View>
        {/* Algae */}
        <View
          style={{
            borderWidth: 3,
            borderColor: colorScheme.text,
            borderRadius: 8,
            marginTop: 25,
            padding: 10,
            paddingTop: 0,
          }}
        >
          <Text
            style={{
              color: colorScheme.text,
              position: "absolute",
              left: 40,
              top: -20,
              fontSize: 20,
              width: 80,
              textAlign: "center",
              padding: 5,
              backgroundColor: colorScheme.background,
            }}
          >
            ALGAE
          </Text>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: 15,
                height: 90,
              }}
            >
              <Text
                style={{
                  color: colorScheme.text,
                  fontSize: 80,
                  textAlign: "right",
                  width: 87,
                  top: -5,
                }}
              >
                {algaeTeleop}
              </Text>
              <Text
                style={{
                  color: colorScheme.text,
                  fontSize: 18,
                  width: "auto",
                  height: 10,
                  transform: "rotateZ(-90deg)",
                  left: -30,
                }}
              >
                SCORED
              </Text>
              <Text
                style={{
                  color: colorScheme.green,
                  fontSize: 30,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 5,
                  borderWidth: 3,
                  borderColor: colorScheme.green,
                  borderRadius: 8,
                  left: -10,
                }}
                onPress={() => setAlgaeTeleop(algaeTeleop + 1)}
              >
                SCORE
              </Text>
              <Text
                style={{
                  color: colorScheme.faded,
                  fontSize: 30,
                  paddingLeft: 7.5,
                  paddingRight: 7.5,
                  paddingBottom: 5,
                  borderWidth: 3,
                  borderColor: colorScheme.faded,
                  borderRadius: 8,
                }}
                onPress={() => {
                  if (algaeTeleop > 0) {
                    setAlgaeTeleop(algaeTeleop - 1);
                  }
                }}
              >
                <Entypo name="minus" size={30} color={colorScheme.faded} />
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Branches */}
      <View
        style={{
          width: "30%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 15,
          paddingTop: 10,
        }}
      >
        {branch4Teleop ? (
          <Text
            style={{
              color: colorScheme.text,
              width: 130,
              height: 130,
              fontSize: 90,
              borderWidth: 5,
              borderColor: colorScheme.purple,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              backgroundColor: colorScheme.purple,
              textAlign: "center",
            }}
            onPress={() => setBranch4Teleop(false)}
          >
            L4
          </Text>
        ) : (
          <Text
            style={{
              color: colorScheme.text,
              width: 130,
              height: 130,
              fontSize: 90,
              borderWidth: 5,
              borderColor: colorScheme.purple,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              textAlign: "center",
            }}
            onPress={() => setBranch4Teleop(true)}
          >
            L4
          </Text>
        )}
        {branch3Teleop ? (
          <Text
            style={{
              color: colorScheme.text,
              width: 130,
              height: 130,
              fontSize: 90,
              borderWidth: 4,
              borderColor: colorScheme.purple,
              backgroundColor: colorScheme.purple,
              textAlign: "center",
            }}
            onPress={() => setBranch3Teleop(false)}
          >
            L3
          </Text>
        ) : (
          <Text
            style={{
              color: colorScheme.text,
              width: 130,
              height: 130,
              fontSize: 90,
              borderWidth: 4,
              borderColor: colorScheme.purple,
              // backgroundColor: colorScheme.purple,
              textAlign: "center",
            }}
            onPress={() => setBranch3Teleop(true)}
          >
            L3
          </Text>
        )}

        {branch2Teleop ? (
          <Text
            style={{
              color: colorScheme.text,
              width: 130,
              height: 130,
              fontSize: 90,
              borderWidth: 4,
              borderColor: colorScheme.purple,
              textAlign: "center",
              backgroundColor: colorScheme.purple,
            }}
            onPress={() => setBranch2Teleop(false)}
          >
            L2
          </Text>
        ) : (
          <Text
            style={{
              color: colorScheme.text,
              width: 130,
              height: 130,
              fontSize: 90,
              borderWidth: 4,
              borderColor: colorScheme.purple,
              textAlign: "center",
            }}
            onPress={() => setBranch2Teleop(true)}
          >
            L2
          </Text>
        )}

        {branch1Teleop ? (
          <Text
            style={{
              color: colorScheme.text,
              width: 130,
              height: 130,
              fontSize: 90,
              borderWidth: 4,
              borderColor: colorScheme.purple,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              backgroundColor: colorScheme.purple,
              textAlign: "center",
            }}
            onPress={() => setBranch1Teleop(false)}
          >
            L1
          </Text>
        ) : (
          <Text
            style={{
              color: colorScheme.text,
              width: 130,
              height: 130,
              fontSize: 90,
              borderWidth: 4,
              borderColor: colorScheme.purple,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              textAlign: "center",
            }}
            onPress={() => setBranch1Teleop(true)}
          >
            L1
          </Text>
        )}
      </View>
    </View>
  );
}
