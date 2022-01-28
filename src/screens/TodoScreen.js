import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {Button} from "react-native";

const TodoScreen = ({goBack, todo}) => {
    return (
        <View>
            <Text style={styles.Title}>{todo.title}</Text>
            <Button title="Назад" onPress={goBack}/>
        </View>
    );
};

const styles = StyleSheet.create({
    Title: {
        paddingBottom: 20
    }
})

export default TodoScreen;