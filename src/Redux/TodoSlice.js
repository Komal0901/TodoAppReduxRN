import {createSlice} from '@reduxjs/toolkit';
const TodoSlice = createSlice({
  name: 'TodoList', //should be string
  initialState: {
    Todos: [],
    loading: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.Todos.push(action.payload);
      state.loading = false;
      console.log(state);
    },
    removeTodo: state => {},
    deleteAll: () => {},
    editTodo: () => {},
  },
});
export default TodoSlice.reducer;
export const {addTodo, removeTodo, deleteAll, editTodo} = TodoSlice.actions;
