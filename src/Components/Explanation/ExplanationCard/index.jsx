import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export default function ExplanationCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Através deste APP você vai consolidar {"\n"}
                4 hábitos de áreas fundamentais:
            </Text>

            {/* Bloco de hábitos para melhorar sua inteligencia */}

            <View style={styles.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/educationIcon.png')}
                    style={styles.icon}
                />
                <Text style={styles.description}>
                    <Text style={styles.mind}> Mente: </Text> Hábitos para melhorar sua
                    raciocínio lógico
                </Text>
            </View>

            {/* Bloco de hábitos para melhorar sua vida financeira */}

            <View style={styles.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/moneyIcon.png')}
                    style={styles.icon}
                />
                <Text style={styles.description}>
                    <Text style={styles.money}>Financeiro: </Text> Hábitos para te ajudar
                    a ter controle financeiro
                </Text>
            </View>

            {/* Bloco de hábitos para melhorar sua mais saudável */}

            <View style={styles.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/bodyIcon.png')}
                    style={styles.icon}
                />
                <Text style={styles.description}>
                    <Text style={styles.body}>Exercício: </Text> Hábitos para tornar
                    sua vida mais saudável
                </Text>
            </View>

            {/* Bloco de hábitos para deixar sua vida mais divertida */}

            <View style={styles.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/funIcon.png')}
                    style={styles.icon}
                />
                <Text style={styles.description}>
                    <Text style={styles.fun}>Diversão: </Text> Hábitos para deixar
                    sua vida {"\n"} mais divertida
                </Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#151515",
        width: 350,
        borderRadius: 25,
        padding: 30,
    },
    title: {
        fontWeight: "bold",
        color: "white",
        TextAlign: "center",
        fontSize: 16,
    },
    explanationContainer: {
        flexDirection: "row",
        marginTop: 30,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 5,
    },
    mind: {
        color: "#90B7F3",
        fontWeight: "bold",
    },
    money: {
        color: "#85bb65",
        fontWeight: "bold",
    },
    body: {
        color: "#FF0044",
        fontWeight: "bold",
    },
    fun: {
        color: "#FE7F23",
        fontWeight: "bold",
    },
    description: {
        color: "white",
    }

})