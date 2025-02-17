import { Text, View, Pressable } from "react-native";

import colorScheme from "@/constants/colorScheme";
import Entypo from "@expo/vector-icons/Entypo";

export default function AutoContent ({
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
} : {
  coralAuto:any,
  setCoralAuto:any,
  coralAttAuto:any,
  setCoralAttAuto:any,
  algaeAuto:any,
  setAlgaeAuto:any,
  branch1Auto:any,
  setBranch1Auto:any,
  branch2Auto:any,
  setBranch2Auto:any,
  branch3Auto:any,
  setBranch3Auto:any,
  branch4Auto:any,
  setBranch4Auto:any,
  movedAuto:any,
  setMovedAuto:any,
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
                {coralAuto}
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
                {coralAttAuto}
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
                  setCoralAuto(coralAuto + 1);
                  setCoralAttAuto(coralAttAuto + 1);
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
                  if (coralAuto > 0) {
                    setCoralAuto(coralAuto - 1);
                    setCoralAttAuto(coralAttAuto - 1);
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
                onPress={() => setCoralAttAuto(coralAttAuto + 1)}
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
                  if (coralAttAuto > coralAuto) {
                    setCoralAttAuto(coralAttAuto - 1);
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
                {algaeAuto}
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
                onPress={() => setAlgaeAuto(algaeAuto + 1)}
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
                  if (algaeAuto > 0) {
                    setAlgaeAuto(algaeAuto - 1);
                  }
                }}
              >
                <Entypo name="minus" size={30} color={colorScheme.faded} />
              </Text>
            </View>
          </View>
        </View>
        {/* Moved? */}
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            gap: 5,
          }}
          onPress={() => setMovedAuto(!movedAuto)}
        >
          <View
            style={
              movedAuto
                ? {
                    width: 35,
                    height: 35,
                    borderWidth: 3,
                    borderColor: colorScheme.purple,
                    borderRadius: 8,
                    backgroundColor: colorScheme.purple,
                  }
                : {
                    width: 35,
                    height: 35,
                    borderWidth: 3,
                    borderColor: colorScheme.purple,
                    borderRadius: 8,
                  }
            }
          ></View>

          <Text style={{ color: colorScheme.text, fontSize: 35, top: -2 }}>
            Robot Moved
          </Text>
        </Pressable>
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
        {branch4Auto ? (
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
            onPress={() => setBranch4Auto(false)}
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
            onPress={() => setBranch4Auto(true)}
          >
            L4
          </Text>
        )}
        {branch3Auto ? (
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
            onPress={() => setBranch3Auto(false)}
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
            onPress={() => setBranch3Auto(true)}
          >
            L3
          </Text>
        )}

        {branch2Auto ? (
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
            onPress={() => setBranch2Auto(false)}
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
            onPress={() => setBranch2Auto(true)}
          >
            L2
          </Text>
        )}

        {branch1Auto ? (
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
            onPress={() => setBranch1Auto(false)}
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
            onPress={() => setBranch1Auto(true)}
          >
            L1
          </Text>
        )}
      </View>
    </View>
  );
}
