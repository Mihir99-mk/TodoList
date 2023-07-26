import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTodoScreen = ({ navigation, route }) => {
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      route.params.onAddTodo(todo);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddTodoScreen;
