import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Hello from './components/Hello.js';

class App extends Component {
   render(){
     return (
       <div className="App">
       {/* <Greet /> }
       {<Welcome /> */}
       <Hello />
       </div>
     ); 
   }
}

export default App;
