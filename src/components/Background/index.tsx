import React, { ReactNode } from "react";
import {} from 'expo-linear-gradient';
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "./styles";
import { theme } from "../../global/styles/theme";




type Props = {
    children: ReactNode;
}

export function Background({ children }: Props) {
    const { secondary80, secondary100 } = theme.colors;
    return(
        <LinearGradient
        style={Styles.container}
        colors={[secondary80,secondary100]}
        >
            { children }
        </LinearGradient>

    )
};