import { GamePage } from "@/app/styles/analytics/team";
import { AvgDataType, MatchType, MaxDataType } from "@/scripts/types";
import { View, Text, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { scale } from "react-native-size-matters";
import colorScheme from "@/constants/colorScheme";
import DataChart from "./chart";

const OverallPage = ({
  data,
  avgData,
  maxData,
}: {
  data: MatchType[];
  avgData: AvgDataType | undefined;
  maxData: MaxDataType | undefined;
}) => {
  return (
    <View style={GamePage.container}>
      <ScrollView style={GamePage.scroll}>
        <View style={GamePage.cell}>
          <View style={{ height: scale(5) }}></View>
          <View style={GamePage.textRow}>
            <Text style={[GamePage.text]}>
              DEEP: {avgData && avgData.finish[3]}%
            </Text>
            <Text style={[GamePage.text]}>
              SHALLOW: {avgData && avgData.finish[2]}%
            </Text>
          </View>
          <View style={GamePage.textRow}>
            <Text style={[GamePage.text]}>
              PARKED: {avgData && avgData.finish[1]}%
            </Text>
            <Text style={[GamePage.text]}>
              NONE: {avgData && avgData.finish[0]}%
            </Text>
          </View>
          <View style={GamePage.break}></View>
          <Text style={[GamePage.text]}>
            Move in Auto: {avgData && avgData.moved}%
          </Text>
          <View style={GamePage.break}></View>
          <View style={{ height: scale(5) }}></View>
          <View style={GamePage.textRow}>
            <Text style={[GamePage.text]}>
              Played Defense: {avgData && avgData.defense}%
            </Text>
            <Text style={[GamePage.text]}>
              Ground Intake: {avgData && avgData.ground}%
            </Text>
          </View>
          <View style={{ height: scale(5) }}></View>
          <View style={GamePage.textRow}>
            <Text style={[GamePage.text]}>
              Scored Foul: {avgData && avgData.foul}%
            </Text>
            <Text style={[GamePage.text]}>
              Scored Net: {avgData && avgData.net}%
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OverallPage;
