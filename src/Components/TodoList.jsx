import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const TodoList = () => {
  const todoData = useSelector(state => state.TodoApp.Todos);
  console.log(todoData);
  return (
    <View>
      <Text style={styles.heading}>📙Todo List📙</Text>
      <FlatList
        data={todoData}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={styles.list}>
              <Text style={styles.listItem}>{item}</Text>
              <View
                style={{
                  position: 'absolute',
                  right: 20,
                  top: 3,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.btnTxt}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, {backgroundColor: 'red'}]}>
                  <Text style={styles.btnTxt}>⚔️</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
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
  list: {
    borderWidth: 3,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    margin: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItem: {
    fontSize: 20,
    textAlignVertical: 'center',
    paddingLeft: 10,
    color: 'purple',
  },
  button: {
    borderWidth: 1,
    width: '50%',
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    margin: 5,
  },
  btnTxt: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
});
