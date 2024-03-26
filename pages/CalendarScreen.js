import { View, Text, StyleSheet } from "react-native";

import Header from "../components/Header";

const januaryDays = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
];

CalendarScreen = () => {
    return (
        <View style={styles.page}>
            <Header title="Agenda" />
            <View style={styles.calendar}>
                <Text style={styles.h2}>Mars</Text>
                <View style={styles.days}>
                    {januaryDays.map((day) => (
                        <Text
                            key={day}
                            style={[styles.day, day === "25" && styles.today]}
                        >
                            {day}
                        </Text>
                    ))}
                </View>
            </View>
            <View>
                <Text style={styles.h2}>À venir</Text>
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
    calendar: {
        gap: 24,
    },
    h2: {
        fontSize: 32,
        fontWeight: "700",
    },
    days: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
    },
    day: {
        width: 48,
        height: 48,
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 36,
        padding: 6,
        textAlign: "center",
    },
    today: {
        borderColor: "#007A9D",
        borderWidth: 2,
        borderRadius: 50,
    },
});

export default CalendarScreen;
