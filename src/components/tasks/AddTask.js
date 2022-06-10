import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddTask.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddTask = (props) => {
  const [error, setError] = useState();

  const addTaskHandler = (event) => {
    event.preventDefault();

    if (enteredTask.trim().length === 0) {
      setError({
        title: "Missing input",
        message: "Please enter a task.",
      });
      return;
    }

    if (Object.values(situation).every((value) => value === false)) {
      setError({
        title: "Missing severity level",
        message: "Please select a severity level.",
      });
      return;
    }
    const arraySeverity = Object.keys(situation);
    const selectedSeverity = arraySeverity.filter(function (id) {
      return situation[id];
    });

    props.onAddTask(enteredTask, selectedSeverity);
    setEnteredTask("");
  };

  const [enteredTask, setEnteredTask] = useState("");

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const [situation, setSituation] = useState({
    btnLow: false,
    btnMiddle: false,
    btnHigh: false,
  });

  const pressHandler = (btnLow, btnMiddle, btnHigh) => {
    setSituation({
      btnLow: btnLow,
      btnMiddle: btnMiddle,
      btnHigh: btnHigh,
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={addTaskHandler}>
          <input
            id="task"
            type="text"
            placeholder="Enter a task to add"
            className={classes.input}
            value={enteredTask}
            onChange={taskChangeHandler}
          ></input>
          <Button type="submit">Add Task</Button>
          <label htmlFor="task" className={classes.label}>
            Choose severity:
          </label>
          <Button
            isPressed={situation.btnLow}
            severity="low"
            onClick={() => pressHandler(true, false, false)}
          >
            low
          </Button>
          <Button
            isPressed={situation.btnMiddle}
            severity="medium"
            onClick={() => pressHandler(false, true, false)}
          >
            medium
          </Button>
          <Button
            isPressed={situation.btnHigh}
            severity="high"
            onClick={() => pressHandler(false, false, true)}
          >
            high
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddTask;
