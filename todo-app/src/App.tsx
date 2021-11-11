import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list

// 1. create a function to add and remove task - it should take in 2 param (original list and taskName)
// 2. in each function, declare new const that is an arr that copies the original arraylist (for e.g const newTaskList = [...taskList])
// 3. For adding : Do a push to this new arr - e.g newTaskList.push(item)

// 4. For removing : create a const called taskIndex = taskList.indexOf(taskName)
// a. then declare a const that is an arr that copies the original arraylist - e.g anotherTaskList = [...taskList]
// b. if taskIndex => 0 {anotherTaskList.splice(taskIndex,1) return anotherTaskList}

//5. Wrap all this in an onclick event that takes in id parameter
//Example:
/*
const App = () => {
  const handleOnClick = (taskId: number) => {
    // console.log('i cliked on taskId:', taskId);
  }

  return (
    <div>
      <ul>
        <li onClick={() => handleOnClick(id)}>foo</li>
        <li>bar</li>
        <li>baz</li>
        <li>foobar</li>
      </ul>
    </div>
  )
}
*/

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

      //this should be another on click event
      todoList.push(removedTask); //add it back to todo list
      updateCompletedList(completedList); //return updated completed task list

      //need to update todolist as well
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
