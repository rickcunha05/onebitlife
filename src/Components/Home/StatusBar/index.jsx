import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { ProgressBar } from "react-native-paper";

export default function StatusBar() {
    return (
        <View style={styles.container}>

            {/* Inicio Statusbar education */}
            <View style={styles.statusBarContainer}>
                <Image
                    source={require('../../../assets/icons/educationIcon.png')}
                    style={styles.icon}
                />
                <ProgressBar progress={1} color={"#90B7f3"} style={styles.progress} />
            </View>

            {/* Inicio Statusbar finance */}

            <View style={styles.statusBarContainer}>
                <Image
                    source={require('../../../assets/icons/moneyIcon.png')}
                    style={styles.icon}
                />
                <ProgressBar progress={0} color={"#85bb65"} style={styles.progress} />
            </View>

            {/* Inicio Statusbar body */}

            <View style={styles.statusBarContainer}>
                <Image
                    source={require('../../../assets/icons/bodyIcon.png')}
                    style={styles.icon}
                />
                <ProgressBar progress={0} color={"#FF0044"} style={styles.progress} />
            </View>

            {/* Inicio Statusbar fun */}

            <View style={styles.statusBarContainer}>
                <Image
                    source={require('../../../assets/icons/funIcon.png')}
                    style={styles.icon}
                />
                <ProgressBar progress={0} color={"#FE7F23"} style={styles.progress} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#151515",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    }, statusBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },
    progress: {
        borderRadius: 10,
        width: 250,
        height: 8,
    },
    icon: {
        width: 25,
        height: 25,
        marginTop: 10,
        marginRight: 5,
    },
})