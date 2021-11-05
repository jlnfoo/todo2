import React from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list
// 2. add a new task to the mock list using an input

const App = () => {
  const [taskList, setTaskList] = React.useState(mockTaskList);

  const handleClick = () => {
    console.log("works!");
  };
  return (
    <div>
      <h1>My Todo List</h1>

      <ul>
        {taskList.map((task) => (
          <li onClick={handleClick}>{task.taskName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
