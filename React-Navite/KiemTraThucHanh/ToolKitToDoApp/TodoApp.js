import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, fetchTodos } from './redux/todoSlice';

const TodoApp = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos.items);
  const status = useSelector((state) => state.todos.status);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo({
        id: Date.now().toString(),
        title: text,
      }));
      setText('');
    }
  };

  const handleFetchTodos = () => {
    dispatch(fetchTodos());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Add a new todo"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <Button title="Fetch Todos" onPress={handleFetchTodos} />
      {status === 'loading' && <Text>Loading...</Text>}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default TodoApp;