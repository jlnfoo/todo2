import React, { ChangeEvent, useState } from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list
// 2. add a new task to the mock list using an input

// type mockTaskListProps = {
//   id: number;
//   taskName: string;
//   position: number;
// };

const App = () => {
  const [taskList, setTaskList] = React.useState(mockTaskList);
  const [id, setId] = useState<number>(0);
  const [task, setTask] = useState<string>("");
  const [position, setPosition] = useState<number>(0);

  const handleClick = () => {
    // mockTaskList.push(mockTaskList.shift());
    // console.log(mockTaskList);

    // const clickedTask = mockTaskList.shift();
    // mockTaskList.push(clickedTask);
    // console.log(mockTaskList);

    //mockTaskList.push(mockTaskList.splice(mockTaskList.indexOf(1), 1)[0]);

    /* ???? Argument of type 'number | undefined' is not assignable to parameter of type 'number'.
  Type 'undefined' is not assignable to type 'number'.
    var a = [5,1,2,3,4];
    a.push(a.shift());
    console.log(a);
    */

    console.log("works!");
  };

  // const handleClick1 = (mockTaskList) => {
  //   mockTaskList((task, index) => {
  //     mockTaskList.splice(index, 1);
  //     mockTaskList.push
  //   })
  // }

  //onclick, set position to be the last in array
  // const handleClick2 = (e: any) => {

  //   if (mockTaskList.position < mockTaskList.length) {
  //     mockTaskList.splice(e);
  //     mockTaskList.push;
  //     return mockTaskList;
  //   } else {
  //     return mockTaskList;
  //   }
  // setPosition((mockTaskList) => [...taskList]);

  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { id: id, taskName: task, position: position };
    setTaskList([...taskList, newTask]);
    setTask("");
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
          <li onClick={handleClick}>{task.taskName}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
