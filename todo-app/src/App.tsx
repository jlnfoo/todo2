import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list

/**
 * export const mockTaskList = [
    { id: 1, taskName: "hello", complete: false },
    { id: 2, taskName: "goodbye", complete: false},
    { id: 3, taskName: "hello & goodbye", complete: false },
    { id: 4, taskName: "foo" , complete: false}
  ];
 */

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

  const shiftDown = (taskId: number | undefined) => {
    if (taskId === undefined) return;

    const newMainList: MyTask[] = [];
    let removedItem;

    for (let i = 0; i < taskList.length; i++) {
      const myCurrentTask = taskList[i];

      if (myCurrentTask.id === taskId) {
        removedItem = myCurrentTask;
      } else {
        newMainList.push(myCurrentTask);
      }
    }

    if (removedItem) {
      newMainList.push(removedItem);
    }

    setTaskList(newMainList);
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
          <li>
            {task.taskName}
            <button>Up</button>
            <button onClick={() => shiftDown(task.id)}>Down</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
