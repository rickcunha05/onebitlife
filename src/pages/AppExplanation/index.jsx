import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DefaultButton from "../../Components/Common/DefaultButton";

export default function AppExplanation(){
    function handlesSetShowHome(){
        console.log("Chegou na home")
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems:"center"}}>
                    <Text style={style.title}>
                        Antes deixa {"\n"} eu te explicar...
                    </Text>
                    <Text style={styles.subTitle}>
                        Pronto (a) para subir de nível na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na proxima tela você vai poder escolher {"\n"} 
                        seus 4 hábitos de forma individual.
                    </Text>
                    <DefaultButton 
                        buttonText={"Continuar"}
                        handlePress={handlesSetShowHome}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "rgba(21, 21, 21, 0.98)"
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        marginVertical: 40
    },
    subTitle:{
        color: "white",
        fontWeight:"bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom:10,
    },
    description:{
        color: "white",
        textAlign:"center",
        marginBottom: 30,
    }
})