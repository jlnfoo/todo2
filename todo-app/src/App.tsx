import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
};

/*
TODO

DONE 1. created completedList state, set to empty arr

SHIFTDOWN - MOVE ITEM FROM TODO TO COMPLETED
1. when down button is clicked, task will shift from todo list to completed list -> todo list should only have down button
- get index of task , remove the task, push the task to completedlist
2. need to update BOTH todo list and completed list

SHIFTUP - MOVE ITEM FROM COMPLETED TO TODO
1. when up button is clicked, task will shift from completed list to todo list -> completed list should only have up button
- get index of task , remove the task, unshift (or push should work too?) the task to todolist
2. need to update BOTH todo list and completed list
*/

const App = () => {
  const [taskList, setTaskList] = React.useState<MyTask[]>([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(0);
  const [completedList, setCompletedList] = React.useState<MyTask[]>([]);
  const newMainList: MyTask[] = [];

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { id: id, taskName: task };
    setTaskList([...taskList, newTask]);
    setTask("");
    setId(id + 1);
    console.log(taskList); //when new tasks are added, the latest task obj is not displayed
  };

  //todo -> completed
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
        console.log(myCurrentTask);
      } else {
        //if id of object doesnt match taskId, push that object to newMainList
        newMainList.push(myCurrentTask);
        console.log(newMainList);
      }
    }
    setTaskList(newMainList);

    // if object matches taskId, we give it a new var name of removedItem, then push this removedItem to completedList
    if (removedItem) {
      completedList.push(removedItem);
      console.log(completedList);
    }

    setCompletedList(completedList); //is this part wrong? completedlist returns removed item in console but does not display on the app
  };

  //completed -> todo
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

      <h1>Completed List</h1>
      <ul>
        {completedList.map((task) => {
          <li>{task.taskName}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
