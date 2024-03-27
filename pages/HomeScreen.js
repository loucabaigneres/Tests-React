import {
    View,
    Text,
    TouchableOpacity,
    Linking,
    Button,
    StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import colors from "../variables";

import Header from "../components/Header";

const HomeScreen = () => {
    const navigation = useNavigation();

    const handlePress = (category) => {
        switch (category) {
            case "Projects":
                Linking.openURL("https://participer.ville-antony.fr/fr-FR/");
                break;
            case "Events":
                navigation.navigate("Agenda");
                break;
            case "Actu":
                Linking.openURL(
                    "https://www.ville-antony.fr/toutes-les-actualites"
                );
                break;
            case "Transports":
                Linking.openURL("https://www.ville-antony.fr/transports");
                break;
            case "Contact":
                Linking.openURL("https://www.ville-antony.fr/contact");
                break;
        }
    };

    return (
        <View style={styles.page}>
            <Header title="Accueil" />
            <View style={styles.categories}>
                <Button
                    title="Go to settings"
                    onPress={() => navigation.navigate("Test")}
                ></Button>
                <TouchableOpacity onPress={() => handlePress("Projects")}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[
                            "rgba(246, 116, 162, 1)",
                            "rgba(230, 111, 153, 0.72)",
                        ]}
                        style={[styles.category, styles.small]}
                    >
                        <Ionicons
                            name={"bulb"}
                            size={32}
                            color={colors.bgColor}
                        />
                        <View>
                            <Text style={styles.h3}>Projets</Text>
                            <Text style={styles.p}>
                                Restez à jour avec votre commune
                            </Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={styles.row}>
                    <View style={styles.col}>
                        <TouchableOpacity onPress={() => handlePress("Events")}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={[
                                    "rgba(67, 116, 142, 1)",
                                    "rgba(90, 144, 172, 0.72)",
                                ]}
                                style={[styles.category, styles.small]}
                            >
                                <Ionicons
                                    name={"bulb"}
                                    size={32}
                                    color={colors.bgColor}
                                />
                                <View>
                                    <Text style={styles.h3}>Événements</Text>
                                    <Text style={styles.p}>
                                        Les dernières nouvelles
                                    </Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handlePress("Transports")}
                        >
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={[
                                    "rgba(113, 201, 206, 1)",
                                    "rgba(165, 214, 167, 0.72)",
                                ]}
                                style={[styles.category, styles.big]}
                            >
                                <Ionicons
                                    name={"bulb"}
                                    size={32}
                                    color={colors.bgColor}
                                />
                                <View>
                                    <Text style={styles.h3}>Transports</Text>
                                    <Text style={styles.p}>
                                        Les dernières nouvelles
                                    </Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.col}>
                        <TouchableOpacity onPress={() => handlePress("Actu")}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={[
                                    "rgba(255, 183, 77, 1)",
                                    "rgba(255, 167, 38, 0.72)",
                                ]}
                                style={[styles.category, styles.big]}
                            >
                                <Ionicons
                                    name={"bulb"}
                                    size={32}
                                    color={colors.bgColor}
                                />
                                <View>
                                    <Text style={styles.h3}>Actualités</Text>
                                    <Text style={styles.p}>
                                        Les dernières nouvelles
                                    </Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handlePress("Contact")}
                        >
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={[
                                    "rgba(76, 102, 159, 1)",
                                    "rgba(59, 89, 152, 1)",
                                    "rgba(25, 47, 106, 1)",
                                ]}
                                style={[styles.category, styles.small]}
                            >
                                <Ionicons
                                    name={"bulb"}
                                    size={32}
                                    color={colors.bgColor}
                                />
                                <View>
                                    <Text style={styles.h3}>
                                        Nous contacter
                                    </Text>
                                    <Text style={styles.p}>
                                        Les dernières nouvelles
                                    </Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
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
    categories: {
        gap: 12,
    },
    category: {
        backgroundColor: "transparent",
        padding: 20,
        borderRadius: 12,
        justifyContent: "space-between",
    },
    row: {
        flexDirection: "row",
        gap: 12,
    },
    col: {
        flexDirection: "column",
        flex: 1,
        gap: 12,
    },
    big: {
        height: 220,
    },
    small: {
        height: 120,
    },
    h3: {
        fontSize: 16,
        fontWeight: "900",
        color: "#fff",
    },
    p: {
        fontSize: 12,
        color: "#fff",
    },
});

export default HomeScreen;
