import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../Redux/TodoSlice';

const TodoList = ({navigation}) => {
  const [tododata, setTododata] = useState('');
  const dispatch = useDispatch();
  const addTask = param => {
    if (!tododata) {
      alert('Please enter your task');
    } else {
      dispatch(addTodo(param));
      setTododata('');
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={styles.heading}>📙Todo App📙</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your tasks"
        placeholderTextColor="purple"
        onChangeText={e => setTododata(e)}
        value={tododata}
        onSubmitEditing={() => addTask(tododata)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnTxt} onPress={() => addTask(tododata)}>
          Add Task
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {position: 'absolute', bottom: 0, width: '100%'},
        ]}>
        <Text
          style={[styles.btnTxt]}
          onPress={() => navigation.navigate('TodoList')}>
          View Tasks
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoList;
const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 25,
    textDecorationLine: 'underline',
    color: 'blue',
    fontWeight: '800',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderBottomColor: 'black',
    fontSize: 20,
    marginVertical: 50,
  },
  button: {
    borderWidth: 1,
    width: '50%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  btnTxt: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
});
