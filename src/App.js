import Task from "./Task";
import React, { Component } from "react";
import "./appStyles.css";

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

  render() {
    const tasks = this.state.tasks.map((task) => (
      <Task key={task.id} task={task} deleteTask={this.handleDeleteTask} />
    ));
    return (
      <div className="wrapper">
        <div className="form">
          <input
            className="inputName"
            type="text"
            placeholder="Dodaj zadanie"
            onChange={this.handleText}
            value={this.state.text}
          />
          <label htmlFor="important">Czy zadanie jest ważne?</label>
          <input
            type="checkbox"
            onChange={this.handleCheck}
            checked={this.state.check}
          />
          <input
            type="date"
            onChange={this.handleDate}
            value={this.state.date}
          />
          <button onClick={this.handleAddNewTask}>Wyślij</button>
        </div>
        <div className="taskList">{tasks}</div>
      </div>
    );
  }
}

export default App;
