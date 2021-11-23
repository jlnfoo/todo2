import React, { ChangeEvent, useState } from "react";
import "../../App.css";
import { MyTask } from "../../types";
import { TodoList } from "../TodoList/TodoList";

export const AddTaskForm: React.FC = () => {
  const [taskList, setTaskList] = React.useState<MyTask[]>([]);
  const [task, setTask] = useState("");
  const [id, setId] = useState(0);

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

  return (
    <div className="addTask">
      <h1>Add Tasks</h1>
      <input
        type="text"
        placeholder="eat homework, walk cat, feed doge...."
        value={task}
        onChange={handleChange}
      />
      <button
        className="addBtn btn"
        onClick={() => {
          addTask();
        }}
      >
        Add
      </button>
    </div>
  );
};
