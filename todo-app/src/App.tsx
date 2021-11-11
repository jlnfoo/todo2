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
    updateCompletedList([...completedList]);
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
        {completedList.map((task) => {
          <li>{task.taskName}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
