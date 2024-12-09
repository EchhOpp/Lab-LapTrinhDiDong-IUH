import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, StyleSheet} from 'react-native';

const Screen01 = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = [
    {email: 'user1@example.com', password: '12345'},
    {email: 'user2@example.com', password: '12345'},
    {email: 'user3@example.com', password: '12345'},
    {email: 'user4@example.com', password: '12345'},
    {email: 'user5@example.com', password: '12345'},
  ];

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      navigation.navigate('Screen02'); // Chuyển đến Screen02
    } else {
      Alert.alert('Error', 'Email or password is incorrect!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Continue" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  title: {fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20},
  input: {borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5},
});

export default Screen01;
