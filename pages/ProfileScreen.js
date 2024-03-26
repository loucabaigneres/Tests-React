import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Header from "../components/Header";

ProfileScreen = () => {
    return (
        <View style={styles.page}>
            <Header title="Profil" />
            <View style={styles.container}>
                <View style={styles.profil}>
                    <View style={styles.Images}>
                        <Ionicons
                            name={"person"}
                            size={100}
                            color={"#FFF7FE"}
                            style={styles.imgProfil}
                        />
                        <View style={styles.imgProfilCustom}>
                            <Ionicons
                                name={"create-outline"}
                                size={32}
                                color={"#000"}
                            />
                        </View>
                    </View>
                    <Text style={styles.profilName}>John Doe</Text>
                    <Text style={styles.profilAdresse}>
                        johndoe@example.com
                    </Text>
                </View>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.textBtn1}>Modifier mon profil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.textBtn2}>Déconnexion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#FFF7FE",
        paddingTop: 96,
        padding: 24,
        gap: 48,
    },
    container: {
        flex: 1,
        justifyContent: "flex-start", // This will center the button vertically
        alignItems: "center", // This will center the button horizontally
    },
    imgProfil: {
        padding: 16,
        borderRadius: 100,
        backgroundColor: "#000",
        position: "relative",
    },
    imgProfilCustom: {
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: -10,
        right: -10,
        backgroundColor: "#F9A1FA",
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 50,
    },
    button1: {
        alignItems: "center",
        backgroundColor: "#F2ECF1",
        padding: 20,
        margin: 20,
        borderRadius: 10,
        width: 300,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#FEE5E9",
        padding: 20,
        margin: 20,
        borderRadius: 10,
        width: 300,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textBtn1: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 18,
    },
    textBtn2: {
        color: "#FF5674",
        fontWeight: "bold",
        fontSize: 18,
    },
    profil: {
        alignItems: "center",
        justifyContent: "center",
    },
    profilName: {
        color: "#000",
        fontWeight: "900",
        fontSize: 28,
    },
    profilAdresse: {
        color: "#000",
        fontSize: 22,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    h1: {
        fontSize: 48,
        fontWeight: "900",
    },
    text: {
        color: "#000",
    },
});

export default ProfileScreen;
