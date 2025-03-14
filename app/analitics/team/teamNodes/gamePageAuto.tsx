import { GamePage } from "@/app/styles/analytics/team";
import { AvgDataType, MatchType, MaxDataType } from "@/scripts/types";
import { View, Text, ScrollView } from "react-native";
import DataChart from "./chart";

const GamePageAuto = ({
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
      <View style={GamePage.graphContainer}>
        <DataChart data={data.map(obj => ({data: obj.coralAuto, matchNumber: obj.matchNum}))} max={maxData?.coralAuto} />
      </View>
      <ScrollView style={GamePage.scroll}>
        <View style={GamePage.cell}>
          <Text style={[GamePage.text]}>
            Avg. Coral: {avgData && avgData.coralAuto.toFixed(1)}/
            {avgData && avgData.coralAutoAtt.toFixed(1)}
          </Text>
          <Text style={[GamePage.text, GamePage.faded]}>
            Max Coral: {maxData && maxData.coralAuto}/
            {maxData && maxData.coralAutoAtt}
          </Text>
          <View style={GamePage.textRow}>
          <Text style={[GamePage.text]}>L1: {avgData && avgData.levelAuto[0]}%</Text>
          <Text style={[GamePage.text]}>L2: {avgData && avgData.levelAuto[1]}%</Text>
          </View>
          <View style={GamePage.textRow}>
          <Text style={[GamePage.text]}>L3: {avgData && avgData.levelAuto[2]}%</Text>
          <Text style={[GamePage.text]}>L4: {avgData && avgData.levelAuto[3]}%</Text>
          </View>
          <View style={GamePage.break}>

          </View>
          <Text style={[GamePage.text]}>
            Avg. Algae: {avgData && avgData.algaeAuto.toFixed(1)}
          </Text>
          <Text style={[GamePage.text, GamePage.faded]}>
            Max Algae: {maxData && maxData.algaeAuto}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default GamePageAuto;