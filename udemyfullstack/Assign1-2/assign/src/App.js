
import React,{Component} from 'react';
import './App.css';
import UserInput from './userInput/userInput';
import {CharComponent} from './charComponent/charComponent';
import ValidComponent from './validComponent/validComponent'
import UserOutput from './userOutput/userOutput';
import Hooks from './Hooks/Hooks';
import Rad from './radiums/radiums';
import Radium,{StyleRoot} from 'radium';



class App extends Component {

 
  
  render(){
 
    
   
  
    return (
     
      <div className="App">
      {/* <Hooks/> */}
      <Rad></Rad>
      </div>
     
     
    );
  }
 
}

export default App;
