import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, removeTodo } from './actions';

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Add Todo" onPress={() => dispatch(addTodo({ id: Date.now(), text: 'New Todo' }))} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>{item.text}</Text>
            <Button title="Remove" onPress={() => dispatch(removeTodo(item.id))} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
