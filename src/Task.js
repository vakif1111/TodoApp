import React from "react";
import "./taskStyles.css";

const Task = (props) => {
  const { text, date, important, id } = props.task;
  const styleImportant = { color: "red" };
  return (
    <div className="task">
      <strong style={important ? styleImportant : null}>{text}</strong> - do{" "}
      {date}
      <button onClick={() => props.deleteTask(id)}>Zostało zrobione</button>
    </div>
  );
};

export default Task;
