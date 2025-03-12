import { ScrollView, View } from "react-native";

import { MatchPosType } from "@/scripts/types";
import { container } from "../styles/analytics/overview";
import HomeMatchNode from "./nodes/homeMatchNode";

const OverviewContainer = ({ matches }: { matches: MatchPosType[] }) => {
  return (
    <ScrollView style={container.container}>
      <View style={container.content}>
        {matches.map((match, index) => (<HomeMatchNode match={match} key={index}/>))}

        {matches.length % 3 !== 0 && <View style={{width: '30%'}}></View>}
      </View>
    </ScrollView>
  );
};

export default OverviewContainer;
