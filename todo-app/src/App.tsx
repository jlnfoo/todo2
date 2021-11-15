import React, { ChangeEvent, useState } from "react";
import "./App.css";

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
};

// Each tasks will have 3 buttons
// - send to bottom of current list
// - send to top of current list
// - mark as completed or incomplete - if completed - goes to completed list, if incomplete goes back todo list

const App = () => {
  const [taskList, setTaskList] = React.useState<MyTask[]>([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(0);
  const [completedList, setCompletedList] = React.useState<MyTask[]>([]);

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

  //completed -> todo
  const shiftUp = (taskId: number | undefined) => {
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
            <button onClick={() => shiftDown(task.id)}>Down</button>
            <button onClick={() => shiftDown(task.id)}>Down</button>
            <button onClick={() => shiftDown(task.id)}>Down</button>
          </li>
        ))}
      </ul>

      <h1>Completed List</h1>
      <ul>
        {completedList.map((task) => (
          <li>
            {task.taskName}
            <button onClick={() => shiftUp(task.id)}>Up</button>
            <button onClick={() => shiftUp(task.id)}>Up</button>
            <button onClick={() => shiftUp(task.id)}>Up</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
