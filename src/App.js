import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import TaskPlaner from './TaskPlaner';

localStorage.setItem('username', 'admin');
localStorage.setItem('password', 'admin');
localStorage.setItem('tasks', JSON.stringify([{
      "description": "AppBar ",
      "responsible": "admin",
      "status": "Ready",
      "dueDate": 156464645646
        },{
      "description": "TaskCards",
      "responsible": "admin",
      "status": "Ready",
      "dueDate": 156464645646
      },{
      "description": "Fire base Deploy",
      "responsible": "admin",
      "status": "In Progress",
      "dueDate": 156464645646
      },
    ]));

class App extends Component {
  render() {

    return (
      <div className="App" align="center">
        {localStorage.getItem('isLoggedIn')==="true"?
            <TaskPlaner/>:<Login/>}
      </div>
    );
  }
}

export default App;
