import { MatchPosType } from "@/scripts/types";
import { View, Text, ScrollView } from "react-native";
import { layout } from "../styles/analytics/matchView";
import { useNavigation } from "@react-navigation/native";
import MatchQrNode from "./nodes/matchQrNode";

const MatchView = ({ route }: { route: any }) => {
  const match: MatchPosType | number = route.params.match;
  const navigation = useNavigation();

  if (typeof match == 'number') {
    return (
      
      <View style={layout.container}>
        <ScrollView style={layout.content}>
        <View style={layout.contentFlex}>
          <Text style={layout.title}>No Data for Match</Text>
          </View>
          </ScrollView>
          <View style={layout.footer}>
        <Text
          onPress={() => navigation.goBack()}
          style={layout.footerButton}
        >
          Home
        </Text>
        <Text style={layout.title}>Match: {match}</Text>
      </View>
      </View>
    )
  }

  return (
    <View style={layout.container}>
      <ScrollView style={layout.content}>
        <View style={layout.contentFlex}>
          {[0, 1, 2, 3, 4, 5].map((pos, index) => (
            <MatchQrNode
              match={match.match}
              pos={pos}
              scouted={match.posScouted[pos]}
              key={index}
              onPress={() => navigation.navigate("SpecMatch", {match: {match: match.match, position: pos}})}
            />
          ))}
        </View>
      </ScrollView>
      <View style={layout.footer}>
        <Text
          onPress={() => navigation.goBack()}
          style={layout.footerButton}
        >
          Home
        </Text>
        <Text style={layout.title}>Match: {match.match}</Text>
      </View>
    </View>
  );
};

export default MatchView;
