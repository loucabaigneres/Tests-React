import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../pages/HomeScreen";
import SurveyScreen from "../pages/SurveyScreen";
import CalendarScreen from "../pages/CalendarScreen";
import ProfileScreen from "../pages/ProfileScreen";

import SettingsScreen from "../pages/SettingsScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="dsds"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="Test"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
};

const Nav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name == "Accueil") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name == "Sondages") {
                            iconName = focused
                                ? "bar-chart"
                                : "bar-chart-outline";
                        } else if (route.name == "Agenda") {
                            iconName = focused
                                ? "calendar"
                                : "calendar-outline";
                        } else if (route.name == "Profil") {
                            iconName = focused ? "person" : "person-outline";
                        }

                        return (
                            <Ionicons name={iconName} size={25} color={color} />
                        );
                    },
                    tabBarStyle: {
                        backgroundColor: "#007A9D",
                        height: 80,
                        paddingBottom: 5,
                        paddingTop: 5,
                        paddingHorizontal: 20,
                    },
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },
                    tabBarActiveTintColor: "#007A9D",
                    tabBarInactiveTintColor: "#fff",
                    tabBarActiveBackgroundColor: "#fff",
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Accueil" component={HomeStackScreen} />
                <Tab.Screen name="Sondages" component={SurveyScreen} />
                <Tab.Screen name="Agenda" component={CalendarScreen} />
                <Tab.Screen name="Profil" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Nav;
