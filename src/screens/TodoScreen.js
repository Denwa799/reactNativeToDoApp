import React from 'react';
import {StyleSheet, View, Text, Button} from "react-native";
import {THEME} from "../theme";
import AppCard from "../components/ui/AppCard";

const TodoScreen = ({goBack, todo}) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Ред.'/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Назад"
                            color={THEME.GREY_COLOR}
                            onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button title="Удалить"
                            color={THEME.DANGER_COLOR}
                            onPress={() => console.log('To Remove')}/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        paddingBottom: 10,
        fontSize: 20,
    },
    card: {
        marginBottom: 20,
        padding: 15,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '47%'
    }
})

export default TodoScreen;