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
import { sidebar, wrapper } from "./styles/scoutingStyles";

export default function Index() {
  // Basic Information
  const [nameInfo, setNameInfo] = useState("");
  const [matchNum, setMatchNum] = useState("");
  const [teamNum, setTeamNum] = useState("");
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
  };

  const generateDataString = () => {
    let dataString = "";

    let intials = "";
    for (let name in nameInfo.split(" ")) {
      intials += nameInfo.split(" ")[name][0];
    }

    dataString += intials.padStart(3, "0");
    dataString += ",";
    dataString += (matchNum as any).padStart(3, "0");
    dataString += ",";
    dataString += (teamNum as any).padStart(5, "0");
    dataString += ",";
    dataString += startDropValue;
    dataString += ",";

    dataString += String(coralAuto).padStart(2, "0");
    dataString += ",";
    dataString += String(coralAttAuto).padStart(2, "0");
    dataString += ",";
    dataString += String(algaeAuto).padStart(2, "0");
    dataString += ",";
    dataString += branch1Auto
      ? "1"
      : "0" + branch2Auto
      ? "1"
      : "0" + branch3Auto
      ? "1"
      : "0" + branch4Auto
      ? "1"
      : "0";
    dataString += ",";
    dataString += movedAuto ? "1" : "0";
    dataString += ",";

    dataString += String(coralTeleop).padStart(2, "0");
    dataString += ",";
    dataString += String(coralAttTeleop).padStart(2, "0");
    dataString += ",";
    dataString += String(algaeTeleop).padStart(2, "0");
    dataString += ",";
    dataString += branch1Teleop
      ? "1"
      : "0" + branch2Teleop
      ? "1"
      : "0" + branch3Teleop
      ? "1"
      : "0" + branch4Teleop
      ? "1"
      : "0";
    dataString += ",";

    dataString += playedDefense ? "1" : "0";
    dataString += ",";
    dataString += offGroundIntake ? "1" : "0";
    dataString += ",";
    dataString += receivedFoul ? "1" : "0";
    dataString += ",";
    dataString += scoredNet ? "1" : "0";
    dataString += ",";
    dataString += finishState;
    dataString += ",";

    setDataCode(dataString);
  };

  return (
    <View style={wrapper.contentWrapper}>
      <View style={wrapper.mainContent}>
        {/* Information */}
        <View
          style={currentPage == 0 ? wrapper.infoContent : { display: "none" }}
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
          <View style={wrapper.footerContainer}>
            <Pressable style={wrapper.footerButton} onPress={() => alert("No")}>
              <Text style={wrapper.homeButton}>Home</Text>
            </Pressable>
          </View>
        </View>

        {/* AUTO */}
        <View
          style={currentPage == 1 ? wrapper.contentDisplay : { display: "none" }}
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
          style={currentPage == 2 ? wrapper.contentDisplay : { display: "none" }}
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
          style={
            currentPage == 3 ? wrapper.contentDisplay : { display: "none" }
          }
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
          style={currentPage == 4 ? wrapper.contentDisplay : { display: "none" }}
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
      <View style={sidebar.container}>
        {/* Match */}
        {currentPage == 0 ? (
          <View></View>
        ) : (
          <View>
            <Text style={sidebar.heading}>Match: {matchNum}</Text>
            <Text style={sidebar.subheading}>{nameInfo}</Text>
          </View>
        )}

        {/* Team */}
        {currentPage != 0 && (
          <View>
            <Text style={[sidebar.heading, { textAlign: "center" }]}>
              SCOUTING
            </Text>
            <View style={sidebar.hr}></View>
            <Text style={sidebar.subheading}>#{teamNum}</Text>
            <Text style={sidebar.subheading}>
              {(startPosAbr as any)[startDropValue]}
            </Text>
          </View>
        )}

        {/* Nav */}
        <View style={sidebar.navContainer}>
          <Text style={sidebar.pageLabel}>{pageName[currentPage]}</Text>
          {currentPage != 0 && (
            <Pressable style={sidebar.navButton} onPress={() => prevPage()}>
              <Feather name="arrow-left" size={60} color={colorScheme.text} />
              <Text style={sidebar.navText}>
                {pageNameAbr[currentPage - 1]}
              </Text>
            </Pressable>
          )}
          {currentPage == 4 ? (
            <Pressable
              style={[sidebar.navButton, { borderColor: colorScheme.green }]}
            >
              <Text style={[sidebar.navText, { color: colorScheme.green }]}>
                SAVE
              </Text>
            </Pressable>
          ) : (
            <Pressable style={sidebar.navButton} onPress={() => nextPage()}>
              <Text style={sidebar.navText}>
                {pageNameAbr[currentPage + 1]}
              </Text>
              <Feather name="arrow-right" size={60} color={colorScheme.text} />
            </Pressable>
          )}
          <View style={sidebar.pagintationContainer}>
            <Octicons
              name="dot-fill"
              size={80}
              color={currentPage == 0 ? colorScheme.text : colorScheme.faded}
              onPress={() => goToPage(0)}
            />
            <Octicons
              name="dot-fill"
              size={80}
              color={currentPage == 1 ? colorScheme.text : colorScheme.faded}
              onPress={() => goToPage(1)}
            />
            <Octicons
              name="dot-fill"
              size={80}
              color={currentPage == 2 ? colorScheme.text : colorScheme.faded}
              onPress={() => goToPage(2)}
            />
            <Octicons
              name="dot-fill"
              size={80}
              color={currentPage == 3 ? colorScheme.text : colorScheme.faded}
              onPress={() => goToPage(3)}
            />
            <Octicons
              name="dot-fill"
              size={80}
              color={currentPage == 4 ? colorScheme.text : colorScheme.faded}
              onPress={() => goToPage(4)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
