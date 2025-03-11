import { ScrollView, View } from "react-native";

import OverViewMatch from "./overViewMatch";
import { HomeDisplayType } from "@/scripts/types";
import { container } from "../styles/analytics/overview";

const HomeOverviewContainer = ({ matches }: { matches: HomeDisplayType[] }) => {
  return (
    <ScrollView style={container.container}>
      <View style={container.content}>
        {matches.map((match) => (<OverViewMatch match={match} />))}

        {matches.length % 3 !== 0 && <View style={{width: '30%'}}></View>}
      </View>
    </ScrollView>
  );
};

export default HomeOverviewContainer;
