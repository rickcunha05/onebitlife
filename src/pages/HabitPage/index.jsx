import React, { setHabitInput, setFrequencyInput, useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import SelectHabit from "../../Components/HabitPage/SelectHabit";
import SelectFrequency from "../../Components/HabitPage/SelectFrequency";
import Notification from "../../Components/HabitPage/Notification";
import TimeDatePicker from "../../Components/TimeDatePicker";
import DefaultButton from "../../Components/Common/DefaultButton";
import UpdateExcludeButtons from "../../Components/HabitPage/UpdateExludeButtons";

export default function HabitPage({ route }) {
    const navigation = useNavigation();
    const [habitInput, setHabitInput] = useState()
    const [frequencyInput, setFrequencyInput] = useState()
    const [notificationToggle, setNotificationToggle] = useState()
    const [dayNotification, setDayNotification] = useState();
    const [timeNotification, setTimeNotification] = useState();

    const { create, habit } = route.params

    function handleCreateHabit() {
        //  Tratamento para habito e frequência indefinidos
        if (habitInput === undefined || frequencyInput === undefined) {
            Alert.alert('Você precisa selecionar um hábito e frequência para continuar!')
        }
        // Tratamento para hábitos diários
        else if (notificationToggle === true && frequencyInput === "Diário" && timeNotification === undefined) {
            Alert.alert("Você precisa dizer o horário que deseja receber a notificação!")
        }
        // Tratamento para hábitos semanais
        else if (notificationToggle === true && frequencyInput === "Semanal"
            && dayNotification === undefined && timeNotification === undefined) {
            Alert.alert("Você precisa dizer o horário e o dia que deseja receber a notificação!")
        }
        // Tratamento para salvar o novo hábito caso venha tudo preenchido
        else {
            navigation.navigate("Home", {
                createHabit: `Created in ${habit?.habitArea}`
            })
        }

    }
    function handleUpdateHabit() {
        if (notificationToggle === true && !dayNotification && !timeNotification) {
            Alert.alert("Você precisa colocar a frequência e horário da notificação");
        } else {
            HabitsService.updateHabit({
                habitArea: habit?.habitArea,
                habitName: habitInput,
                habitFrequency: frequencyInput,
                habitHasNotification: notificationToggle,
                habitNotificationFrequency: dayNotification,
                habitNotificationTime: timeNotification,
                habitNotificationId: notificationToggle ? habitInput : null,
            }).then(() => {
                Alert.alert("Sucesso na atualização do hábito");
                if (!notificationToggle) {
                    NotificationService.deleteNotification(habit?.habitName);
                } else {
                    NotificationService.deleteNotification(habit?.habitName);
                    NotificationService.createNotification(
                        habitInput,
                        frequencyInput,
                        dayNotification,
                        timeNotification
                    );
                }

                navigation.navigate("Home", {
                    updatedHabit: `Updated in ${habit?.habitArea}`,
                });
            });
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity
                        style={styles.backPageBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require("../../assets/icons/arrowBack.png")}
                            style={styles.arrowBack}
                        />
                    </TouchableOpacity>
                    <View style={styles.mainContent}>
                        <Text style={styles.title}> Configurações {"\n"} de hábito </Text>
                        <Text style={styles.inputText}>Área</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.area}>{habit?.habitArea}</Text>
                        </View>
                        <Text style={styles.inputText}> Hábito </Text>
                        <SelectHabit habit={habit} habitInput={setHabitInput} />
                        <Text style={styles.inputText}> Frequência </Text>
                        <SelectFrequency habitFrequency={habit?.habitFrequency} frequencyInput={setFrequencyInput} />
                        {frequencyInput === "Mensal" ? null : (
                            <Notification
                                notificationToggle={notificationToggle}
                                setNotificationToggle={setNotificationToggle}
                            />
                        )}

                        {notificationToggle ? (
                            frequencyInput === "Mensal" ? null : (
                                <TimeDatePicker
                                    frequency={frequencyInput}
                                    dayNotification={dayNotification}
                                    timeNotification={timeNotification}
                                    setDayNotification={setDayNotification}
                                    setTimeNotification={setTimeNotification}
                                />
                            )
                        ) : null}

                        {create === false ? (
                            <UpdateExcludeButtons
                                handleUpdate={handleUpdateHabit}
                                habitArea={habit?.habitArea}
                                habitInput={habitInput}
                            />
                        ) : (
                            <View style={styles.configButton}>
                                <DefaultButton
                                    buttonText={"Criar"}
                                    handlePress={handleCreateHabit}
                                    width={250}
                                    height={50}
                                />
                            </View>
                        )}
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    backPageBtn: {
        width: 40,
        height: 40,
        margin: 25,
        marginTop: 60
    },
    arrowBack: {
        width: 40,
        height: 40,
    },
    mainContent: {
        width: 250,
        alignSelf: "center",
        marginTop: -5
    },
    configButton: {
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontSize: 30,
    },
    inputText: {
        color: "white",
        fontSize: 16,
        marginTop: 35,
        marginBottom: 10,
        marginLeft: 5,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    area: {
        color: "#BBBBBB",
        fontSize: 15,
    },
})