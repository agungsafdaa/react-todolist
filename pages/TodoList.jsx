import React, { useState } from "react";
import Paper from "../component/Paper";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import Todos from "../component/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning react!", isCompleted: false },
    { text: "Learning react Hooks!", isCompleted: false },
    { text: "Learning Styling in react!", isCompleted: false }
  ]);
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value, isCompleted: false }];
    setTodos(addedTodo);
  };
  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };
  const clearTodos = () => setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);
  console.log("todos", todos);
  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodos={clearTodos} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

//  <Paper>
//    <Header prop(namaterserah)={showAddToggle}Nama function>
//       <Header showAddToggle={showAddToggle} />
//       <TodoForm addTodo={addTodo} />
//       <Todos todos={todos} />
//     </Paper>
///

export default TodoList;
