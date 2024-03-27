import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SettingsScreen;
