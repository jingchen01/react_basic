import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet01, Greet02} from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Hello from './components/Hello.js';
import Message_subscribe from './components/Message_subscribe.js';
import Message_count from './components/Message_count.js';
import Message_count2 from './components/Message_count2.js';


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
       <Message_subscribe />
       <Message_count />
       <Message_count2 />
       </div>
     ); 
   }
}

export default App;
