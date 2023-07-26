// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TodoListScreen from './screens/TodoListScreen';
import AddTodoScreen from './screens/AddTodoScreen';
import UpdateTodoScreen from './screens/UpdateTodoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoList">
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="AddTodo" component={AddTodoScreen} />
        <Stack.Screen name="UpdateTodo" component={UpdateTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
