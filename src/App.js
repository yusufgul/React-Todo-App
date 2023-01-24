import React, { useState } from "react";
import AddTask from "./components/tasks/AddTask";
import ListTasks from "./components/tasks/ListTasks";

const info = {
  task: "To delete a task, just click on it. Try it now.",
  id: Math.random().toString().split(".")[1],
  severity: ["btnLow"],
};

const App = () => {
  const [taskList, setTaskList] = useState([info]);

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
};

export default App;
