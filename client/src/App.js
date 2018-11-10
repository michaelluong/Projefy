import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavbar';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <TaskList />
      </div>
    );
  }
}

export default App;
