import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet01, Greet02} from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Hello from './components/Hello.js';
import Message from './components/Message.js';

class App extends Component {
   render(){
     return (
       <div className="App">
        {/*<Greet01 /> 
        <Greet02 name="Smith"/> 
        <Greet02 name="William"/>
        <Greet02 name="Craig"/>*/}
     { /*<Welcome /> */} 
       {/*<Hello />*/}
       <Message />
       </div>
     ); 
   }
}

export default App;
