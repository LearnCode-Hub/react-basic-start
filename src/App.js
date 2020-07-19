import React,{Component}from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      name:'ABC'
    };
  }
 render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>{this.state.name}</h1>
          <button onClick={()=>{this.setState({name:'Welcome'})}}>Click Here</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
}

export default App;
