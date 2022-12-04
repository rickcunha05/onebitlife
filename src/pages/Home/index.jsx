import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { ScrollView, Text, View, StyleSheet } from "react-native"
import LifeStatus from "../../Components/Common/LifeStatus"
import StatusBar from "../../Components/Home/StatusBar"
import CreateHabit from "../../Components/Home/CreateHabit"
import EditHabit from "../../Components/Home/EditHabit"

export default function Home() {
    const navigation = useNavigation()
    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    function handleNavAppExploration() {
        navigation.navigate("AppExplanation")
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.dailyChecks}> 20 dias - 80 checks</Text>
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