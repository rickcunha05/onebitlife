import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton";
import ExplanationCard from "../../Components/Explanation/ExplanationCard";
import ChangeNavigationService from "../../Services/ChangeNavigationService";

export default function AppExplanation() {
    const navigation = useNavigation()
    const [showHome, setShowHome] = useState("false");
    const startDate = new Date();
    const month = `${startDate.getMonth() + 1}`.padStart(2, "0");
    const day = `${startDate.getDate()}`.padStart(2, "0");
    const appStartData = `${startDate.getFullYear()}-${month}-${day}`;
    function handleNavHome() {
        navigation.navigate("Home")
    }
    function handleSetShowHome() {
        if (showHome !== "true") {
            ChangeNavigationService.setShowHome({ showHome: "true", appStartData })
                .then(() => console.log(`Sucesso! ${showHome} ${appStartData}`))
                .catch((err) => console.log(err));
            setShowHome("true");
            handleNavHome();
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center", marginTop: 40 }}>
                    <Text style={styles.title}>
                        Antes deixa {"\n"} eu te explicar...
                    </Text>
                    <ExplanationCard />
                    <Text style={styles.subTitle}>
                        Pronto (a) para melhorar sua qualidade de vida?
                    </Text>
                    <Text style={styles.description}>
                        Na proxima tela você vai poder escolher {"\n"}
                        seus 4 hábitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleSetShowHome}
                        width={250}
                        height={50}
                    />
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
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 40
    },
    subTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        color: "white",
        textAlign: "center",
        marginBottom: 30,
    }
})