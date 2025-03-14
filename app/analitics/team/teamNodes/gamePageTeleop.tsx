import { GamePage } from "@/app/styles/analytics/team";
import { AvgDataType, MatchType, MaxDataType } from "@/scripts/types";
import { View, Text, ScrollView } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import { scale } from "react-native-size-matters";
import colorScheme from "@/constants/colorScheme";
import DataChart from "./chart";

const GamePageTeleop = ({
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
        <DataChart data={data.map(obj => ({data: obj.coralTeleop, matchNumber: obj.matchNum}))} max={maxData?.coralTeleop}/>
      </View>
      <ScrollView style={GamePage.scroll}>
        <View style={GamePage.cell}>
          <Text style={[GamePage.text]}>
            Avg. Coral: {avgData && avgData.coralTeleop.toFixed(1)}/
            {avgData && avgData.coralTeleopAtt.toFixed(1)}
          </Text>
          <Text style={[GamePage.text, GamePage.faded]}>
            Max Coral: {maxData && maxData.coralTeleop}/
            {maxData && maxData.coralTeleopAtt}
          </Text>
          <View style={GamePage.textRow}>
          <Text style={[GamePage.text]}>L1: {avgData && avgData.levelTeleop[0]}%</Text>
          <Text style={[GamePage.text]}>L2: {avgData && avgData.levelTeleop[1]}%</Text>
          </View>
          <View style={GamePage.textRow}>
          <Text style={[GamePage.text]}>L3: {avgData && avgData.levelTeleop[2]}%</Text>
          <Text style={[GamePage.text]}>L4: {avgData && avgData.levelTeleop[3]}%</Text>
          </View>
          <View style={GamePage.break}>

          </View>
          <Text style={[GamePage.text]}>
            Avg. Algae: {avgData && avgData.algaeTeleop.toFixed(1)}
          </Text>
          <Text style={[GamePage.text, GamePage.faded]}>
            Max Algae: {maxData && maxData.algaeTeleop}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default GamePageTeleop;