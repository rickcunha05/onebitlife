import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { ScrollView, Text, View, StyleSheet } from "react-native"
import LifeStatus from "../../Components/Common/LifeStatus"
import StatusBar from "../../Components/Home/StatusBar"
import CreateHabit from "../../Components/Home/CreateHabit"
import EditHabit from "../../Components/Home/EditHabit"
import ChangeNavigationService from "../../Services/ChangeNavigationService";
import db from "../../Database";

export default function Home({ route }) {
    const navigation = useNavigation()
    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    const [robotDaysLife, setRobotDaysLife] = useState();
    const [checks, setChecks] = useState();
    const [gameOver, setGameOver] = useState(false);
    const today = new Date();

    function handleNavAppExploration() {
        navigation.navigate("AppExplanation")
    }
    useEffect(() => {
        // HabitsService.findByArea("Mente").then((mind) => {
        //     setMindHabit(mind[0]);
        // });
        // HabitsService.findByArea("Financeiro").then((money) => {
        //     setMoneyHabit(money[0]);
        // });
        // HabitsService.findByArea("Corpo").then((body) => {
        //     setBodyHabit(body[0]);
        // });
        // HabitsService.findByArea("Humor").then((fun) => {
        //     setFunHabit(fun[0]);
        // });

        // if (excludeArea) {
        //     if (excludeArea == "Mente") {
        //         setMindHabit(null);
        //     }
        //     if (excludeArea == "Financeiro") {
        //         setMoneyHabit(null);
        //     }
        //     if (excludeArea == "Saúde") {
        //         setBodyHabit(null);
        //     }
        //     if (excludeArea == "Humor") {
        //         setFunHabit(null);
        //     }
        // }

        ChangeNavigationService.checkShowHome(1)
            .then((showHome) => {
                const month = `${today.getMonth() + 1}`.padStart(2, "0");
                const day = `${today.getDate()}`.padStart(2, "0");
                const formDate = `${today.getFullYear()}-${month}-${day}`;
                const checkDays =
                    new Date(formDate) - new Date(showHome.appStartData) + 1;

                if (checkDays === 0) {
                    setRobotDaysLife(checkDays.toString().padStart(2, "0"));
                } else {
                    setRobotDaysLife(parseInt(checkDays / (1000 * 3600 * 24)));
                }
            })
            .catch((err) => console.log(err));
    }, [route.params]);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.dailyChecks}>❤️ 0{robotDaysLife} {robotDaysLife === "01" ? "dias" : "dia"} - ✅ 80 checks</Text>
                    <LifeStatus />
                    <StatusBar />
                    {/* inicio validação ou criação de hábitos da mente*/}
                    {mindHabit ? (
                        <EditHabit
                            habit={mindHabit?.habitName}
                            frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency}`}
                            habitArea={mindHabit?.habitArea}
                            checkColor="#90b7f3"
                        />
                    ) :
                        <CreateHabit habitArea="Mente" borderColor="#90b7f3" />
                    }

                    {/* inicio validação ou criação de hábitos da financeiros    */}

                    {moneyHabit ? (
                        <EditHabit
                            habit={moneyHabit?.habitName}
                            frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`}
                            habitArea={moneyHabit?.habitArea}
                            checkColor="#85BB65"
                        />
                    ) :
                        <CreateHabit habitArea="Financeiro" borderColor="#85BB65" />
                    }

                    {/* inicio validação ou criação de hábitos da Saúde    */}

                    {bodyHabit ? (
                        <EditHabit
                            habit={bodyHabit?.habitName}
                            frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency}`}
                            habitArea={bodyHabit?.habitArea}
                            checkColor="#FF0044"
                        />
                    ) :
                        <CreateHabit habitArea="Saúde" borderColor="#FF0044" />
                    }

                    {/* inicio validação ou criação de hábitos da Diversão    */}

                    {funHabit ? (
                        <EditHabit
                            habit={funHabit?.habitName}
                            frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency}`}
                            habitArea={funHabit?.habitArea}
                            checkColor="#FE7F23"
                        />
                    ) :
                        <CreateHabit habitArea="Humor" borderColor="#FE7F23" />
                    }
                </View>
                <Text
                    style={styles.explanationText}
                    onPress={() => handleNavAppExploration()}
                >
                    ver explicação novamente
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    dailyChecks: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 40,
    },
    explanationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25,
    }
})