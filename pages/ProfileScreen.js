import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";

const ProfileScreen = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [originalProfileImage, setOriginalProfileImage] = useState(null); // Pour sauvegarder l'image originale
    const [name, setName] = useState("John Doe");
    const [originalName, setOriginalName] = useState("John Doe"); // Pour sauvegarder le nom original
    const [email, setEmail] = useState("johndoe@example.com");
    const [originalEmail, setOriginalEmail] = useState("johndoe@example.com"); // Pour sauvegarder l'email original

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                Alert.alert(
                    "Permission refusée",
                    "Désolé, nous avons besoin des permissions de la bibliothèque de photos pour faire fonctionner cette fonctionnalité!"
                );
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled && result.assets && result.assets.length > 0) {
            setProfileImage(result.assets[0].uri);
            if (!isEditing) {
                // Sauvegarder l'image originale seulement si l'utilisateur n'est pas déjà en mode édition
                setOriginalProfileImage(result.assets[0].uri);
            }
        }
    };

    const toggleEditProfile = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            // Lorsque l'utilisateur commence à éditer, sauvegarder les valeurs actuelles
            setOriginalName(name);
            setOriginalEmail(email);
            setOriginalProfileImage(profileImage);
        }
    };

    const saveProfileChanges = () => {
        if (email.includes("@")) {
            setIsEditing(false);
        } else {
            Alert.alert(
                "Erreur",
                'Veuillez entrer une adresse e-mail valide avec un "@".'
            );
        }
    };

    const cancelProfileChanges = () => {
        setName(originalName);
        setEmail(originalEmail);
        setProfileImage(originalProfileImage);
        setIsEditing(false);
    };

    const logout = () => {
        setProfileImage(null);
        setName("");
        setEmail("");
        setIsEditing(false);
    };

    return (
        <View style={styles.page}>
            <Header title="Profil" />
            <View style={styles.container}>
                <TouchableOpacity onPress={pickImage} style={styles.profil}>
                    {profileImage ? (
                        <Image
                            source={{ uri: profileImage }}
                            style={styles.imgProfil}
                        />
                    ) : (
                        <Ionicons
                            name="person"
                            size={100}
                            color="#FFF7FE"
                            style={styles.imgProfil}
                        />
                    )}
                </TouchableOpacity>
                <Text style={styles.profilName}>{name}</Text>
                <Text style={styles.profilEmail}>{email}</Text>
                {isEditing ? (
                    <>
                        <TextInput
                            style={styles.inputField}
                            value={name}
                            onChangeText={setName}
                            placeholder="Nom"
                            autoFocus={true}
                        />
                        <TextInput
                            style={styles.inputField}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Adresse e-mail"
                        />
                        <View style={styles.saveCancelButtons}>
                            <TouchableOpacity
                                onPress={saveProfileChanges}
                                style={styles.saveButton}
                            >
                                <Text style={styles.saveButtonText}>
                                    Enregistrer
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={cancelProfileChanges}
                                style={styles.cancelButton}
                            >
                                <Text style={styles.cancelButtonText}>
                                    Annuler
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={toggleEditProfile}
                    >
                        <Text style={styles.buttonText}>
                            Modifier mon profil
                        </Text>
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.buttonText}>Déconnexion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#FAF9FF",
        paddingTop: 32,
        paddingHorizontal: 24,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    imgProfil: {
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: "#E0E0E0",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    editButton: {
        backgroundColor: "#D1C4E9",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 12,
        shadowColor: "#5E35B1",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
    },
    logoutButton: {
        backgroundColor: "#FFCDD2",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 12,
        shadowColor: "#E57373",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
    },
    buttonText: {
        textAlign: "center",
        color: "#333",
        fontWeight: "600",
        fontSize: 16,
    },
    inputField: {
        backgroundColor: "#EDE7F6",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        width: "85%",
        fontSize: 15,
        marginBottom: 10,
        color: "#333",
        borderWidth: 1,
        borderColor: "#C5CAE9",
    },
    saveCancelButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "85%",
        marginTop: 10,
    },
    saveButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        flex: 1,
        marginRight: 10,
    },
    cancelButton: {
        backgroundColor: "#F44336",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        flex: 1,
    },
    saveButtonText: {
        color: "#FFF",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 15,
    },
    cancelButtonText: {
        color: "#FFF",
        fontWeight: "600",
        textAlign: "center",
        fontSize: 15,
    },
});

export default ProfileScreen;
