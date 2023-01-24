import React from "react";
import classes from "./ListTasks.module.css";
import Card from "../UI/Card";

const ListTasks = (props) => {
  return (
    <Card
      className={Object.keys(props.tasks).length ? "" : `${classes.hidden}`}
    >
      <ul className={classes.ul}>
        {props.tasks.map((item) => (
          <li
            key={item.id}
            className={`${classes.li} ${classes[item.severity]}`}
            onClick={() => {
              props.deleteTask(item.id);
            }}
          >
            {item.task}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ListTasks;
