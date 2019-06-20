import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ninjas from './components/Ninjas';

function App() {
  return (
    <div className="App">
      <div>
        <Ninjas name="Adi" age="22" belt="red" />
        <Ninjas name="Acu" age="43" belt="blue" />
      </div>
    </div>
  );
}

export default App;

// use props to pass data from parent component to child component