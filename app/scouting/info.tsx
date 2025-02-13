import { Text, TextInput, View } from "react-native";

import colorScheme from "@/constants/colorScheme";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { setOptions } from "expo-splash-screen";

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

  const textInputStyle = {
    width: "70%",
    fontSize: 35,
    color: colorScheme.text,
    borderWidth: 3,
    borderColor: colorScheme.text,
    borderRadius: 8,
    paddingLeft: 5,
  };

  return (
    <View
      style={{
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 10,
        gap: 10,
      }}
    >
      {/* Name */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: colorScheme.text,
            textAlign: "center",
          }}
        >
          Name:
        </Text>
        <TextInput
          style={textInputStyle}
          onChangeText={setNameInfo}
          value={nameInfo}
          placeholder="First Last"
          placeholderTextColor={colorScheme.faded}
          maxLength={50}
        />
      </View>

      {/* Match # */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: colorScheme.text,
            textAlign: "center",
          }}
        >
          Match #:
        </Text>
        <TextInput
          style={textInputStyle}
          onChangeText={setMatchNum}
          value={matchNum}
          placeholder="Match Number"
          placeholderTextColor={colorScheme.faded}
          keyboardType="numeric"
          maxLength={3}
        />
      </View>

      {/* Team # */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: colorScheme.text,
            textAlign: "center",
          }}
        >
          Team #:
        </Text>
        <TextInput
          style={textInputStyle}
          onChangeText={setTeamNum}
          value={teamNum}
          placeholder="Team Number"
          placeholderTextColor={colorScheme.faded}
          maxLength={5}
        />
      </View>

      {/* Start Pos */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: colorScheme.text,
            textAlign: "center",
          }}
        >
          Start Pos:
        </Text>
        <View style={{ width: "70%" }}>
          <DropDownPicker
            open={startDropOpen}
            setOpen={setStartDropOpen}
            items={startDropItems}
            setItems={setStartDropItems}
            value={startDropValue}
            setValue={setStartDropValue}
            theme="DARK"
            arrowIconStyle={{
              width: 30,
              height: 30,
            }}
            style={{
              backgroundColor: "none",
              borderWidth: 3,
              borderColor: colorScheme.text,
              borderRadius: 8,
            }}
            textStyle={{ fontSize: 30, color: colorScheme.text }}
            containerStyle={{
              backgroundColor: "none",
            }}
            dropDownContainerStyle={{
              backgroundColor: "none",
              borderWidth: 3,
              borderColor: colorScheme.text,
              borderRadius: 8,
            }}
          />
        </View>
      </View>

      {fieldIncomplete && (
        <Text style={{ fontSize: 35, color: colorScheme.red }}>
          * Please Complete All Fields
        </Text>
      )}
    </View>
  );
}
