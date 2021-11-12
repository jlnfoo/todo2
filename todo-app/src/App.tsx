import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
};

// what was done
//1. state of taskList was previously set to mockTaskList, it is now an empty array
//2. state for id set to 0
//3. setId added to onClick function at "add task" button

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
    <div className="appContent">
      <div className="addTask">
        <h1>Add Task</h1>
        <input
          type="text"
          placeholder="eat homework, walk cat, feed doge...."
          value={task}
          onChange={handleChange}
        />
        <button
          className="addBtn btn"
          onClick={() => {
            addTask();
            setId(id + 1);
          }}
        >
          Add to list
        </button>
      </div>
      <div className="todolist">
        <h2>Todo List</h2>
        <ul>
          {taskList.map((task) => (
            <li>
              {task.taskName}
              <button className="shiftBtn btn" onClick={() => shiftUp(task.id)}>
                Up
              </button>
              <button
                className="shiftBtn btn"
                onClick={() => shiftDown(task.id)}
              >
                Down
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
