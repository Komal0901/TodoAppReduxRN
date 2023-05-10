import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TodoInput from '../Components/TodoInput';
import TodoList from '../Components/TodoList';
const stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="TodoInput">
        <stack.Screen name="TodoInput" component={TodoInput} />
        <stack.Screen name="TodoList" component={TodoList} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
