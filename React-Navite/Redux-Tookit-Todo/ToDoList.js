// src/ToDoList.js
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from './todoSlice';

const ToDoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.todoItem}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => dispatch(toggleTodo(item.id))}
          >
            <Text style={[styles.task, item.completed && styles.completed]}>
              {item.task}
            </Text>
          </TouchableOpacity>
          <Button
            title="Delete"
            color="#e74c3c"
            onPress={() => dispatch(deleteTodo(item.id))}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  task: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
});

export default ToDoList;
