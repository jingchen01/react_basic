import React, {Component} from 'react';

class Message_count2 extends Component {
    constructor(props){
        /*Must call super constructor in derived class before accessing 'this' or returning from derived constructor*/
        super(props);
        this.state = {
            count : 0
        }
    }

    /* function in js is executed asynchronously, use callback as second parameter to get updated value*/
    incrementFive(){
        this.setState((prevState, props) => ({
                count : prevState.count + 5 
                }),
             () => {console.log(this.state.count)}
        );
    }

    render(){
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>increment</button>
            </div>
        );
    };

}

export default Message_count2;