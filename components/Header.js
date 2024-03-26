import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import colors from "../variables";

Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.h1}>{title}</Text>
            <Ionicons name={"search"} size={32} color={colors.txtColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    h1: {
        fontSize: 48,
        fontWeight: "900",
        color: colors.txtColor,
    },
});

export default Header;
