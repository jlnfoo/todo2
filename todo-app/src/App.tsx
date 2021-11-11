import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
  complete?: boolean;
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

  const handleClick = (taskId: number | undefined) => {
    let strike = taskList.map((task) => {
      //strikethrough task onClick
      return task.id === Number(taskId)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTaskList(strike);
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
          <li
            onClick={() => handleClick(task.id)}
            className={task.complete ? "task strike" : "task"}
          >
            {task.taskName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
