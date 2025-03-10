import { StyleSheet } from "react-native";
import colorScheme from "@/constants/colorScheme";

import { scale } from 'react-native-size-matters'

export const text =StyleSheet.create({
    large: {
        fontSize: scale(30),
        color: colorScheme.text,
        marginBottom: scale(-3),
    },
    medium: {
        fontSize: scale(22),
        color: colorScheme.text ,
        marginBottom: scale(-7),
    },
    small: {
        fontSize: scale(15),
        color: colorScheme.text, 
        marginBottom: scale(-5),
    },

    red: {
        color: colorScheme.red 
    },
    green: {
        color: colorScheme.green 
    },
    purple: {
        color: colorScheme.purple 
    },
    gray: {
        color: colorScheme.faded 
    },
    center: {
        textAlign: 'center'
    },
    underline: {
        borderBottomColor: colorScheme.text,
        borderBottomWidth: scale(3),
        marginBottom: scale(-3),
    }   
})