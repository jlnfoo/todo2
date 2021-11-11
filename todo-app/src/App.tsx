import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list

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
    const completedList = [...todoList];

    for (let i = 0; i < completedList.length; i++) {
      const allIndex = completedList.map((task) => task.id); //returns array of id - numbers
      //id(number), taskId (number)
      if (allIndex[i] === taskId) {
        //filters object with same id as target, returns as array of object
        const taskMatched = completedList.filter((task) => {
          return task.id === taskId;
        });
        console.log(taskMatched);
        completedList.concat(taskMatched);
      }
    }
    updateCompletedList([...completedList]); //IS THE ERROR HERE?
  };

  // //onclick event for removing completed task to completed list, and pushing it back to todolist
  // const removeFromCompletedList = (taskId: number | undefined) => {
  //   const completedList = [...todoList]; // rest of Task List

  //   //  Argument of type 'number | undefined' is not assignable to parameter of type 'MyTask'.
  //   //  Type 'undefined' is not assignable to type 'MyTask'.ts(2345)
  //   const taskIndex = completedList.indexOf(taskId); // find index of task

  //   if (taskIndex >= 0) {
  //     //if taskIndex of what we want to remove exists,
  //     const removedTask = completedList.splice(taskIndex, 1); //remove task from list,
  //     console.log(removedTask);
  //     todoList.push(removedTask); //add it back to todo list
  //     updateCompletedList(completedList); // update completed task list
  //     setTodoList([...todoList, removedTask]); //update todo list
  //   }
  // };

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
        {completedList.map((task) => {
          // <li onClick={() => removeFromCompletedList(task.id)}>
          <li>{task.taskName}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
