import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Ninjas from './components/Ninjas';

class App extends Component {
  state = {
    ninjas: [
      {id:1, name:'Ryu', age:22, belt: 'red'},
      {id:2, name:'Aku', age:24, belt: 'black'},
      {id:3, name:'Kumy', age:34, belt: 'blue'},
      {id:4, name:'Kajy', age:54, belt: 'green'}
    ]
  }

  render() {
    return (
      <div className="App">
        <div>
          <Ninjas ninjas = {this.state.ninjas} />
        </div>
      </div>
    )
  }
}

export default App;

// use props to pass data from parent component to child component