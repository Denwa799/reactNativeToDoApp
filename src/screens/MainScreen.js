import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    return (
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo}/>

            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => (
                    <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
            container: {
            paddingVertical: 10,
            paddingHorizontal: 10,
            paddingBottom: 250
            },
})

export default MainScreen;