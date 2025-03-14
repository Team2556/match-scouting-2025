import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import colorScheme from "@/constants/colorScheme";
import { container } from "./overview";

export const layout = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colorScheme.background,
    padding: scale(5),
  },
  content: {
    height: "70%",
    width: "100%",
    display: "flex",
  },
  contentFlex: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: scale(5),
  },
  title: {
    fontSize: scale(30),
    color: colorScheme.text,
  },
  titleRow: {
    display: "flex",
    flexDirection: "row",
    gap: scale(10),
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: scale(5),
    flex: 1,
  },
  footerButton: {
    fontSize: scale(30),
    color: colorScheme.text,
    borderColor: colorScheme.text,
    borderWidth: scale(1),
    borderRadius: scale(2),
    padding: scale(3),
    textAlign: "center",
    width: "20%",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: scale(5),
  },
  betweenRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: scale(10),
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
});

export const posStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderColor: colorScheme.text,
    borderWidth: scale(1),
    borderRadius: scale(2),
    padding: scale(5),
    width: "32%",
  },
  label: {
    fontSize: scale(20),
    color: colorScheme.text,
  },
  labelRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export const blueStyle = StyleSheet.create({
  text: {
    color: colorScheme.blue,
  },
  border: {
    borderColor: colorScheme.blue,
  },
});
export const redStyle = StyleSheet.create({
  text: {
    color: colorScheme.red,
  },
  border: {
    borderColor: colorScheme.red,
  },
});

export const text = StyleSheet.create({
  large: {
    fontSize: scale(30),
    color: colorScheme.text,
  },
  medium: {
    fontSize: scale(20),
    color: colorScheme.text,
  },
  small: {
    fontSize: scale(10),
    color: colorScheme.text,
  },
  outlinePad: {
    borderWidth: scale(1),
    borderRadius: scale(2),
    borderColor: colorScheme.text,
    padding: scale(5),
    paddingTop: scale(3),
    paddingBottom: scale(3),
  },
  outline: {
    borderWidth: scale(1),
    borderRadius: scale(2),
    borderColor: colorScheme.text,
    padding: scale(5),
    paddingTop: scale(0),
    paddingBottom: scale(0),
  },
  faded: {
    color: colorScheme.faded,
    borderColor: colorScheme.faded,
  },
  red: {
    color: colorScheme.red,
    borderColor: colorScheme.red,
  },
  green: {
    color: colorScheme.green,
    borderColor: colorScheme.green,
  },
});

export const content = StyleSheet.create({
  container: {
    height: '90%',
    width: '100%',
    borderWidth: scale(1),
    borderRadius: scale(2),
    borderColor: colorScheme.purple,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  navBar: {
    flex: 2,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: scale(2),
    padding: 0,
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
  },
  navTextDeselect: {
    textAlign: 'center',
    color: colorScheme.text,
    fontSize: scale(20),
  },
  navTextSelect: {
    backgroundColor:colorScheme.purple,
    textAlign: 'center',
    color: colorScheme.text,
    fontSize: scale(20),
  },
  body: {
    flex: 15,
    width: '100%',
    borderTopColor: colorScheme.purple,
    borderTopWidth: scale(1),
  },
  scrollContainer: {
    height: '100%',
    width: '100%',
    padding: scale(5),
    paddingTop: scale(0),
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: scale(5),
    marginBottom: scale(0),
    gap: scale(5),
  }
});