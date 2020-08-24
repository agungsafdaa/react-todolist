import React from "react";
import "./styles.css";

import Paper from "../component/Paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn">Add</button>
        <h1 className="header-tittle">Todo list</h1>
        <button className="header-btn main-red-color">Clear</button>
      </section>

      <section className="add">
        <form className="add-form">
          <input type="text" className="add-input" />
          <button className="add-btn">Add</button>
        </form>
      </section>
      <section className="todos">
        <div className="todo">
          <span className="todo-text">Learning react</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning react</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning react</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning react</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning react</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning react</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning react</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning react</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning react</span>
        </div>
        <div className="todo">
          <span className="todo-text">Learning react</span>
        </div>
      </section>
    </Paper>
  );
}
