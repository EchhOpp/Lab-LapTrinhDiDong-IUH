import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const DetailScreen = ({route}) => {
  const { id } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailScreen;