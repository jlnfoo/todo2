import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
};

//TO FIX
// 1. when new items are added to todolist, the todolist arr displayed in console is always short of 1 - the latest added task

const App = () => {
  const [taskList, setTaskList] = React.useState<MyTask[]>([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(0);
  const newMainList: MyTask[] = [];

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { id: id, taskName: task };
    setTaskList([...taskList, newTask]);
    setTask("");
    console.log(taskList); //when new tasks are added, the latest task obj is not displayed
  };

  const shiftDown = (taskId: number | undefined) => {
    // if (taskId === undefined) return;
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
    // if (taskId === undefined) return;
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
      <button
        onClick={() => {
          addTask();
          setId(id + 1);
        }}
      >
        Add
      </button>

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
