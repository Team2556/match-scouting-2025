import { Text, View, Pressable } from "react-native";

import { useState } from "react";

import colorScheme from "@/constants/colorScheme";
import Entypo from "@expo/vector-icons/Entypo";

export default function OverallContent({
  finishState,
  setFinishState,
  playedDefense,
  setPlayedDefense,
  offGroundIntake,
  setOffGroudIntake,
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
  setOffGroudIntake: any;
  receivedFoul: any;
  setReceivedFoul: any;
  scoredNet: any;
  setScoredNet: any;
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
        {/* Played Defense */}
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            gap: 5,
          }}
          onPress={() => setPlayedDefense(!playedDefense)}
        >
          <View
            style={
              playedDefense
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
            Played Defense
          </Text>
        </Pressable>
        {/* Off-Ground Intake */}
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            gap: 5,
          }}
          onPress={() => setOffGroudIntake(!offGroundIntake)}
        >
          <View
            style={
              offGroundIntake
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
            Off-Ground Intake
          </Text>
        </Pressable>
        {/* Recieved Fouls */}
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            gap: 5,
          }}
          onPress={() => setReceivedFoul(!receivedFoul)}
        >
          <View
            style={
              receivedFoul
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
            Recieved Foul(s)
          </Text>
        </Pressable>
        {/* Scored in Net */}
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            gap: 5,
          }}
          onPress={() => setScoredNet(!scoredNet)}
        >
          <View
            style={
              scoredNet
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
            Scored in Net
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
        <Text
          style={
            finishState == 3
              ? {
                  color: colorScheme.text,
                  width: 130,
                  height: 130,
                  fontSize: 90,
                  borderWidth: 4,
                  borderColor: colorScheme.purple,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  backgroundColor: colorScheme.purple,
                  textAlign: "center",
                }
              : {
                  color: colorScheme.text,
                  width: 130,
                  height: 130,
                  fontSize: 90,
                  borderWidth: 4,
                  borderColor: colorScheme.purple,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  textAlign: "center",
                }
          }
          onPress={() => setFinishState(3)}
        >
          D
        </Text>
        <Text
          style={
            finishState == 2
              ? {
                  color: colorScheme.text,
                  width: 130,
                  height: 130,
                  fontSize: 90,
                  borderWidth: 4,
                  borderColor: colorScheme.purple,
                  backgroundColor: colorScheme.purple,
                  textAlign: "center",
                }
              : {
                  color: colorScheme.text,
                  width: 130,
                  height: 130,
                  fontSize: 90,
                  borderWidth: 4,
                  borderColor: colorScheme.purple,
                  textAlign: "center",
                }
          }
          onPress={() => setFinishState(2)}
        >
          S
        </Text>
        <Text
          style={
            finishState == 1
              ? {
                  color: colorScheme.text,
                  width: 130,
                  height: 130,
                  fontSize: 90,
                  borderWidth: 4,
                  borderColor: colorScheme.purple,
                  backgroundColor: colorScheme.purple,
                  textAlign: "center",
                }
              : {
                  color: colorScheme.text,
                  width: 130,
                  height: 130,
                  fontSize: 90,
                  borderWidth: 4,
                  borderColor: colorScheme.purple,
                  textAlign: "center",
                }
          }
          onPress={() => setFinishState(1)}
        >
          P
        </Text>
        <Text
          style={
            finishState == 0
              ? {
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
                }
              : {
                  color: colorScheme.text,
                  width: 130,
                  height: 130,
                  fontSize: 90,
                  borderWidth: 4,
                  borderColor: colorScheme.purple,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  textAlign: "center",
                }
          }
          onPress={() => setFinishState(0)}
        >
          N
        </Text>
      </View>
    </View>
  );
}
