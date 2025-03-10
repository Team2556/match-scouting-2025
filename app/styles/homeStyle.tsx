import colorScheme from "@/constants/colorScheme";
import { StyleSheet } from "react-native";

export const layout = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: colorScheme.background,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    header: {
        width: '100%',
        height: '10%',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    content: {
        width: '100%',
        height: '75%',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
    },
    footer: {
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    }
});

export const header = StyleSheet.create({
    search: {
        width: '100%',
        height: '100%',
        fontSize: 40,
        color: colorScheme.text,
        borderColor: colorScheme.text,
        borderWidth: 3,
        borderRadius: 8,
        paddingLeft: 10,
    },
    searchButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        height: '100%',
        color: colorScheme.text,
        borderColor: colorScheme.text,
        borderWidth: 3,
        borderRadius: 8,
        paddingLeft: 10,
        paddingRight: 10,
    },
    searchButtonText: {
        color: colorScheme.text,
        fontSize: 30,
    }
});
export const footer = StyleSheet.create({
    search: {
        width: '30%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        padding: 10,
    },
    searchBar: {
        width: '100%',
        height: '100%',
        fontSize: 40,
        color: colorScheme.text,
        borderColor: colorScheme.text,
        borderWidth: 3,
        borderRadius: 8,
        paddingLeft: 10,
    },
    searchButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        height: '100%',
        color: colorScheme.text,
        borderColor: colorScheme.text,
        borderWidth: 3,
        borderRadius: 8,
        paddingLeft: 10,
        paddingRight: 10,
    },
    scoutButtons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        padding: 10,
        gap: 10,
    },
    scoutButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        height: '100%',
        color: colorScheme.text,
        borderColor: colorScheme.text,
        borderWidth: 3,
        borderRadius: 8,
        paddingLeft: 10,
        paddingRight: 10,
    },
    plusButton: {
        borderColor: colorScheme.green,    }
});