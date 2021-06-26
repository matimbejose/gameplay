import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { GuildPops } from "../../components/Guild";


type Props ={
    handleGuildSelect: (guild: GuildPops) => void;
}

export function Guilds({ handleGuildSelect } : Props) {
    const guilds = [
        {
            id: '1',
            name: 'lendarios',
            icon: 'image.png',
            owner: true,
        },
        {
            id: '2',
            name: 'matimbe',
            icon: 'image.png',
            owner: true,
        }
    ];
    return (
        <View style={styles.container}>
            <FlatList 
            data={guilds}
            keyExtractor={ item => item.id}
            renderItem= {({ item }) => (
                <Guild
                 data={item}
                 onPress={() => handleGuildSelect(item)}
                 />
            )}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.guilds}
            />
        </View>
    );
}