import React, { useReducer } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {count : state.count + 1};
    case DECREMENT: 
      return {count: state.count - 1};
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer( reducer, {count: 0} );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Count: {state.count}</Text>
        <Button title="Increment" onPress={() => dispatch({ type: INCREMENT })} />
        <Button title="Decrement" onPress={() => dispatch({ type: DECREMENT })} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;