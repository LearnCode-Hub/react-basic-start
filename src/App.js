import React,{Component}from 'react';
import {StudentList} from './Components/Student-list/Student-Component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      employees :[]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({employees:users}));
  }
 render(){
  return (
    <div className="App">
      <header className="App-header">
      <StudentList employees={this.state.employees}></StudentList>
      </header>
    </div>
  )
}
}

export default App;
