import React, { Component } from "react";

export default class App extends Component {
  todoItemRef = React.createRef();

  constructor() {
    super();
    /*Constructor is the only place where you should assign this.state directly. 
    In all other methods, you need to use this.setState() instead. */
    this.state = {
      list: ["Reading", "Coding", "Meeting", "English"],
    };
  }

  handleClick = () => {
    console.log("Click", this.todoItemRef.current.value);
    let newTodolist = [...this.state.list];
    newTodolist.push(this.todoItemRef.current.value);
    this.setState({
      list: newTodolist,
    });
  };

  render() {
    let todolist = this.state.list.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return (
      <div>
        <h1>Todolist</h1>
        <input ref={this.todoItemRef}></input>
        <button onClick={this.handleClick}>Add</button>
        <ul>{todolist}</ul>
      </div>
    );
  }
}
