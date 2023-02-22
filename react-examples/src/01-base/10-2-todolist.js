import React, { Component } from "react";
import "./css/01-index.css";

export default class App extends Component {
  todoItemRef = React.createRef();

  constructor() {
    super();
    this.state = {
      list: [
        { id: 1, value: "Reading" },
        { id: 2, value: "Coding" },
        { id: 3, value: "Meeting" },
        { id: 4, value: "English" },
      ],
    };
  }

  handleAddClick = () => {
    if (!this.todoItemRef.current || !this.todoItemRef.current.value) {
      return;
    }
    if (!this.state.list) {
      this.setState({ list: [] });
    }
    let newTodolist = this.state.list.slice();
    let todoItem = {
      id: crypto.randomUUID(),
      value: this.todoItemRef.current.value,
    };
    newTodolist.push(todoItem);
    this.setState({ list: newTodolist });
    this.todoItemRef.current.value = null;
    console.log("Click Add", todoItem.id, todoItem.value);
  };

  handleDeleteClick = (id) => {
    if (!id || !this.state.list || !this.state.list.length) {
      return;
    }
    let newTodolist = this.state.list.slice();
    newTodolist = newTodolist.filter((item) => item.id !== id);
    this.setState({ list: newTodolist });
    console.log("Click Delete", id);
  };

  render() {
    return (
      <div>
        <h1>Todolist (add, delete)</h1>
        <input ref={this.todoItemRef}></input>
        <button onClick={() => this.handleAddClick()}>Add</button>
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>
              {item.value}
              <button onClick={() => this.handleDeleteClick(item.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
        <div className={this.state.list.length === 0 ? " " : "hidden"}>
          No todo items
        </div>
      </div>
    );
  }
}
