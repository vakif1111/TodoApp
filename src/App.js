import Task from "./Task";
import React, { Component } from "react";
import "./appStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faExclamation } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  counter = 0;

  state = {
    text: "",
    check: false,
    date: new Date().toISOString().slice(0, 10),
    tasks: [],
  };

  handleCheck = () => {
    this.setState((prevState) => ({
      check: !prevState.check,
    }));
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleAddNewTask = () => {
    if (this.state.text.length > 2) {
      const newTask = {
        id: this.counter,
        text: this.state.text,
        important: this.state.check,
        date: this.state.date,
      };
      this.counter++;
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        text: "",
        date: new Date().toISOString().slice(0, 10),
        check: false,
      }));
    } else {
      alert("za krótka nazwa");
    }
  };

  handleDeleteTask = (id) => {
    const taskCopy = [...this.state.tasks];
    const index = taskCopy.findIndex((task) => task.id === id);
    taskCopy.splice(index, 1);
    this.setState({ tasks: taskCopy });
  };

  handleDeleteAllTask = () => {
    this.setState(() => ({
      tasks: [],
    }));
  };

  render() {
    const tasks = this.state.tasks.map((task) => (
      <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
    ));

    return (
      <div className="wrapper">
        <h1>Todo App</h1>
        <div className="form">
          <input
            className="inputName"
            type="text"
            placeholder="Add task"
            onChange={this.handleText}
            value={this.state.text}
          />
          <div className="importantCheckboxContainer">
            <label
              htmlFor="checkboxImportant"
              className={`${this.state.check ? "active" : ""}`}
            >
              <div className="aaa">
                <FontAwesomeIcon
                  icon={faExclamation}
                  className="exclamationIcon"
                />
              </div>
            </label>

            <input
              type="checkbox"
              onChange={this.handleCheck}
              checked={this.state.check}
              id="checkboxImportant"
            />
          </div>
          <input
            type="date"
            onChange={this.handleDate}
            value={this.state.date}
          />
          <button
            onClick={this.handleAddNewTask}
            style={{
              backgroundColor:
                this.state.text.length > 2 ? "#7840C4" : "#B994EA",
            }}
          >
            <FontAwesomeIcon icon={faPlus} className="buttonPlus" />
          </button>
        </div>
        <div className="taskList">{tasks}</div>
        {this.state.tasks.length ? (
          <div className="taskCounter">
            You have {this.state.tasks.length} task
            {this.state.tasks.length > 1 ? "s" : null}
          </div>
        ) : null}
        <button onClick={this.handleDeleteAllTask} className="deleteAllTask">
          Remove
        </button>
      </div>
    );
  }
}

export default App;
