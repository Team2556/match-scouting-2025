import * as React from 'react';
import { createStaticNavigation, useNavigation} from "@react-navigation/native";
import Home from "./home";
import ScoutingWrapper from "./scoutingWrapper";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: Home,
    Details: ScoutingWrapper,
  },
  screenOptions: {
    headerShown: false
  }
});
const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <Navigation />
  );
}
