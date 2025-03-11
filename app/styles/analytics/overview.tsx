import colorScheme from "@/constants/colorScheme";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const container = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    content: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: scale(5),
    }
});
export const matchStyle = StyleSheet.create({
    container: {
        width: '30%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: colorScheme.text,
        borderWidth: scale(1),
        borderRadius: scale(5),
        paddingTop: scale(-5),
        padding: scale(5),
        margin: scale(5),
        gap: scale(5),
    },
    title: {
        color: colorScheme.text,
        fontSize: scale(30),
        textAlign: 'center'
    },
    posRow: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    posContainer: {
        width: 'auto',
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: scale(3),
    },
    posLabel: {
        fontSize: scale(20),
    },
    blueText: {
        color: colorScheme.blue,
    },
    redText: {
        color: colorScheme.red,
    },
    blueOutline: {
        borderWidth: scale(1),
        borderRadius: scale(2),
        borderColor: colorScheme.blue,
        height: scale(20),
        width: scale(20),
    },
    redOutline: {
        borderWidth: scale(1),
        borderRadius: scale(2),
        borderColor: colorScheme.red,
        height: scale(20),
        width: scale(20),
    },
    blueFill: {
        borderWidth: scale(1),
        borderRadius: scale(2),
        borderColor: colorScheme.blue,
        backgroundColor: colorScheme.blue,
        height: scale(20),
        width: scale(20),
    },
    redFill: {
        borderWidth: scale(1),
        borderRadius: scale(2),
        borderColor: colorScheme.red,
        backgroundColor: colorScheme.red,
        height: scale(20),
        width: scale(20),
    },
});