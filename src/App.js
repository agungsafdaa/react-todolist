import React from "react";
import "./styles.css";

import Paper from "../component/Paper";
import Header from "../component/Header";
import TodoForm from "../component/TodoForm";
import Todos from "../component/Todos";

export default function App() {
  return (
    <Paper>
      <Header></Header>
      <TodoForm></TodoForm>
      <Todos></Todos>
    </Paper>
  );
}
