import React, { useState } from "react";
import Paper from "../component/Paper";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import Todos from "../component/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning react!" },
    { text: "Learning react Hooks!" },
    { text: "Learning Styling in react!" }
  ]);
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];
    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);
  console.log("Showadd", showAdd);
  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} />
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
