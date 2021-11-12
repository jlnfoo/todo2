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
  const newMainList: MyTask[] = [];

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
    let removedItem;

    //loop through objects in taskList
    for (let i = 0; i < taskList.length; i++) {
      //set new variable name for each object
      const myCurrentTask = taskList[i];

      //if id of object matches taskId
      if (myCurrentTask.id === taskId) {
        //give that object a new var name
        removedItem = myCurrentTask;
      } else {
        //if id of object doesnt match taskId, push that object to newMainList
        newMainList.push(myCurrentTask);
      }
    }
    // if object matches taskId, we give it a new var name of removedItem, then push this removedItem to end of newMainList
    if (removedItem) {
      newMainList.push(removedItem);
    }

    setTaskList(newMainList);
  };

  const shiftUp = (taskId: number | undefined) => {
    if (taskId === undefined) return;
    let removed;

    for (let j = 0; j < taskList.length; j++) {
      if (taskList[j].id === taskId) {
        removed = taskList[j];
      } else {
        newMainList.push(taskList[j]);
      }
    }

    if (removed) {
      newMainList.unshift(removed);
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
            <button onClick={() => shiftUp(task.id)}>Up</button>
            <button onClick={() => shiftDown(task.id)}>Down</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
