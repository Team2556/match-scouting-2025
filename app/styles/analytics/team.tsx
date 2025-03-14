import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import colorScheme from "@/constants/colorScheme";
import { container } from "./overview";

export const NoTeam = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colorScheme.background,
        justifyContent: 'space-between',
        padding: scale(5),
    },
    text: {
        fontSize: scale(30),
        color: colorScheme.text,
    },
    return: {
        fontSize: scale(30),
        padding: scale(5),
        borderWidth: scale(1),
        borderRadius: scale(2),
        borderColor: colorScheme.text,
        color: colorScheme.text,
    }
});

export const MatchGallery = StyleSheet.create({
    container: {
        // width: '100%',
        height: '100%',
        padding: scale(5),
        borderWidth: scale(1),
        borderRadius: scale(2),
        borderColor: colorScheme.text,
        // paddingRight: scale(10),
    },
    flex: {
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: scale(7),
    },
    button: {
        marginRight: scale(5),
        width: scale(100),
        fontSize: scale(20),
        color: colorScheme.text,
        backgroundColor: colorScheme.text,
        textAlign: 'center',
        marginTop: scale(-0.5),
        borderRadius: scale(2),
    }
});

export const layout = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colorScheme.background,
        padding: scale(5),
    },
    header: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {
        flex: 6,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        padding: scale(5),
        borderWidth: scale(1),
        borderRadius: scale(2),
        borderColor: colorScheme.text,
        fontSize: scale(20),
        color: colorScheme.text,
    },
    title: {
        color: colorScheme.text,
        fontSize: scale(30),
    },
    titleBox: {
        padding: scale(5),
        borderWidth: scale(1),
        borderRadius: scale(2),
        borderColor: colorScheme.text,
        color: colorScheme.text,
        fontSize: scale(20),
    },
    bodyContent: {
        flex: 1,
        width: '100%',
        margin: scale(5),
        borderWidth: scale(1),
        borderRadius: scale(2),
        borderColor: colorScheme.purple,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(2),
        flex: 1
    },
    navItemSelect: {
        flex: 1,
        backgroundColor: colorScheme.purple,
        color: colorScheme.text,
        height: '100%',
        fontSize: scale(18),
        textAlign: 'center',
    },
    navItemDeselect: {
        fontSize: scale(18),
        textAlign: 'center',
        flex: 1,
        // backgroundColor: colorScheme.background,
        color: colorScheme.text,
        height: '100%',
    },
    content: {
        width: '100%',
        padding: scale(5),
        flex: 8,
        borderTopWidth: scale(1),
        borderColor: colorScheme.purple,
    }
});

export const GamePage = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cell: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: scale(1),
    },
    break: {
        width: '100%',
        height: scale(1),
        backgroundColor: colorScheme.text,
        margin: scale(5),
    },
    text: {
        fontSize: scale(25),
        color: colorScheme.text,
        width: '100%',
        textAlign: 'left',
        flex: 1,
    },
    faded: {
        color: colorScheme.faded,
        top: scale(-8),
    },
    scroll: {
        flex: 1,
        height: '100%',
    },
    graphContainer: {
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: scale(-10),
    }
});