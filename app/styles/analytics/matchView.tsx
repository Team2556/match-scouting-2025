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
    height: '70%',
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
    display: 'flex',
    flexDirection: 'row',
    gap: scale(10)
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
    display: 'flex',
    flexDirection: 'column',
    gap: scale(5),
  }
});

export const posStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: colorScheme.text,
        borderWidth: scale(1),
        borderRadius: scale(2),
        padding: scale(5),
        width: '32%',
    },
    label: {
        fontSize: scale(20),
        color: colorScheme.text
    },
    labelRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
})

export const blueStyle = StyleSheet.create({
    text: {
        color: colorScheme.blue,
    },
    border: {
        borderColor: colorScheme.blue,
    }
})
export const redStyle = StyleSheet.create({
    text: {
        color: colorScheme.red,
    },
    border: {
        borderColor: colorScheme.red,
    }
})
