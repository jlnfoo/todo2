import React from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list
// 2. add a new task to the mock list using an input

const App = () => {
  const [taskList, setTaskList] = React.useState(mockTaskList);

  return (
    <div>
      <h1>My Todo List</h1>

      <ul>
        {taskList.map((task) => (
          <li>{task.taskName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
