import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section ClassName="todos">
      {todos.length > 0 &&
      todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            text={todo.text}
            isCompleted={todo.isCompleted}
            completeTodo={completeTodo}
            index={index}
          />
        );
      })}
      {todos.length === 0 &&(
        <div ClassName="Todolistbutton"><h3>Silahkan tekan tombol add untuk menambahkan data</h3></div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
