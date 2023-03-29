

import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 1
    }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAddOne}>AddOne</button>
        <button onClick={this.handleAddOneV2}>AddOneV2</button>
      </div>
    )
  }

  handleAddOne = () => {
    // setState asynchronously update dom
    this.setState({
        count: this.state.count + 1
    }, () => {
        console.log(this.state.count); // Update dom completed
    });

    this.setState({
        count: this.state.count + 1
    }, () => {
        console.log(this.state.count); // Update dom completed
    });

    this.setState({
        count: this.state.count + 1
    }, () => {
        console.log(this.state.count); // Update dom completed
    });

    this.setState({
        count: this.state.count + 1
    }, () => {
        console.log(this.state.count); // Update dom completed
    });

    this.setState({
        count: this.state.count + 1
    }, () => {
        console.log(this.state.count); // Update dom completed
    });
  }

  handleAddOneV2 = () => {
    setTimeout(() => {
        // setState asynchronously update dom
        this.setState({
            count: this.state.count + 1
        });

        console.log(this.state.count);

        this.setState({
            count: this.state.count + 1
        });

        console.log(this.state.count);

        this.setState({
            count: this.state.count + 1
        });

        console.log(this.state.count);

        this.setState({
            count: this.state.count + 1
        });

        console.log(this.state.count);

        this.setState({
            count: this.state.count + 1
        });

        console.log(this.state.count); // Update dom completed
     }, 0);
    }
}
