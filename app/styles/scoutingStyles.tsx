import { StyleSheet } from "react-native";
import colorScheme from "@/constants/colorScheme";
import { scale } from "react-native-size-matters";
import InfoContent from "../scoutingPages/info";

export const input = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main: {
    width: "74%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: scale(5),
  },
  section: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: scale(5),
    top: scale(8),
    gap: scale(5),
    justifyContent: "space-between",
    marginBottom: scale(10),
    paddingTop: scale(8),
  },
  sectionLabel: {
    position: "absolute",
    fontSize: scale(20),
    color: colorScheme.text,
    backgroundColor: colorScheme.background,
    width: scale(80),
    textAlign: "center",
    top: scale(-15),
    left: scale(10),
  },
  largeRow: {
    height: scale(60),
    display: "flex",
    flexDirection: "row",
    gap: scale(5),
    alignItems: 'center',
  },
  smallRow: {
    alignItems: 'center',
    height: scale(40),
    display: "flex",
    flexDirection: "row",
    gap: scale(5),
  },
  amount: {
    fontSize: scale(70),
    minWidth: scale(80),
    textAlign: "right",
    color: colorScheme.text,
    marginTop: scale(-18),
  },
  amountLabelBig: {
    fontSize: scale(12),
    color: colorScheme.text,
    transform: [{ rotate: "-90deg" }],
    textAlign: "center",
    height: scale(15),
    left: scale(-23),
    marginRight: scale(-30),
  },
  amountLabelSmall: {
    fontSize: scale(9),
    color: colorScheme.text,
    transform: [{ rotate: "-90deg" }],
    textAlign: "center",
    height: scale(15),
    left: scale(-23),
  },
  oneRow: {
    height: scale(60),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'center',
    gap: scale(5),
  },
});
export const button = StyleSheet.create({
  large: {
    fontSize: scale(40),
    paddingLeft: scale(15),
    paddingRight: scale(15),
  },
  medium: {
    fontSize: scale(23),
    paddingLeft: scale(8),
    paddingRight: scale(8),
    height: scale(50),
  },
    small: {
    fontSize: scale(27),
    paddingLeft: scale(10),
    paddingRight: scale(10),
  },
  white: {
    color: colorScheme.text,
    borderWidth: scale(2),
    borderColor: colorScheme.text,
    borderRadius: scale(2),
  },
  green: {
    color: colorScheme.green,
    borderWidth: scale(2),
    borderColor: colorScheme.green,
    borderRadius: scale(2),
  },
  red: {
    color: colorScheme.red,
    borderWidth: scale(2),
    borderColor: colorScheme.red,
    borderRadius: scale(2),
  },
  gray: {
    color: colorScheme.faded,
    borderWidth: scale(2),
    borderColor: colorScheme.faded,
    borderRadius: scale(2),
  },
  home: {
    width: scale(120),
    fontSize: scale(35),
  },
});

export const checkbox = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: scale(5),
  },
  true: {
    width: scale(30),
    height: scale(30),
    borderWidth: scale(2),
    borderColor: colorScheme.purple,
    borderRadius: scale(3),
    backgroundColor: colorScheme.purple,
  },
  false: {
    width: scale(30),
    height: scale(30),
    borderWidth: scale(2),
    borderColor: colorScheme.purple,
    borderRadius: scale(3),
    backgroundColor: colorScheme.background,
  },
  text: {
    fontSize: scale(30),
    color: colorScheme.text,
    top: scale(-2),
  },
});

export const sidebar = StyleSheet.create({
  container: {
    width: "25%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: scale(8),
  },
  button: {
    width: "100%",
    height: "24%",
    borderColor: colorScheme.purple,
    borderWidth: scale(3),
    fontSize: scale(55),
    color: colorScheme.text,
    textAlign: "center",
    marginBottom: scale(-2),
  },
  enabled: {
    backgroundColor: colorScheme.purple,
  },
  disabled: {
    backgroundColor: colorScheme.background,
  },
  buttonTop: {
    borderTopLeftRadius: scale(3),
    borderTopRightRadius: scale(3),
  },
  buttonBottom: {
    borderBottomLeftRadius: scale(3),
    borderBottomRightRadius: scale(3),
  },
});

export const border = StyleSheet.create({
  default: {
    //hello
    borderWidth: scale(2),
    borderColor: colorScheme.text,
    borderRadius: scale(2),
  },
});

export const info = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: scale(5),
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: scale(20),
    color: colorScheme.text,
  },
  input: {
    width: scale(250),
    fontSize: scale(20),
    paddingLeft: scale(2),
  },
  invalidAlert: {
    color: colorScheme.red,
    fontSize: scale(20),
  },
  dropdownContainer: {
    width: scale(250),
  },
  dropdown: {
    paddingLeft: scale(2),
    backgroundColor: colorScheme.background,
  },
  dropdownOptions: {
    backgroundColor: colorScheme.background,
  },
  dropdownText: {
    paddingTop: scale(2),
    fontSize: scale(20),
    height: scale(30),
    color: colorScheme.text,
  },
  dropdownSeperator: {
    marginTop: scale(3),
    marginBottom: scale (5),
    height: scale(2),
    backgroundColor: colorScheme.text,
  },
});

export const wrapper = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: scale(4),
    backgroundColor: colorScheme.background,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    gap: scale(4),
    justifyContent: "space-between",
  },
  main: {
    width: "69%",
    height: "100%",
    display: "flex",
  },
  content: {
    display: "flex",
    height: "100%",
  },
  infoContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  footer: {
    bottom: scale(50),
  },
});

export const sidePanel = StyleSheet.create({
  container: {
    width: "30%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  hr: {
    width: "100%",
    marginLeft: scale(0.1),
    marginRight: scale(0.1),
    backgroundColor: colorScheme.text,
  },
});

export const nav = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  label: {
    color: colorScheme.text,
    fontSize: scale(10),
  },
  button: {
    borderWidth: scale(2),
    borderColor: colorScheme.text,
    borderRadius: scale(2),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colorScheme.text,
    fontSize: scale(30),
  },
  pagintationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: scale(5),
    width: "100%",
    marginTop: scale(-5),
    marginBottom: scale(-5),
  },
  break: {
    height: scale(3),
  },
});

export const modal = StyleSheet.create({
  center: {
    position: "fixed",
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "50%",
    height: "40%",
    padding: scale(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colorScheme.background,
  },
  heading: {
    color: colorScheme.text,
    fontSize: scale(35),
  },
  subheading: {
    color: colorScheme.faded,
    fontSize: scale(13),
    top: scale(-20),
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    borderWidth: scale(2),
    borderColor: colorScheme.text,
    borderRadius: scale(2),
    width: "45%",
  },
  buttonText: {
    textAlign: "center",
    color: colorScheme.text,
    fontSize: scale(30),
  },
});

export const overview = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    gap: scale(10),
  },
  column: {
    height: "100%",
    minWidth: scale(160),
    flexDirection: "column",
    gap: scale(10),
  },
  text: {
    fontSize: scale(18),
    color: colorScheme.text,
    marginBottom: scale(-7),
  },
});
