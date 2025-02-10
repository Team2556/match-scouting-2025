import { Pressable, Text, View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";

import TeleopContent from "./scouting/teleop";
import AutoContent from "./scouting/auto";

import colorScheme from "@/constants/colorScheme";
import { useState } from "react";
import OverallContent from "./scouting/overall";

export default function Index() {
  // Auto Information
  const [coralAuto, setCoralAuto] = useState(0);
  const [coralAttAuto, setCoralAttAuto] = useState(0);
  const [algaeAuto, setAlgaeAuto] = useState(0);
  const [branch1Auto, setBranch1Auto] = useState(false);
  const [branch2Auto, setBranch2Auto] = useState(false);
  const [branch3Auto, setBranch3Auto] = useState(false);
  const [branch4Auto, setBranch4Auto] = useState(false);
  const [movedAuto, setMovedAuto] = useState(false);

  // Teleop Information
  const [coralTeleop, setCoralTeleop] = useState(0);
  const [coralAttTeleop, setCoralAttTeleop] = useState(0);
  const [algaeTeleop, setAlgaeTeleop] = useState(0);
  const [branch1Teleop, setBranch1Teleop] = useState(false);
  const [branch2Teleop, setBranch2Teleop] = useState(false);
  const [branch3Teleop, setBranch3Teleop] = useState(false);
  const [branch4Teleop, setBranch4Teleop] = useState(false);

  // Overall Information
  const [finishState, setFinishState] = useState(0);
  const [playedDefense, setPlayedDefense] = useState(false);
  const [offGroundIntake, setOffGroudIntake] = useState(false);
  const [receivedFoul, setReceivedFoul] = useState(false);
  const [scoredNet, setScoredNet] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  const pageName = [
    "INFORMATION",
    "AUTONOUMOUS",
    "TELEOPERATED",
    "ENGAME",
    "QR CODE",
  ];
  const pageNameAbr = ["INFO", "AUTO", "TELEOP", "END", "QR"];

  const nextPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: colorScheme.background,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "75%",
            height: "100%",
          }}
        >
          {/* AUTO */}
          <View
            style={currentPage == 1 ? { display: "flex" } : { display: "none" }}
          >
            <AutoContent
              coralAuto={coralAuto}
              setCoralAuto={setCoralAuto}
              coralAttAuto={coralAttAuto}
              setCoralAttAuto={setCoralAttAuto}
              algaeAuto={algaeAuto}
              setAlgaeAuto={setAlgaeAuto}
              branch1Auto={branch1Auto}
              setBranch1Auto={setBranch1Auto}
              branch2Auto={branch2Auto}
              setBranch2Auto={setBranch2Auto}
              branch3Auto={branch3Auto}
              setBranch3Auto={setBranch3Auto}
              branch4Auto={branch4Auto}
              setBranch4Auto={setBranch4Auto}
              movedAuto={movedAuto}
              setMovedAuto={setMovedAuto}
            />
          </View>
          {/* TELEOP */}
          <View
            style={currentPage == 2 ? { display: "flex" } : { display: "none" }}
          >
            <TeleopContent
              coralTeleop={coralTeleop}
              setCoralTeleop={setCoralTeleop}
              coralAttTeleop={coralAttTeleop}
              setCoralAttTeleop={setCoralAttTeleop}
              algaeTeleop={algaeTeleop}
              setAlgaeTeleop={setAlgaeTeleop}
              branch1Teleop={branch1Teleop}
              setBranch1Teleop={setBranch1Teleop}
              branch2Teleop={branch4Teleop}
              setBranch2Teleop={setBranch2Teleop}
              branch3Teleop={branch3Teleop}
              setBranch3Teleop={setBranch3Teleop}
              branch4Teleop={branch4Teleop}
              setBranch4Teleop={setBranch4Teleop}
            />
          </View>
          {/* OVERALL */}
          <View
            style={currentPage == 3 ? { display: "flex" } : { display: "none" }}
          >
            <OverallContent
              finishState={finishState}
              setFinishState={setFinishState}
              playedDefense={playedDefense}
              setPlayedDefense={setPlayedDefense}
              offGroundIntake={offGroundIntake}
              setOffGroudIntake={offGroundIntake}
              receivedFoul={receivedFoul}
              setReceivedFoul={setReceivedFoul}
              scoredNet={scoredNet}
              setScoredNet={setScoredNet}
            />
          </View>
        </View>

        {/* Side Bar */}
        <View
          style={{
            width: "25%",
            paddingTop: 15,
            paddingBottom: 15,
            left: -10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Match */}
          {currentPage == 0 ? (
            <View></View>
          ) : (
            <View>
              <Text style={{ fontSize: 35, color: colorScheme.text }}>
                Match: 12
              </Text>
              <Text style={{ fontSize: 20, color: colorScheme.text, top: -5 }}>
                Chase Robbins
              </Text>
            </View>
          )}

          {/* Team */}
          {currentPage != 0 && (
            <View>
              <Text
                style={{
                  fontSize: 35,
                  color: colorScheme.text,
                  textAlign: "center",
                }}
              >
                SCOUTING
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 5,
                  backgroundColor: colorScheme.text,
                }}
              ></View>
              <Text style={{ fontSize: 30, color: colorScheme.text }}>
                #2557
              </Text>
              <Text style={{ fontSize: 30, color: colorScheme.text, top: -10 }}>
                Blue 1
              </Text>
            </View>
          )}

          {/* Nav */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              bottom: -10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: colorScheme.text,
                textAlign: "center",
                top: 5,
              }}
            >
              {pageName[currentPage]}
            </Text>
            {currentPage != 0 && (
              <Pressable
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 3,
                  borderRadius: 8,
                  borderColor: colorScheme.text,
                }}
                onPress={() => prevPage()}
              >
                <Feather name="arrow-left" size={40} color={colorScheme.text} />
                <Text
                  style={{ color: colorScheme.text, fontSize: 40, top: -2 }}
                >
                  {pageNameAbr[currentPage - 1]}
                </Text>
              </Pressable>
            )}
            {currentPage == 4 ? (
              <Pressable
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 3,
                  borderRadius: 8,
                  borderColor: colorScheme.green,
                }}
              >
                <Text
                  style={{ color: colorScheme.green, fontSize: 40, top: -2 }}
                >
                  SAVE
                </Text>
              </Pressable>
            ) : (
              <Pressable
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 3,
                  borderRadius: 8,
                  borderColor: colorScheme.text,
                }}
                onPress={() => nextPage()}
              >
                <Text
                  style={{ color: colorScheme.text, fontSize: 40, top: -2 }}
                >
                  {pageNameAbr[currentPage + 1]}
                </Text>
                <Feather
                  name="arrow-right"
                  size={40}
                  color={colorScheme.text}
                />
              </Pressable>
            )}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-around",
                alignItems: "center",
                paddingLeft: 20,
                paddingRight: 20,
                top: -5,
              }}
            >
              <Octicons
                name="dot-fill"
                size={40}
                color={currentPage == 0 ? colorScheme.text : colorScheme.faded}
                onPress={() => setCurrentPage(0)}
              />
              <Octicons
                name="dot-fill"
                size={40}
                color={currentPage == 1 ? colorScheme.text : colorScheme.faded}
                onPress={() => setCurrentPage(1)}
              />
              <Octicons
                name="dot-fill"
                size={40}
                color={currentPage == 2 ? colorScheme.text : colorScheme.faded}
                onPress={() => setCurrentPage(2)}
              />
              <Octicons
                name="dot-fill"
                size={40}
                color={currentPage == 3 ? colorScheme.text : colorScheme.faded}
                onPress={() => setCurrentPage(3)}
              />
              <Octicons
                name="dot-fill"
                size={40}
                color={currentPage == 4 ? colorScheme.text : colorScheme.faded}
                onPress={() => setCurrentPage(4)}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
