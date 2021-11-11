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
  const addToCompletedList = (todoList, taskId: number | undefined) => {
    const completedList = [...todoList];
    return completedList.push(taskId);
  };

  //onclick event for removing completed task to completed list, and pushing it back to todolist
  const removeFromCompletedList = (todoList, taskId: number | undefined) => {
    const completedList = [...todoList]; // rest of Task List
    const taskIndex = todoList.indexOf(taskId); // find index of task

    if (taskIndex >= 0) {
      //if taskIndex of what we want to remove exists,
      const removedTask = completedList.splice(taskIndex, 1); //remove task from list,
      todoList.push(removedTask); //add it back to todo list
      updateCompletedList(completedList); // update completed task list
      setTodoList([...todoList, removedTask]); //update todo list
    }
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
          <li onClick={() => addToCompletedList(todoList, task.id)}>
            {task.taskName}
          </li>
        ))}
      </ul>

      <h1> Completed List</h1>
      <ul>
        {completedList.map((task) => {
          <li
            onClick={() => {
              removeFromCompletedList(todoList, task.id);
            }}
          >
            {task.taskName}
          </li>;
        })}
      </ul>
    </div>
  );
};

export default App;
