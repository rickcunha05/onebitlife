import React from "react";
import { ScrollView } from "react-native";

export default function Start(){
    return(
        <view>
            <ScrollView showsVerticalScrollIndicator={false}>
                <view>
                    <Image 
                        source={require("../../assets/logo3.png")}
                    />
                    <Text> 
                      Vamos transformar sua vida {"/n"} em jogo, buscando sempre{""}
                      {"/n"} o melhor nível.
                    
                   </Text>
                </view>
            </ScrollView>
        </view>
    )
}