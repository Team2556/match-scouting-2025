import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NoTeam } from "@/app/styles/analytics/team";

const NoTeamFound = ({ team }: { team: number }) => {
  const navigation = useNavigation();
  return (
    <View style={NoTeam.container}>
      <Text style={NoTeam.text}>Team {team} not found</Text>
      <Text style={NoTeam.return} onPress={() => navigation.goBack()}>
        Back
      </Text>
    </View>
  );
};

export default NoTeamFound;
