import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
  position?: number;
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

  // for every task in tasklist - map
  // if index of task we want to remove matches index of task.taskName - how do we identify task we want to remove?
  // remove task and push/concat to end of list or new list
  //do we put this whole function in an onClick event?

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
          <li onClick={handleClick}>{task.taskName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
