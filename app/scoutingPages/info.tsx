import { Text, TextInput, View } from "react-native";

import colorScheme from "@/constants/colorScheme";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { button, info } from "../styles/scoutingStyles";

export default function InfoContent({
  nameInfo,
  setNameInfo,
  matchNum,
  setMatchNum,
  teamNum,
  setTeamNum,
  startDropValue,
  setStartDropValue,
  fieldIncomplete,
}: {
  nameInfo: any;
  setNameInfo: any;
  matchNum: any;
  setMatchNum: any;
  teamNum: any;
  setTeamNum: any;
  startDropValue: any;
  setStartDropValue: any;
  fieldIncomplete: any;
}) {
  const [startDropOpen, setStartDropOpen] = useState(false);
  const [startDropItems, setStartDropItems] = useState([
    { label: "Blue 1", value: "b1" },
    { label: "Blue 2", value: "b2" },
    { label: "Blue 3", value: "b3" },
    { label: "Red 1", value: "r1" },
    { label: "Red 2", value: "r2" },
    { label: "Red 3", value: "r3" },
  ]);

  return (
    <View
      style={info.container}
    >
      {/* Name */}
      <View style={info.row}>
        <Text style={info.label}>Name:</Text>
        <TextInput
          style={[button.white, info.input]}
          onChangeText={setNameInfo}
          value={nameInfo}
          placeholder="First Last"
          placeholderTextColor={colorScheme.faded}
          maxLength={50}
        />
      </View>

      {/* Match # */}
      <View
        style={info.row}
      >
        <Text style={info.label}>Match #:</Text>
        <TextInput
          style={[button.white, info.input]}
          onChangeText={setMatchNum}
          value={matchNum}
          placeholder="Match Number"
          placeholderTextColor={colorScheme.faded}
          keyboardType="number-pad"
          maxLength={3}
          />
      </View>

      {/* Team # */}
      <View style={info.row}>
        <Text style={info.label}>Team #:</Text>
        <TextInput
          style={[button.white, info.input]}
          onChangeText={setTeamNum}
          value={teamNum}
          placeholder="Team Number"
          placeholderTextColor={colorScheme.faded}
          keyboardType="number-pad"
          maxLength={5}
        />
      </View>

      {/* Start Pos */}
      <View style={info.row}>
        <Text style={info.label}>Start Pos:</Text>
        

        <DropDownPicker
          open={startDropOpen}
          setOpen={setStartDropOpen}
          items={startDropItems}
          setItems={setStartDropItems}
          value={startDropValue}
          setValue={setStartDropValue}
          theme="DARK"
          // arrowIconStyle={info.dropdownArrow}
          textStyle={info.dropdownText}
          containerStyle={[info.dropdownContainer]}
          style={[info.dropdown, button.white]}
          dropDownContainerStyle={[info.dropdownOptions, button.white]}
          itemSeparator={true}
          itemSeparatorStyle={info.dropdownSeperator}
          />
      </View>

      {fieldIncomplete && (
        <Text style={info.invalidAlert}>
          *Please Complete All Fields
        </Text>
      )}
    </View>
  );
}
