import React from "react";
import { View,Text } from 'react-native';
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage="https://github.com/matimbejose.png"/>
            <View>
            <View style={ styles.user }>
                <Text style={styles.greeting}>
                      ola,
                     </Text>
                     <View>
                         
                     </View>
                     <Text style={styles.username}>
                             Matimbe
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje e dia de vetoria
                </Text>
            </View>
            </View>
    )
}