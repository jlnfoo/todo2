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
    //1. strikethrough task when clicked
    const strikedList = taskList.map((task) => {
      //strikethrough task onClick
      return task.id === Number(taskId)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTaskList(strikedList);

    //2. remove task
    const matchedTask = taskList.filter((task) => task.id === taskId); //array of object that matched with clicked task
    const taskMatchedObj = matchedTask.find((task) => task.id === taskId); //gets obj from array

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i] === taskMatchedObj) {
        const removedTask = taskList.splice(i, 1); //returns array, only spliced in console though

        const removedTaskObj = removedTask.find((task) => task.id === taskId); //obtain object from array
        console.log(removedTaskObj); // output: spliced OBJECT
        const updatedList = taskList.concat(removedTask);
        return updatedList;
        // const updatedList = taskList.push(removedTaskObj); //why object cannot be pushed into tasklist (arr of objects)???????
        // console.log(updatedList);
      }
    }
    setTaskList(updatedList);
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
