import React from "react";
import "./App.css";

import { mockTaskList } from "./mockData";

// TODOs
// 1. send a mock task to the bottom of the list
// 2. add a new task to the mock list using an input

const App = () => {
  const [taskList, setTaskList] = React.useState(mockTaskList);

  const handleClick = () => {
    // (mockTaskList.splice(1));
    //console.log(mockTaskList);

    //mockTaskList.push(mockTaskList.shift());
    //mockTaskList.push(mockTaskList.splice(mockTaskList.indexOf(1), 1)[0]);

    /* ???? Argument of type 'number | undefined' is not assignable to parameter of type 'number'.
  Type 'undefined' is not assignable to type 'number'.
    var a = [5,1,2,3,4];
    a.push(a.shift());
    console.log(a);
    */

    console.log("works!");
  };

  return (
    <div>
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
