import React from "react";
import {
    View,
    Text,
    Image,
} from 'react-native';

import { ButtonIcon } from "../../components/ButtonIcon";
import IlustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Background } from '../../components/Background';

export function SignIn() {
const navigation = useNavigation();

    function handlesSignIn() {
        navigation.navigate('Home');
    }
    return (
        <Background>
        <View style={styles.container}>
            <Image source={IlustrationImg}
            style={styles.image}
            resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conctese-se{`\n`}
                    e organize suas{`\n`}
                    jogatinas
                    
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com seus amigos 
                </Text>
                <ButtonIcon 
                title="Entrar com Discoder"
                onPress={handlesSignIn}
                 />
            </View>
        </View>
        </Background>
    ); 
     
}