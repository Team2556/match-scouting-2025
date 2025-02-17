import { Pressable, Text, View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";

import TeleopContent from "./scoutingPages/teleop";
import AutoContent from "./scoutingPages/auto";

import colorScheme from "@/constants/colorScheme";
import { useState } from "react";
import OverallContent from "./scoutingPages/overall";
import InfoContent from "./scoutingPages/info";
import FinalContent from "./scoutingPages/final";

export default function Index() {
  // Basic Information
  const [nameInfo, setNameInfo] = useState("");
  const [matchNum, setMatchNum] = useState();
  const [teamNum, setTeamNum] = useState();
  const [startDropValue, setStartDropValue] = useState("b1");
  const [fieldIncomplete, setFieldIncomplete] = useState(false);

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
  const [offGroundIntake, setOffGroundIntake] = useState(false);
  const [receivedFoul, setReceivedFoul] = useState(false);
  const [scoredNet, setScoredNet] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  const [dataCode, setDataCode] = useState("null");

  const pageName = [
    "INFORMATION",
    "AUTONOUMOUS",
    "TELEOPERATED",
    "ENGAME",
    "QR CODE",
  ];
  const pageNameAbr = ["INFO", "AUTO", "TELEOP", "END", "QR"];
  const startPosAbr = {
    b1: "Blue 1",
    b2: "Blue 2",
    b3: "Blue 3",
    r1: "Red 1",
    r2: "Red 2",
    r3: "Red 3",
  };

  const nextPage = () => {
    if (currentPage == 0) {
      if (!teamNum || !matchNum || !nameInfo) {
        setFieldIncomplete(true);
      } else {
        setFieldIncomplete(false);
        setCurrentPage(currentPage + 1);
      }
    } else if (currentPage < 4) {
      if (currentPage == 3) {
        generateDataString();
      }
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageDest: any) => {
    if (!teamNum || !matchNum || !nameInfo) {
      setFieldIncomplete(true);
    } else {
      setFieldIncomplete(false);
      setCurrentPage(pageDest);
    }
  }

  const generateDataString = () => {
    let dataString = "";

    let intials = "";
    for (let name in nameInfo.split(" ")) {
      intials += nameInfo.split(" ")[name][0];
    }

    dataString += intials.padEnd(3, "0");
    dataString += matchNum.padEnd(3, "0");
    dataString += teamNum.padEnd(5, "0");
    dataString += startDropValue;

    dataString += String(coralAuto).padEnd(2, "0");
    dataString += String(coralAttAuto).padEnd(2, "0");
    dataString += String(algaeAuto).padEnd(2, "0");
    dataString += branch1Auto
      ? "1"
      : "0" + branch2Auto
      ? "1"
      : "0" + branch3Auto
      ? "1"
      : "0" + branch4Auto
      ? "1"
      : "0";
    dataString += movedAuto ? "1" : "0";

    dataString += String(coralTeleop).padEnd(2, "0");
    dataString += String(coralAttTeleop).padEnd(2, "0");
    dataString += String(algaeTeleop).padEnd(2, "0");
    dataString += branch1Teleop
      ? "1"
      : "0" + branch2Teleop
      ? "1"
      : "0" + branch3Teleop
      ? "1"
      : "0" + branch4Teleop
      ? "1"
      : "0";

    dataString += playedDefense ? "1" : "0";
    dataString += offGroundIntake ? "1" : "0";
    dataString += receivedFoul ? "1" : "0";
    dataString += scoredNet ? "1" : "0";
    dataString += finishState;

    setDataCode(dataString);
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
          {/* Information */}
          <View
            style={
              currentPage == 0
                ? {
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }
                : { display: "none" }
            }
          >
            <InfoContent
              nameInfo={nameInfo}
              setNameInfo={setNameInfo}
              matchNum={matchNum}
              setMatchNum={setMatchNum}
              teamNum={teamNum}
              setTeamNum={setTeamNum}
              startDropValue={startDropValue}
              setStartDropValue={setStartDropValue}
              fieldIncomplete={fieldIncomplete}
            />
            <View style={{ padding: 10 }}>
              <Pressable
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 3,
                  borderRadius: 8,
                  borderColor: colorScheme.text,
                  width: "30%",
                }}
                onPress={() => alert("No")}
              >
                <Text
                  style={{ color: colorScheme.text, fontSize: 40, top: -2 }}
                >
                  Home
                </Text>
              </Pressable>
            </View>
          </View>

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
              branch2Teleop={branch2Teleop}
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
              setOffGroundIntake={setOffGroundIntake}
              receivedFoul={receivedFoul}
              setReceivedFoul={setReceivedFoul}
              scoredNet={scoredNet}
              setScoredNet={setScoredNet}
            />
          </View>
          {/* QR Code */}
          <View
            style={currentPage == 4 ? { display: "flex" } : { display: "none" }}
          >
            <FinalContent
              dataCode={dataCode}
              coralAuto={coralAuto}
              coralAttAuto={coralAttAuto}
              algaeAuto={algaeAuto}
              branch1Auto={branch1Auto}
              branch2Auto={branch2Auto}
              branch3Auto={branch3Auto}
              branch4Auto={branch4Auto}
              movedAuto={movedAuto}
              coralTeleop={coralTeleop}
              coralAttTeleop={coralAttTeleop}
              algaeTeleop={algaeTeleop}
              branch1Teleop={branch1Teleop}
              branch2Teleop={branch2Teleop}
              branch3Teleop={branch3Teleop}
              branch4Teleop={branch4Teleop}
              finishState={finishState}
              playedDefense={playedDefense}
              offGroundIntake={offGroundIntake}
              receivedFoul={receivedFoul}
              scoredNet={scoredNet}
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
                Match: {matchNum}
              </Text>
              <Text style={{ fontSize: 20, color: colorScheme.text, top: -5 }}>
                {nameInfo}
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
                  height: 3,
                  backgroundColor: colorScheme.text,
                }}
              ></View>
              <Text style={{ fontSize: 30, color: colorScheme.text }}>
                #{teamNum}
              </Text>
              <Text style={{ fontSize: 30, color: colorScheme.text, top: -10 }}>
                {startPosAbr[startDropValue]}
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
                onPress={() => goToPage(0)}
              />
              <Octicons
                name="dot-fill"
                size={40}
                color={currentPage == 1 ? colorScheme.text : colorScheme.faded}
                onPress={() => goToPage(1)}
              />
              <Octicons
                name="dot-fill"
                size={40}
                color={currentPage == 2 ? colorScheme.text : colorScheme.faded}
                onPress={() => goToPage(2)}
              />
              <Octicons
                name="dot-fill"
                size={40}
                color={currentPage == 3 ? colorScheme.text : colorScheme.faded}
                onPress={() => goToPage(3)}
              />
              <Octicons
                name="dot-fill"
                size={40}
                color={currentPage == 4 ? colorScheme.text : colorScheme.faded}
                onPress={() => goToPage(4)}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
