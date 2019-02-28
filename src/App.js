import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import TaskPlaner from './TaskPlaner';
import NewTask from './NewTask.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import UpdateTask from './UpdateTask';

if(localStorage.getItem("username")==="undefined"){
    localStorage.setItem('username', 'admin');
}
if(localStorage.getItem("password")==="undefined"){
    localStorage.setItem('password', 'admin');
}
if(localStorage.getItem('tasks')==="undefined"){
localStorage.setItem('tasks', JSON.stringify([]))};

const Home = () => (
        <Router>
            <>
                <Route exact path="/" component={TaskPlaner}/>
                <Route path="/newtask" component={NewTask} />
                <Route path="/update" component={UpdateProfile}/>
                <Route path="/updatetask" component={UpdateTask}/>
                </>
        </Router>
)


class App extends Component {
  render() {

    return (
      <div className="App" align="center">
        {localStorage.getItem('isLoggedIn')==="true"?
            <Home/>:<Login/>}
      </div>
    );
  }
}

export default App;
