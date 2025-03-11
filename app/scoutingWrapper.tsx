import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

import { scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

import * as db from "@/scripts/database";
import * as SQLite from "expo-sqlite";

import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";

import InfoContent from "./scoutingPages/info";
import TeleopContent from "./scoutingPages/teleop";
import AutoContent from "./scoutingPages/auto";
import FinalContent from "./scoutingPages/final";
import OveralContent from "./scoutingPages/overall";

import {
  border,
  button,
  modal,
  nav,
  sidePanel,
  wrapper,
} from "./styles/scoutingStyles";
import { text } from "./styles/styles";
import colorScheme from "@/constants/colorScheme";
import generateDataCode from "@/scripts/dataCodeGenerator";

export default function ScoutingWrapper() {
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

  const [homeModal, setHomeModal] = useState(false);

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
      if (pageDest == 4) {
        generateDataString();
      }
      setCurrentPage(pageDest);
    }
  };

  const generateDataString = () => {
    let dataString = generateDataCode({
      matchNum: parseInt(matchNum),
      pos: ['b1', 'b2', 'b3', 'r1', 'r2', 'r3'].indexOf(startDropValue),
      team: parseInt(teamNum),
      scouter: nameInfo.split(" ")[0],
      coralAuto: coralAuto,
      coralAutoAtt: coralAttAuto,
      algaeAuto: algaeAuto,
      levelAuto: [+branch1Auto, +branch2Auto, +branch3Auto, +branch4Auto].join(
        "|"
      ),
      moved: +movedAuto,
      coralTeleop: coralTeleop,
      coralTeleopAtt: coralAttTeleop,
      algaeTeleop: algaeTeleop,
      levelTeleop: [
        +branch1Teleop,
        +branch2Teleop,
        +branch3Teleop,
        +branch4Teleop,
      ].join("|"),
      finish: +finishState,
      defense: +playedDefense,
      ground: +offGroundIntake,
      foul: +receivedFoul,
      net: +scoredNet,
    });
    console.log(dataString);
    setDataCode(dataString);
  };

  const navigation = useNavigation();
  const database = SQLite.useSQLiteContext();


  const handleSave = async () => {
    generateDataString();

    await db.saveData(database, dataCode);

    navigation.navigate("Home" as never);
  };

  return (
    <View style={wrapper.container}>
      <View style={wrapper.main}>
        <Modal
          transparent={true}
          visible={homeModal}
          supportedOrientations={["portrait", "landscape"]}
        >
          <View style={modal.center}>
            <View style={[border.default, modal.container]}>
              <Text style={modal.heading}>Return Home?</Text>
              <Text style={modal.subheading}>
                All unsaved information will be lost.
              </Text>
              <View style={modal.buttonContainer}>
                <Pressable
                  style={[modal.button, { borderColor: colorScheme.green }]}
                  onPress={() => {
                    setHomeModal(false);
                    navigation.navigate("Home" as never);
                  }}
                >
                  <Text
                    style={[modal.buttonText, { color: colorScheme.green }]}
                  >
                    Home
                  </Text>
                </Pressable>
                <Pressable
                  style={[modal.button]}
                  onPress={() => setHomeModal(false)}
                >
                  <Text style={[modal.buttonText]}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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
          <View style={wrapper.footer}>
            <Text
              style={[
                button.home,
                button.white,
                { width: scale(110), textAlign: "center" },
              ]}
              onPress={() => setHomeModal(true)}
            >
              Home
            </Text>
          </View>
        </View>

        {/* AUTO */}
        <View style={currentPage == 1 ? wrapper.content : { display: "none" }}>
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
        <View style={currentPage == 2 ? wrapper.content : { display: "none" }}>
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
        <View style={currentPage == 3 ? wrapper.content : { display: "none" }}>
          <OveralContent
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
        <View style={currentPage == 4 ? wrapper.content : { display: "none" }}>
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
      <View style={sidePanel.container}>
        {/* Match */}
        {currentPage == 0 ? (
          <View></View>
        ) : (
          <View>
            <Text style={[text.large]}>Match: {matchNum}</Text>
            <Text style={[text.small]}>{nameInfo}</Text>
          </View>
        )}

        {/* Team */}
        {currentPage != 0 && (
          <View>
            <Text style={[text.large, text.center, text.underline]}>
              SCOUTING
            </Text>
            <View style={sidePanel.hr}></View>
            <Text style={text.medium}>#{teamNum}</Text>
            <Text style={text.medium}>
              {(startPosAbr as any)[startDropValue]}
            </Text>
          </View>
        )}

        {/* Nav */}
        <View style={nav.container}>
          <Text style={nav.label}>{pageName[currentPage]}</Text>
          {currentPage != 0 && (
            <Pressable style={nav.button} onPress={() => prevPage()}>
              <Feather
                name="arrow-left"
                size={scale(30)}
                color={colorScheme.text}
              />
              <Text style={nav.buttonText}>{pageNameAbr[currentPage - 1]}</Text>
            </Pressable>
          )}
          <View style={nav.break}></View>
          {currentPage == 4 ? (
            <Pressable
              style={[nav.button, { borderColor: colorScheme.green }]}
              onPress={handleSave}
            >
              <Text style={[nav.buttonText, { color: colorScheme.green }]}>
                SAVE
              </Text>
            </Pressable>
          ) : (
            <Pressable style={nav.button} onPress={() => nextPage()}>
              <Text style={nav.buttonText}>{pageNameAbr[currentPage + 1]}</Text>
              <Feather
                name="arrow-right"
                size={scale(30)}
                color={colorScheme.text}
              />
            </Pressable>
          )}
          <View style={nav.pagintationContainer}>
            <Octicons
              name="dot-fill"
              size={scale(40)}
              color={currentPage == 0 ? colorScheme.text : colorScheme.faded}
              onPress={() => goToPage(0)}
            />
            <Octicons
              name="dot-fill"
              size={scale(40)}
              color={currentPage == 1 ? colorScheme.text : colorScheme.faded}
              onPress={() => goToPage(1)}
            />
            <Octicons
              name="dot-fill"
              size={scale(40)}
              color={currentPage == 2 ? colorScheme.text : colorScheme.faded}
              onPress={() => goToPage(2)}
            />
            <Octicons
              name="dot-fill"
              size={scale(40)}
              color={currentPage == 3 ? colorScheme.text : colorScheme.faded}
              onPress={() => goToPage(3)}
            />
            <Octicons
              name="dot-fill"
              size={scale(40)}
              color={currentPage == 4 ? colorScheme.text : colorScheme.faded}
              onPress={() => goToPage(4)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
