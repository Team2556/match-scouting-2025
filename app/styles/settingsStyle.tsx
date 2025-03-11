import colorScheme from "@/constants/colorScheme";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const settings = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorScheme.background,
        // alignItems: "center",
        // justifyContent: "center",
        padding: scale(10),
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        color: colorScheme.text,
        fontSize: scale(20),
        display: 'flex',
        textAlign: 'center',
    },
    outline: {
        borderColor: colorScheme.faded,
        borderWidth: scale(1),
        borderRadius: scale(5),
        padding: scale(5),
        margin: scale(5),
    },
    red: {
        color: colorScheme.red,
        borderColor: colorScheme.red,
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: '25%',
        display: "flex",
        textAlign: 'center'
    }
});

export const modal = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colorScheme.background,
    },
    modalContent: {
        backgroundColor: colorScheme.background,
        padding: scale(20),
        borderRadius: scale(10),
        width: "80%",
    },
    modalHeader: {
        color: colorScheme.text,
        fontSize: scale(20),
        textAlign: "center",
    },
    modalText: {
        color: colorScheme.text,
        fontSize: scale(15),
        textAlign: "center",
    },
    modalButton: {
        padding: scale(10),
        borderRadius: scale(5),
        margin: scale(5),
    },
    modalGood: {
        backgroundColor: colorScheme.green,
    },
    modalBad: {
        backgroundColor: colorScheme.red,
    },
    modalNeutral: {
        backgroundColor: colorScheme.faded,
    },
    modalButtonText: {
        color: colorScheme.text,
        textAlign: "center",
        fontSize: scale(15),
    },
});