import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    constainer: {
        gap: 24,
        flex: 1,
    },
    tittle: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
    }
})