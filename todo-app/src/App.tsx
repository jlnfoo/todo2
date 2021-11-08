import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
  position?: number;
  isClicked?: boolean;

};

const App = () => {
  const [taskList, setTaskList] = React.useState<MyTask[]>(mockTaskList);
  const [task, setTask] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTaskList([...taskList, newTask]);
    setTask("");
  };

  const handleClick = () => {
    // 1. find index of obj in array
    const taskIndex = taskList.findIndex((task) => task.taskName === "foo");

    // 2. remove obj from array
    const removedTask = taskList.splice(taskIndex, 1);
    console.log(removedTask);
    console.log(taskList);

    // 3. push obj to end of array
    // taskList.push(removedTask); //can't push removedTask as it is an array, need to obtain object first
  };

  const strikeThrough = () => {};

  return (
    <div>
      <h1>Add Tasks</h1>
      <input
        type="text"
        placeholder="task..."
        value={task}
        onChange={handleChange}
      />
      <button onClick={addTask}> Add </button>

      <h1>My Todo List</h1>
      <ul>
        {taskList.map((task) => (
          <li
            onClick={() => {
              handleClick();
              strikeThrough();
            }}
          >
            {task.taskName}
          </li>

        ))}
      </ul>
    </div>
  );
};

export default App;
