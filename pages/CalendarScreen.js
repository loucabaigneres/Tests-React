import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

import Header from "../components/Header";

const CalendarScreen = () => {
    const [events, setEvents] = useState({});
    const [selectedDate, setSelectedDate] = useState("");

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);

        const eventsForSelectedDate = {
            "2024-03-06": ["PSG a joué son 8eme de final de LDC"],
            "2024-01-01": ["Jour de l'an"],
            "2024-04-01": ["Lundi de Pâques"],
            "2024-05-01": ["Fête du travail"],
            "2024-05-08": ["Victoire 1945"],
            "2024-05-30": ["Ascension"],
            "2024-06-09": ["Pentecôte"],
            "2024-07-14": ["Fête nationale"],
            "2024-08-15": ["Assomption"],
            "2024-11-01": ["Toussaint"],
            "2024-11-11": ["Armistice 1918"],
            "2024-12-25": ["Noël"],
        };
        setEvents(eventsForSelectedDate);
    };

    const markedDates = {
        "2024-01-01": { marked: true, dotColor: "blue", activeOpacity: 0 },
        "2024-04-01": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2024-05-01": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2024-05-08": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2024-05-30": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2024-06-09": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2024-07-14": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2024-08-15": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2024-11-01": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2024-11-11": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2024-12-25": { marked: true, dotColor: "red", activeOpacity: 0 },
        [selectedDate]: { selected: true, selectedColor: "blue" },
    };

    return (
        <View style={styles.page}>
            <Header title="Agenda" />
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Agenda</Text>
                </View>
                <View style={styles.calendarContainer}>
                    <Calendar
                        style={styles.calendar}
                        theme={{}}
                        markedDates={markedDates}
                        onDayPress={handleDayPress}
                    />
                </View>
                <View style={styles.upcomingEvents}>
                    <Text style={styles.upcomingEventsText}>
                        {events[selectedDate]
                            ? events[selectedDate].join("\n")
                            : "Aucun événement à venir"}
                    </Text>
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

    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    headerContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FFF",
    },
    header: {
        color: "#000",
        fontSize: 24,
        fontWeight: "bold",
    },
    calendarContainer: {
        marginTop: 20,
        paddingVertical: 10,
    },
    calendar: {
        borderWidth: 1,
        borderColor: "#d7e3fc",
        borderRadius: 8,
    },
    upcomingEvents: {
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: "#FFF",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    upcomingEventsText: {
        color: "#2d4150",
        fontSize: 16,
        textAlign: "center",
    },
});

export default CalendarScreen;
