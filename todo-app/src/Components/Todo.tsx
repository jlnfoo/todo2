import React, { useState, ChangeEvent } from "react";

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
};

const Todo = () => {
  const [taskList, setTaskList] = React.useState<MyTask[]>([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(0);
  const [completedList, setCompletedList] = React.useState<MyTask[]>([]);

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

  //SHIFT UP WITHIN COMPLETED LIST
  const shiftUpCompletedList = (taskId: number | undefined) => {
    let removedItem;
    const anotherCompletedList: MyTask[] = [];

    for (let i = 0; i < completedList.length; i++) {
      if (completedList[i].id === taskId) {
        removedItem = completedList[i];
      } else {
        anotherCompletedList.push(completedList[i]);
      }
    }

    if (removedItem) {
      anotherCompletedList.unshift(removedItem);
    }

    setCompletedList(anotherCompletedList);
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

  //SHIFT DOWN COMPLETED LIST
  const shiftDownCompletedList = (taskId: number | undefined) => {
    const updatedCompletedList: MyTask[] = [];

    let removedItem;
    for (let i = 0; i < completedList.length; i++) {
      const myCurrentTask = completedList[i];
      if (myCurrentTask.id === taskId) {
        removedItem = myCurrentTask;
      } else {
        updatedCompletedList.push(myCurrentTask);
      }
    }

    if (removedItem) {
      updatedCompletedList.push(removedItem);
    }
    setCompletedList(updatedCompletedList);
  };

  //SHIFT FROM TODO -> COMPLETED
  const shiftToComplete = (taskId: number | undefined) => {
    const newMainList: MyTask[] = [];

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
    setTaskList(newMainList);

    // if object matches taskId, we give it a new var name of removedItem, then push this removedItem to completedList
    if (removedItem) {
      completedList.unshift(removedItem);
    }

    setCompletedList(completedList);
  };

  //SHIFT FROM COMPLETED -> TODO
  const shiftToTodo = (taskId: number | undefined) => {
    const newCompletedList: MyTask[] = [];

    // if (taskId === undefined) return;
    let removed;

    for (let j = 0; j < completedList.length; j++) {
      if (completedList[j].id === taskId) {
        removed = completedList[j];
      } else {
        newCompletedList.push(completedList[j]);
      }
    }
    setCompletedList(newCompletedList);

    if (removed) {
      taskList.push(removed);
    }
    setTaskList(taskList);
  };

  return (
    <div className="appContent">
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
                Shift Task Down
              </button>
              <button
                className="shiftBtn btn"
                onClick={() => shiftToComplete(task.id)}
              >
                Mark as complete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="todolist">
        <h1>Completed Task List</h1>
        <ul>
          {completedList.map((task) => (
            <li>
              {task.taskName}
              <button
                className="shiftBtn btn"
                onClick={() => shiftUpCompletedList(task.id)}
              >
                Shift Task Up
              </button>
              <button
                className="shiftBtn btn"
                onClick={() => shiftDownCompletedList(task.id)}
              >
                Shift Task Down
              </button>
              <button
                className="shiftBtn btn"
                onClick={() => shiftToTodo(task.id)}
              >
                Send to Todo List
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
