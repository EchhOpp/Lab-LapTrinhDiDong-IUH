import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, TextInput } from 'react-native';
import { store } from './store';
import { addTodo } from './todoSlice';

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const Main = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  return (
    <View style={{ margin: 10 }}>
      <TextInput
        placeholder={'Them nhiem vu'}
        style={{
          borderColor: 'grey',
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
        }}
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add task" onPress={handleAddTask} />

      {todos.map((temp) => (
        <View key={temp.id}>
          <Text>{temp.text}</Text>
        </View>
      ))}
    </View>
  );
};
