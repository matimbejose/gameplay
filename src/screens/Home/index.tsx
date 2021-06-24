import React from "react";
import { View,FlatList,Text } from "react-native";
import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { styles } from "./styles";
import { useState } from "react";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from '../../components/Background';
import { useNavigation } from "@react-navigation/native";


export function Home() {
    const [ category, setCategory ] = useState(''); 
    const navigation = useNavigation();
    const appointments = [
  {
        id: '1',
        guild: {
            id: '1',
            name: 'Lendarios',
            icon: null,
            owner: true
        },
        category: '1',
        date: '22/10 as 16:30',
        description: 'E hoje que vamos challenger sem perder um partida na rua md10'
    },
    {
    id: '2',
    guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true
    },
    category: '1',
    date: '22/10 as 16:30',
    description: 'E hoje que vamos challenger sem perder um partida na rua md10'
}
]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') :setCategory(categoryId);
    }
    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    return(
        <Background>
          <View style={styles.header}>
              <Profile />
              <ButtonAdd />
          </View>

             <CategorySelect
                CategorySelected={category}
                setCategory={handleCategorySelect}
              />

              <View style={styles.content}> 
                <ListHeader
                  title="Partidas agendadas"
                  subtitle="Total 6"
                  />
              
                  <FlatList 
                  data={appointments}
                  keyExtractor={item => item.id}
                  renderItem={({ item })=> (
                      <Appointment data= {item}
                      onPress={handleAppointmentDetails}
                      
                      />
                      )}
                      ItemSeparatorComponent={() => <ListDivider /> }
                      style={styles.matches}
                      showsVerticalScrollIndicator={false}
                      />
              </View>
          </Background>
    );
}