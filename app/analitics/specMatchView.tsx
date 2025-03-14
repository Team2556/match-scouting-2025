import { View, ScrollView, Text, Pressable } from "react-native";
import * as db from "@/scripts/database";
import * as SQLite from "expo-sqlite";
import { DataType, MatchType } from "@/scripts/types";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { content, layout, text } from "../styles/analytics/matchView";
import { useNavigation } from "@react-navigation/native";
import colorScheme from "@/constants/colorScheme";
import QRCode from "react-native-qrcode-svg";
import generateDataCode from "@/scripts/dataCodeGenerator";
import { scale } from "react-native-size-matters";

const SpecificMatchView = ({ route }: { route: any }) => {
  const match: { match: number; position: number } = route.params.match;
  const [data, setData] = useState<MatchType>();
  const [dataMini, setDataMini] = useState<DataType>();
  const database = SQLite.useSQLiteContext();
  const navigation = useNavigation();

  const loadMatchData = async () => {
    const result = await db.loadMatch(database, match.match, match.position);
    setData(result);

    let resultMini = result;
    delete resultMini.id;
    setDataMini(resultMini);
  };

  useFocusEffect(
    useCallback(() => {
      loadMatchData();
    }, [])
  );

  const [page, setPage] = useState(0);

  const getBranch = (info: string | undefined) => {
    if (info == undefined) {
      return "";
    }

    let branches = info.split("|");
    let branchList = [];
    for (let i = 0; i < branches.length; i++) {
      if (branches[i] == "1") {
        branchList.push("L" + (i + 1));
      }
    }
    return branchList.join(", ");
  };

  return (
    <View style={layout.container}>
      <View style={layout.content}>
        <View style={layout.column}>
          <View style={layout.betweenRow}>
            <Text style={text.large} onPress={() => navigation.navigate('SpecTeam', {team: data?.team})}>Team {data?.team}</Text>
            <Text style={[text.medium, text.outlinePad, text.faded]}>
              Scouted by {data?.scouter}
            </Text>
          </View>
          <View style={content.container}>
            <View style={content.navBar}>
              <Pressable style={content.navItem} onPress={() => setPage(0)}>
                <Text
                  style={
                    page == 0 ? content.navTextSelect : content.navTextDeselect
                  }
                >
                  AUTO
                </Text>
              </Pressable>
              <Pressable style={content.navItem} onPress={() => setPage(1)}>
                <Text
                  style={
                    page == 1 ? content.navTextSelect : content.navTextDeselect
                  }
                >
                  TELEOP
                </Text>
              </Pressable>
              <Pressable style={content.navItem} onPress={() => setPage(2)}>
                <Text
                  style={
                    page == 2 ? content.navTextSelect : content.navTextDeselect
                  }
                >
                  MISC
                </Text>
              </Pressable>
              <Pressable style={content.navItem} onPress={() => setPage(3)}>
                <Text
                  style={
                    page == 3 ? content.navTextSelect : content.navTextDeselect
                  }
                >
                  QR CODE
                </Text>
              </Pressable>
            </View>
            <View style={content.body}>
              {page == 0 && (
                <ScrollView style={content.scrollContainer}>
                  <View style={content.scrollContainer}>
                    <View style={content.contentRow}>
                      <Text style={[text.medium, text.outline]}>CORAL</Text>
                      <Text style={[text.large, text.faded]}>{"Scored:"}</Text>
                      <Text style={[text.large]}>
                        {data?.coralAuto}/{data?.coralAutoAtt}
                      </Text>
                      <Text style={[text.large, text.faded]}>{" On:"}</Text>
                      <Text style={[text.large]}>
                        {getBranch(data?.levelAuto)}
                      </Text>
                    </View>
                    <View style={content.contentRow}>
                      <Text style={[text.medium, text.outline]}>ALGAE</Text>
                      <Text style={[text.large, text.faded]}>{"Scored:"}</Text>
                      <Text style={[text.large]}>{data?.algaeAuto}</Text>
                    </View>
                    <View style={content.contentRow}>
                      <Text style={[text.large]}>Moved:</Text>
                      <Text
                        style={[
                          text.medium,
                          text.outline,
                          data?.moved ? text.green : text.red,
                        ]}
                      >
                        {data?.moved ? "YES" : "NO"}
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              )}
              {page == 1 && (
                <ScrollView style={content.scrollContainer}>
                  <View style={content.scrollContainer}>
                    <View style={content.contentRow}>
                      <Text style={[text.medium, text.outline]}>CORAL</Text>
                      <Text style={[text.large, text.faded]}>{"Scored:"}</Text>
                      <Text style={[text.large]}>
                        {data?.coralTeleop}/{data?.coralTeleopAtt}
                      </Text>
                      <Text style={[text.large, text.faded]}>{" On:"}</Text>
                      <Text style={[text.large]}>
                        {getBranch(data?.levelTeleop)}
                      </Text>
                    </View>
                    <View style={content.contentRow}>
                      <Text style={[text.medium, text.outline]}>ALGAE</Text>
                      <Text style={[text.large, text.faded]}>{"Scored:"}</Text>
                      <Text style={[text.large]}>{data?.algaeTeleop}</Text>
                    </View>
                  </View>
                </ScrollView>
              )}
              {page == 2 && (
                <ScrollView style={content.scrollContainer}>
                  <View style={content.scrollContainer}>
                    <View style={content.contentRow}>
                      <Text style={text.large}>Finish:</Text>
                      <Text style={[text.medium, text.outline]}>
                        {data?.finish != undefined
                          ? ["NONE", "PARKED", "SHALLOW", "DEEP"][data.finish]
                          : ""}
                      </Text>
                    </View>
                    <View style={content.contentRow}>
                      <Text style={[text.large]}>Defense:</Text>
                      <Text
                        style={[
                          text.medium,
                          text.outline,
                          data?.defense ? text.green : text.red,
                        ]}
                      >
                        {data?.defense ? "YES" : "NO"}
                      </Text>
                      <Text style={[text.large]}>    Ground Intake:</Text>
                      <Text
                        style={[
                          text.medium,
                          text.outline,
                          data?.ground ? text.green : text.red,
                        ]}
                      >
                        {data?.ground ? "YES" : "NO"}
                      </Text>
                    </View>
                    <View style={content.contentRow}>
                      <Text style={[text.large]}>Recieved Foul(s):</Text>
                      <Text
                        style={[
                          text.medium,
                          text.outline,
                          data?.foul ? text.green : text.red,
                        ]}
                      >
                        {data?.foul ? "YES" : "NO"}
                      </Text>
                    </View>
                    <View style={content.contentRow}>
                      <Text style={[text.large]}>Scored in Net:</Text>
                      <Text
                        style={[
                          text.medium,
                          text.outline,
                          data?.net ? text.green : text.red,
                        ]}
                      >
                        {data?.net ? "YES" : "NO"}
                      </Text>
                    </View>
                  </View>
                </ScrollView>
              )}
              {page == 3 && (
                <ScrollView style={content.scrollContainer}>
                  <View style={[content.scrollContainer, {justifyContent: 'center', alignItems: 'center', height: '110%'}]}>
                      <QRCode value={(dataMini != undefined) ? generateDataCode(dataMini) : 'null'} size={scale(180)} quietZone={scale(10)}/>
                  </View>
                </ScrollView>
              )}
            </View>
          </View>
        </View>
      </View>

      <View style={layout.footer}>
        <Text onPress={() => navigation.goBack()} style={layout.footerButton}>
          Back
        </Text>
        <View style={layout.titleRow}>
          <Text style={layout.title}>Match: {match.match}</Text>
          <Text style={layout.title}>|</Text>
          <Text
            style={[
              layout.title,
              match.position < 3
                ? { color: colorScheme.blue }
                : { color: colorScheme.red },
            ]}
          >
            {["B1", "B2", "B3", "R1", "R2", "R3"][match.position]}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SpecificMatchView;
