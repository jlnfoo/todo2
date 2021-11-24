import React, { useState, ChangeEvent } from "react";

type MyTask = {
  id?: number; // number | undefined
  taskName: string;
};

const AddTaskForm = () => {
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

export default AddTaskForm;
