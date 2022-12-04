import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function EditHabit({habit, frequency, habitArea, checkColor}){

    function handleEditHabit(){
        console.log('Edit Habit')
    }

    function handleCheck(){
        console.log('Delete Habit $(habitArea)')
    }

    return(
        <TouchableOpacity 
            activeOpacity={0.9}
            style={styles.button}
            onPress={handleEditHabit}
        >
        <View style={styles.habitText}>
            <Text style={styles.habitTitle}>{habit}</Text>
            <Text style={styles.habitFrequency}>{frequency}</Text>
        </View>
        
        <TouchableOpacity style={[styles.check, {borderColor: checkColor}]} />                   

        </TouchableOpacity>
       
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#151515",
        borderRadius: 5,
        width: 320,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      habitTitle: {
        color: "white",
        fontWeight: "bold",
      },
    
      habitFrequency: {
        color: "white",
      },
      check: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 10,
      },
      checked: {
        width: 25,
        height: 25,
      },
})