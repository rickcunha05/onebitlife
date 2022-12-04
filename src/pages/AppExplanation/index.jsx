import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton";
import ExplanationCard from "../../Components/Explanation/ExplanationCard";

export default function AppExplanation(){
    function handlesSetShowHome(){
        console.log("Chegou na home")
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems:"center", marginTop:40}}>
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
        backgroundColor: "rgba(21, 21, 21, 0.98)",        
    },
    title:{        
        color: "white",
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