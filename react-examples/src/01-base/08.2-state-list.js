import React, { Component } from 'react'

export default class App extends Component {
    state = {
        fruits: ['Apple', 'Grape', 'Pear', 'Banana', 'Lemon']
    }

    constructor(){
        super();
        this.state.mobilephones = [
            {id: 0, name: 'iPhone X'}, 
            {id: 1, name: 'iPhone 11'}, 
            {id: 2, name: 'iPhone 12 Pro'},
            {id: 2, name: 'iPhone 13 Pro Max'}
        ];
    }

  render() {
   
    let fruits = this.state.fruits.map((item, index) => <li key={index}>{item}</li>);
    let mobilephones = this.state.mobilephones.map((item) => <li key={item.id}>{item.name}</li>);
    return (
      <div>
        <h1>Fruit</h1>
        <ul>
            {fruits}
        </ul>
        <br/>
        <h1>Mobilephones</h1>
        <ul>
            {mobilephones}
        </ul>
      </div>
    )
  }
}
