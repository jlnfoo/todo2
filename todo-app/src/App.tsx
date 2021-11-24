import React, { useState } from "react";
import "./App.css";
import Todo from "../src/Components/Todo";
import AddTaskForm from "../src/Components/AddTaskForm";

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
};

const App = () => {
  return (
    <div>
      <AddTaskForm />
      <Todo />
    </div>
  );
};

export default App;
