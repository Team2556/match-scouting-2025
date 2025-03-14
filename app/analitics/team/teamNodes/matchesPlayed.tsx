import { MatchGallery } from "@/app/styles/analytics/team";
import colorScheme from "@/constants/colorScheme";
import { MatchType } from "@/scripts/types";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, View, Text } from "react-native";

const MatchesPlayed = ({ data }: { data: MatchType[] }) => {
  const navigation = useNavigation();
  const [matchList, setMatchList] = useState<[Number, Number][]>([]);

  const getMatchList = () => {
    let _matchList: [Number, Number][] = data.map((obj) => [
      obj.matchNum,
      obj.position,
    ]);
    setMatchList(_matchList);
  };-

  useFocusEffect(
    useCallback(() => {
      getMatchList();
    }, [])
  );

  return (
    <ScrollView style={MatchGallery.container} horizontal={true}>
      <View style={MatchGallery.flex}>
        {matchList.length > 0 ? (
          matchList.map((matchInfo, index) => (
            <Text
              onPress={() =>
                navigation.navigate("SpecMatch", {
                  match: {
                    match: matchInfo[0],
                    position: matchInfo[1],
                  },
                })
              }
              style={[
                MatchGallery.button,
                matchInfo[1] < 3
                  ? { backgroundColor: colorScheme.blue }
                  : { backgroundColor: colorScheme.red },
              ]}
              key={index}
            >
              Match {matchInfo[0]}
            </Text>
          ))
        ) : (
          <Text>None</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default MatchesPlayed;
