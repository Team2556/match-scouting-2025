import { Text, TextInput, View } from "react-native";

import colorScheme from "@/constants/colorScheme";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { info } from "../styles/scoutingStyles";

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
      style={info.contentContainer}
    >
      {/* Name */}
      <View style={info.inputContainer}>
        <Text style={info.inputLabel}>Name:</Text>
        <TextInput
          style={info.textInput}
          onChangeText={setNameInfo}
          value={nameInfo}
          placeholder="First Last"
          placeholderTextColor={colorScheme.faded}
          maxLength={50}
        />
      </View>

      {/* Match # */}
      <View
        style={info.inputContainer}
      >
        <Text style={info.inputLabel}>Match #:</Text>
        <TextInput
          style={info.textInput}
          onChangeText={setMatchNum}
          value={matchNum}
          placeholder="Match Number"
          placeholderTextColor={colorScheme.faded}
          keyboardType="numeric"
          maxLength={3}
        />
      </View>

      {/* Team # */}
      <View style={info.inputContainer}>
        <Text style={info.inputLabel}>Team #:</Text>
        <TextInput
          style={info.textInput}
          onChangeText={setTeamNum}
          value={teamNum}
          placeholder="Team Number"
          placeholderTextColor={colorScheme.faded}
          maxLength={5}
        />
      </View>

      {/* Start Pos */}
      <View style={info.inputContainer}>
        <Text style={info.inputLabel}>Start Pos:</Text>
        

        <DropDownPicker
          open={startDropOpen}
          setOpen={setStartDropOpen}
          items={startDropItems}
          setItems={setStartDropItems}
          value={startDropValue}
          setValue={setStartDropValue}
          style={info.dropdown}
          theme="DARK"
          arrowIconStyle={info.dropdownArrow}
          textStyle={info.dropdownText}
          containerStyle={info.dropdownContainer}
          dropDownContainerStyle={info.dropDownItems}
          />
      </View>

      {fieldIncomplete && (
        <Text style={info.invalidText}>
          *Please Complete All Fields
        </Text>
      )}
    </View>
  );
}
