import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import {
    Text,
    View
} from 'react-native';
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action}: Props) {
    const { secondary100,secondary40 } = theme.colors;
    const navigation = useNavigation();
    function handleGpBack() {
        navigation.goBack();
    }
    return (
        <LinearGradient
        style={styles.container}
        colors={[secondary100, secondary40]}
        >
            <BorderlessButton onPress={handleGpBack}>
                 <Feather
                 name="arrow-left" 
                 size={24}
                 
                 />
            </BorderlessButton>
            <Text style={styles.title}>
                {title}
            </Text>
            {
                action &&
                <View>
                    { action }
                </View>


            }

        </LinearGradient>
    );
}