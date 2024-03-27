import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Header from "../components/Header";

const SurveyScreen = () => {
    const [openSurvey, setOpenSurvey] = useState(null); // No survey is open initially

    const toggleSurvey = (id) => {
        setOpenSurvey(openSurvey === id ? null : id);
    };
    return (
        <View style={styles.page}>
            <Header title="Sondages" />
            <ScrollView>
                <TouchableOpacity
                    style={styles.surveyWrapper}
                    onPress={() => toggleSurvey(1)}
                >
                    <View
                        style={[
                            styles.survey,
                            { height: openSurvey === 1 ? 450 : 150 },
                        ]}
                    >
                        <Text style={styles.titleSurvey}>
                            Accusantium adipisci quam eveniet. Sed inventore
                            saepe fuga sapiente ?
                        </Text>
                        <View style={styles.surveyContainer}>
                            <Text style={styles.descSurvey}>
                                Dicta deserunt dicta explicabo debitis aperiam.
                                Esse dolorem consequuntur beatae inventore iste
                                repellendus quam vitae. Expedita itaque hic.
                            </Text>
                            <Ionicons
                                name="arrow-forward"
                                size={40}
                                style={[
                                    styles.arrowSurvey,
                                    {
                                        transform:
                                            openSurvey === 1
                                                ? [{ rotate: "90deg" }]
                                                : [{ rotate: "0deg" }],
                                    },
                                ]}
                            />
                        </View>
                        <View
                            style={{
                                display: openSurvey === 1 ? "block" : "none",
                            }}
                        >
                            <Text style={styles.descSurveyPlus}>
                                Velit quis quidem reiciendis alias aperiam
                                perspiciatis. Vitae atque ad nemo accusantium
                                voluptatibus. Doloremque voluptas quibusdam
                                ratione impedit est id nostrum qui tempore. Nemo
                                consequuntur adipisci velit ad error facilis
                                tempore neque sunt. Quas consequuntur omnis.
                                Illo sunt aliquid aspernatur aperiam tempore
                                temporibus maxime quod. Quibusdam omnis illum
                                fugit ea. Provident officia quaerat accusamus
                                assumenda pariatur quam illum. Odit corporis
                                delectus autem eaque. At quas eveniet facere
                                expedita voluptatibus neque perferendis
                                architecto. Vero libero ut similique corrupti
                                quia tempore debitis. Tenetur excepturi sed
                                saepe.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.surveyWrapper}
                    onPress={() => toggleSurvey(2)}
                >
                    <View
                        style={[
                            styles.survey,
                            { height: openSurvey === 2 ? 450 : 150 },
                        ]}
                    >
                        <Text style={styles.titleSurvey}>
                            Accusantium adipisci quam eveniet. Sed inventore
                            saepe fuga sapiente ?
                        </Text>
                        <View style={styles.surveyContainer}>
                            <Text style={styles.descSurvey}>
                                Dicta deserunt dicta explicabo debitis aperiam.
                                Esse dolorem consequuntur beatae inventore iste
                                repellendus quam vitae. Expedita itaque hic.
                            </Text>
                            <Ionicons
                                name="arrow-forward"
                                size={40}
                                style={[
                                    styles.arrowSurvey,
                                    {
                                        transform:
                                            openSurvey === 2
                                                ? [{ rotate: "90deg" }]
                                                : [{ rotate: "0deg" }],
                                    },
                                ]}
                            />
                        </View>
                        <View
                            style={{
                                display: openSurvey === 2 ? "block" : "none",
                            }}
                        >
                            <Text style={styles.descSurveyPlus}>
                                Velit quis quidem reiciendis alias aperiam
                                perspiciatis. Vitae atque ad nemo accusantium
                                voluptatibus. Doloremque voluptas quibusdam
                                ratione impedit est id nostrum qui tempore. Nemo
                                consequuntur adipisci velit ad error facilis
                                tempore neque sunt. Quas consequuntur omnis.
                                Illo sunt aliquid aspernatur aperiam tempore
                                temporibus maxime quod. Quibusdam omnis illum
                                fugit ea. Provident officia quaerat accusamus
                                assumenda pariatur quam illum. Odit corporis
                                delectus autem eaque. At quas eveniet facere
                                expedita voluptatibus neque perferendis
                                architecto. Vero libero ut similique corrupti
                                quia tempore debitis. Tenetur excepturi sed
                                saepe.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.surveyWrapper}
                    onPress={() => toggleSurvey(3)}
                >
                    <View
                        style={[
                            styles.survey,
                            { height: openSurvey === 3 ? 450 : 150 },
                        ]}
                    >
                        <Text style={styles.titleSurvey}>
                            Accusantium adipisci quam eveniet. Sed inventore
                            saepe fuga sapiente ?
                        </Text>
                        <View style={styles.surveyContainer}>
                            <Text style={styles.descSurvey}>
                                Dicta deserunt dicta explicabo debitis aperiam.
                                Esse dolorem consequuntur beatae inventore iste
                                repellendus quam vitae. Expedita itaque hic.
                            </Text>
                            <Ionicons
                                name="arrow-forward"
                                size={40}
                                style={[
                                    styles.arrowSurvey,
                                    {
                                        transform:
                                            openSurvey === 3
                                                ? [{ rotate: "90deg" }]
                                                : [{ rotate: "0deg" }],
                                    },
                                ]}
                            />
                        </View>
                        <View
                            style={{
                                display: openSurvey === 3 ? "block" : "none",
                            }}
                        >
                            <Text style={styles.descSurveyPlus}>
                                Velit quis quidem reiciendis alias aperiam
                                perspiciatis. Vitae atque ad nemo accusantium
                                voluptatibus. Doloremque voluptas quibusdam
                                ratione impedit est id nostrum qui tempore. Nemo
                                consequuntur adipisci velit ad error facilis
                                tempore neque sunt. Quas consequuntur omnis.
                                Illo sunt aliquid aspernatur aperiam tempore
                                temporibus maxime quod. Quibusdam omnis illum
                                fugit ea. Provident officia quaerat accusamus
                                assumenda pariatur quam illum. Odit corporis
                                delectus autem eaque. At quas eveniet facere
                                expedita voluptatibus neque perferendis
                                architecto. Vero libero ut similique corrupti
                                quia tempore debitis. Tenetur excepturi sed
                                saepe.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#FFF7FE",
        paddingTop: 96,
        padding: 24,
        gap: 12,
        justifyContent: "space-between", // This will push the header to the top and the button to the bottom
    },
    text: {
        color: "#000",
        fontSize: 40,
    },
    survey: {
        color: "#000",
        fontSize: 40,
        backgroundColor: "#007A9D",
        borderRadius: 12,
        padding: 12,
        width: 350,
    },
    surveyWrapper: {
        marginBottom: 20,
    },
    surveyContainer: {
        padding: 12,
        flexDirection: "row",
        width: 300,
        alignItems: "center",
    },
    titleSurvey: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    descSurvey: {
        color: "#fff",
        fontSize: 14,
    },
    arrowSurvey: {
        width: 30,
        height: 23,
        position: "absolute",
        right: 0,
        bottom: 18,
    },
    descSurveyPlus: {
        color: "#fff",
        fontSize: 14,
        padding: 12,
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
});

export default SurveyScreen;
