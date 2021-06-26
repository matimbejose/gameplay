import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import {
    ImageBackground,
    Text,
    View,
    FlatList
} from 'react-native';


export function AppointmentDetails(){
    // vamos consumir da aip
    const members = [
        {
        id: '1',
        username: 'jose',
        avatar_url: 'https://github.com/matimbejose.png',
        status: 'online'
        },
        {
            id: '2',
            username: 'matimbe',
            avatar_url: 'https://github.com/matimbejose.png',
            status: 'offline'
        }
    ]
    return (
        <Background>
            <Header
            title="Detalhes"
            action={
                <BorderlessButton>
                    <Fontisto 
                    name="share"
                    size={24}
                    color={theme.colors.primary}
                    />
                </BorderlessButton>
            }
             />
             <ImageBackground
          source={BannerImg}
         style={styles.banner}
              >
                  <View style={styles.bannerContent}> 
                  <Text style={styles.title}>
                Lendarios
                  </Text>
                  <Text style={styles.subtitle}>
                      E hoje que vamos chegar ao challenger sem perder da md10
                  </Text>
                  </View>
           </ImageBackground>
           <ListHeader
           title="jogadores"
           subtitle="Total 3"
           />
           <FlatList
           data={members}
           keyExtractor={item => item.id}
           renderItem={( { item } ) => (
               <Member data={item} />
           )}
           ItemSeparatorComponent={()=> <ListDivider />}
           style={styles.members}
           />
           <View style={styles.footer}>
               <ButtonIcon title="Entrar na partida"/>
           </View>
           
        </Background>
    );
}