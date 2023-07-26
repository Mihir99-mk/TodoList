import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const UpdateTodoScreen = ({ route, navigation }) => {
  const { todo, onUpdateTodo } = route.params;
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleUpdateTodo = () => {
    if (updatedTodo.trim() !== '') {
      onUpdateTodo(updatedTodo);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Update Todo"
        value={updatedTodo}
        onChangeText={(text) => setUpdatedTodo(text)}
      />
      <Button title="Save Todo" onPress={handleUpdateTodo} />
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

export default UpdateTodoScreen;
