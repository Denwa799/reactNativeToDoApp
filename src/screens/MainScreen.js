import React from 'react';
import {FlatList, StyleSheet, View, Image} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

const MainScreen = ({addTodo, todos, removeTodo, openTodo}) => {
    let content = (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({item}) => (
                <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
            )}
        />
    )

    if (todos.length === 0) {
        content = <View style={styles.imgWrap}>
            <Image style={styles.image} source={require('../../assets/no-items.png')}/>
        </View>
    }

    return (
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingBottom: 250
    },
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default MainScreen;