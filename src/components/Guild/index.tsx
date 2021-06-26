import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./style";
import { GuildIcon } from "../GuildIcon";
import { View,Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";


export type GuildPops ={
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data:GuildPops;
}


export function Guild({data, ...rest}: Props){
    return (
        <TouchableOpacity
        style={styles.container}
        activeOpacity={0.7}
        {...rest}
        >
            <GuildIcon />
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>
                    <Text style={styles.type}>
                        {data.owner ? 'Adimistrador' : 'Covidado'}
                    </Text>
                </View>
            </View>
            <Feather
            name="chevron-right"
            color={theme.colors.heading}
            size={24}
             />
        </TouchableOpacity>
    );
}