import React from "react";
import "./taskStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = (props) => {
  const { text, date, important, id } = props.task;
  const styleImportant = { color: "red" };
  const dateObj = new Date(date);
  return (
    <div className="taskContainer">
      <div className="task">
        <span style={important ? styleImportant : null}>{text}</span>
      </div>
      <div className="date">
        {(dateObj.getMonth() > 8
          ? dateObj.getMonth() + 1
          : "0" + (dateObj.getMonth() + 1)) +
          "/" +
          (dateObj.getDate() > 9
            ? dateObj.getDate()
            : "0" + dateObj.getDate()) +
          "/" +
          dateObj.getFullYear()}
      </div>
      <button onClick={() => props.deleteTask(id)} className="deleteTask">
        <FontAwesomeIcon icon={faTrash} className="trashIcon" />
      </button>
    </div>
  );
};

export default Task;
