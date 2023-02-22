import React, { Component } from "react";

export default class App extends Component {
  todoItemRef = React.createRef();
  todoItemRef2 = React.createRef();

  constructor() {
    super();
    /*Constructor is the only place where you should assign this.state directly. 
    In all other methods, you need to use this.setState() instead. */
    this.state = {
      list: ["Reading", "Coding", "Meeting", "English"],
      list2: [
        { id: 1, value: "Reading" },
        { id: 2, value: "Coding" },
        { id: 3, value: "Meeting" },
        { id: 4, value: "English" },
      ],
    };
  }

  handleClick = () => {
    if (!this.todoItemRef.current || !this.todoItemRef.current.value) {
      return;
    }

    console.log("Click", this.todoItemRef.current.value);

    // newTodolist
    let newTodolist = [...this.state.list];

    newTodolist.push(this.todoItemRef.current.value);
    this.setState({
      list: newTodolist,
    });
  };

  handleClick2 = () => {
    if (!this.todoItemRef.current || !this.todoItemRef.current.value) {
      return;
    }

    // newTodolist2
    let newTodolist2 = [...this.state.list2];
    let newTodoItem = {
      id: crypto.randomUUID(),
      value: this.todoItemRef2.current.value,
    };

    newTodolist2.push(newTodoItem);

    console.log("Click", newTodoItem.id, newTodoItem.value);

    this.setState({
      list2: newTodolist2,
    });
  };

  render() {
    let todolist = this.state.list.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    let todolist2 = this.state.list2.map((item) => (
      <li key={item.id}>{item.value}</li>
    ));

    return (
      <div>
        <h1>Todolist (add)</h1>
        <input ref={this.todoItemRef}></input>
        <button onClick={this.handleClick}>Add</button>
        <ul>{todolist}</ul>
        <br />
        <h1>Todolist 2</h1>
        <input ref={this.todoItemRef2}></input>
        <button onClick={this.handleClick2}>Add</button>
        <ul>{todolist2}</ul>
      </div>
    );
  }
}
