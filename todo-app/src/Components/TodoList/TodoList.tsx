import React from "react";
import "../../App.css";
import { MyTask } from "../../types";

export const TodoList: React.FC = () => {
  const [taskList, setTaskList] = React.useState<MyTask[]>([]);

  //SHIFT UP WITHIN TODO LIST
  const shiftUpTodoList = (taskId: number | undefined) => {
    let removedItem;
    const newTodoList: MyTask[] = [];

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === taskId) {
        removedItem = taskList[i];
      } else {
        newTodoList.push(taskList[i]);
      }
    }
    if (removedItem) {
      newTodoList.unshift(removedItem);
    }
    setTaskList(newTodoList);
  };

  //SHIFT DOWN TODO LIST
  const shiftDownTodoList = (taskId: number | undefined) => {
    const updatedTodoList: MyTask[] = [];

    let removedItem;
    for (let i = 0; i < taskList.length; i++) {
      const myCurrentTask = taskList[i];
      if (myCurrentTask.id === taskId) {
        removedItem = myCurrentTask;
      } else {
        updatedTodoList.push(myCurrentTask);
      }
    }
    //
    if (removedItem) {
      updatedTodoList.push(removedItem);
    }
    setTaskList(updatedTodoList);
  };

  return (
    <div className="todolist">
      <h1>Todo List</h1>
      <ul>
        {taskList.map((task) => (
          <li>
            {task.taskName}
            <button
              className="shiftBtn btn"
              onClick={() => shiftUpTodoList(task.id)}
            >
              Shift Task Up
            </button>
            <button
              className="shiftBtn btn"
              onClick={() => shiftDownTodoList(task.id)}
            >
              {/* Shift Task Down
            </button>
            <button
              className="shiftBtn btn"
              onClick={() => shiftToComplete(task.id)}
            > */}
              Mark as complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
