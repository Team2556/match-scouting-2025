import { StyleSheet } from "react-native";
import colorScheme from "@/constants/colorScheme";

export const info = StyleSheet.create({
  contentContainer: {
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    gap: 10,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  inputLabel: {
    fontSize: 50,
    color: colorScheme.text,
    flexBasis: 250,
    flexGrow: 3,
  },
  textInput: {
    flexGrow: 7,
    fontSize: 50,
    color: colorScheme.text,
    borderWidth: 3,
    borderColor: colorScheme.text,
    borderRadius: 8,
    paddingLeft: 5,
  },
  dropdownContainer: {
    width: 611,
  },
  dropdown: {
    borderWidth: 3,
    borderColor: colorScheme.text,
    borderRadius: 8,
    backgroundColor: "none",
  },
  dropdownText: {
    fontSize: 40,
    color: colorScheme.text,
  },
  dropdownArrow: {
    width: 60,
    height: 60,
  },
  dropDownItems: {
    backgroundColor: "none",
    borderWidth: 3,
    borderColor: colorScheme.text,
    borderRadius: 8,
  },
  invalidText: {
    fontSize: 40,
    color: colorScheme.red,
  },
});

export const game = StyleSheet.create({
  container: {
    height: "100%",
    padding: "2%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  mainInputContainer: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  inputSection: {
    borderWidth: 3,
    borderColor: colorScheme.text,
    borderRadius: 8,
    marginTop: 5,
    padding: 10,
    paddingTop: 5,
    gap: 10,
  },
  inputHeading: {
    color: colorScheme.text,
    position: "absolute",
    left: 40,
    top: -30,
    fontSize: 40,
    width: "auto",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colorScheme.background,
  },
  amountDisplayContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  amountDisplay: {
    color: colorScheme.text,
    fontSize: 130,
    textAlign: "right",
    width: 150,
    top: -5,
    height: 150,
  },
  amountLabel: {
    color: colorScheme.text,
    fontSize: 25,
    width: "auto",
    height: 30,
    transform: "rotateZ(-90deg)",
    left: -35,
    top: 15,
  },
  amountLabelSmall: {
    color: colorScheme.text,
    fontSize: 20,
    width: "auto",
    height: 30,
    transform: "rotateZ(-90deg)",
    left: -40,
    top: 15,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  buttonTextLarge: {
    color: colorScheme.green,
    fontSize: 80,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    borderWidth: 3,
    borderColor: colorScheme.green,
    borderRadius: 8,
  },
  buttonIconLarge: {
    color: colorScheme.faded,
    fontSize: 80,
    paddingLeft: 11,
    paddingRight: 11,
    paddingBottom: 5,
    borderWidth: 3,
    borderColor: colorScheme.faded,
    borderRadius: 8,
  },
  buttonTextSmall: {
    color: colorScheme.red,
    fontSize: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    borderWidth: 3,
    borderColor: colorScheme.red,
    borderRadius: 8,
  },
  buttonIconSmall: {
    color: colorScheme.faded,
    fontSize: 50,
    paddingLeft: 7.5,
    paddingRight: 7.5,
    paddingBottom: 5,
    borderWidth: 3,
    borderColor: colorScheme.faded,
    borderRadius: 8,
  },
  smallInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 130,
    top: -5,
  },
  smallInputAdjustments: {
    left: -30,
    top: 15,
  },
});

export const other = StyleSheet.create({
  checkBoxOption: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkBoxTrue: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderColor: colorScheme.purple,
    borderRadius: 8,
    backgroundColor: colorScheme.purple,
  },
  checkBoxFalse: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderColor: colorScheme.purple,
    borderRadius: 8,
  },
  checkBoxText: { color: colorScheme.text, fontSize: 60, top: -2 },
});

export const sideInput = StyleSheet.create({
  container: {
    width: "25%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 25,
    paddingTop: 5,
  },
  option: {
    color: colorScheme.text,
    width: "100%",
    height: "25%",
    fontSize: 130,
    borderWidth: 5,
    borderColor: colorScheme.purple,
    textAlign: "center",
    marginBottom: -5,
  },
  enabled: {
    backgroundColor: colorScheme.purple,
  },
  disabled: {
    backgroundColor: "none",
  },
  optionTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  optionBottom: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export const wrapper = StyleSheet.create({
  contentWrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: colorScheme.background,
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  mainContent: {
    width: "70%",
    height: "100%",
  },
  contentDisplay: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  infoContent: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  footerContainer: {
    padding: 10,
  },
  footerButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 8,
    borderColor: colorScheme.text,
    width: 250,
  },
  homeButton: {
    color: colorScheme.text,
    fontSize: 70,
    top: -2,
  },
});

export const sidebar = StyleSheet.create({
  container: {
    width: "30%",
    padding: "1.5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 60,
    color: colorScheme.text,
    marginBottom: "-5%",
  },
  subheading: {
    fontSize: 45,
    color: colorScheme.text,
    marginBottom: "-5%",
  },
  hr: {
    marginTop: "5%",
    width: "100%",
    height: "3%",
    backgroundColor: colorScheme.text,
  },
  pageLabel: {
    fontSize: 30,
    color: colorScheme.text,
    textAlign: "center",
    marginBottom: "-2%",
  },
  navButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 8,
    borderColor: colorScheme.text,
  },
  navText: {
    color: colorScheme.text,
    fontSize: 70,
    top: "-5%",
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "auto",
    gap: 5,
    bottom: -25,
  },
  pagintationContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "-5%",
  },
});

export const overview = StyleSheet.create({
  container: {
    height: "100%",
    padding: "2%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 50,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  heading: {
    fontSize: 60,
    color: colorScheme.text,
    textAlign: "center",
  },
  hr: {
    width: "100%",
    height: 5,
    backgroundColor: colorScheme.text,
  },
  text: { fontSize: 40, color: colorScheme.text, marginBottom: -10,},
});
