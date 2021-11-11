import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list
// we know that the list is an array
// array -> .pop(), .push(), .shift(), .unshift() etc.
// .push() -> append to end of list
// [ ...array, item ];

// How to add task
// 1. collect task name from input
// <input /> -> collect task name from input
// onChangeHandler -> collect task name from input
// store task name in state
// 2. create task object
// { taskName: task }
// 3. append task object to existing task list
// taskList.push(task)

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
};

const App = () => {
  const [todoList, setTodoList] = React.useState<MyTask[]>(mockTaskList);
  const [task, setTask] = useState("");
  const [completedList, updateCompletedList] = React.useState<MyTask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  //onClick event for adding new task to todo list
  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask]);
    setTask("");
  };

  //onclick event for adding completed task to completed list
  const addToCompletedList = (taskId: number | undefined) => {
    const cList = [];
    const taskObj = { taskName: task };
    for (let i = 0; i < todoList.length; i++) {
      const allIndex = todoList.map((task) => task.id); //returns array of id - numbers

      if (allIndex[i] === taskId) {
        const taskMatched = todoList.filter((task) => {
          return task.id === taskId;
        });

        const taskMatchedObj = taskMatched.find((task) => task.id === taskId);
        console.log(taskMatchedObj); //object
        cList.push(taskMatchedObj);
        console.log(cList); //array
      }
    }
    updateCompletedList([...completedList, taskObj]);
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
        {todoList.map((task) => (
          <li onClick={() => addToCompletedList(task.id)}>{task.taskName}</li>
        ))}
      </ul>

      <h1> Completed List</h1>
      <ul>
        {completedList.map((task) => (
          <li>{task.taskName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

/**
 * src/App.tsx
  Line 70:35:  Array.prototype.map() expects a return value from arrow function  array-callback-return
 */
