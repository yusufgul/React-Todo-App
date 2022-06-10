import React, { useState } from "react";
import AddTask from "./components/tasks/AddTask";
import ListTasks from "./components/tasks/ListTasks";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (newTask, newSeverity) => {
    setTaskList((prevTaskList) => {
      return [
        ...prevTaskList,
        {
          task: newTask,
          id: Math.random().toString().split(".")[1],
          severity: newSeverity,
        },
      ];
    });
  };

  const deleteTaskHandler = (id) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <AddTask onAddTask={addTaskHandler} />
      <ListTasks tasks={taskList} deleteTask={deleteTaskHandler} />
    </div>
  );
}

export default App;
