import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import TaskPlaner from './TaskPlaner';
import NewTask from './NewTask.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
import UpdateTask from './UpdateTask';

if(localStorage.getItem("username")===null){
    localStorage.setItem('username', 'admin');
}
if(localStorage.getItem("password")===null){
    localStorage.setItem('password', 'admin');
}
if(localStorage.getItem('tasks')===null){
localStorage.setItem('tasks', JSON.stringify([]))};

const host = "http://localhost:8080";

const Home = () => (
        <Router>
            <>
                {localStorage.getItem('isLoggedIn')==="true"?
                    <Route exact path="/" component={(props) => <TaskPlaner {...props} host={host} />}  />:
                    <Route exact path="/" component={(props) => <Login {...props} host={host} />} />}

                <Route path="/newtask" component={(props) => <NewTask {...props} host={host} />} />
                <Route path="/update" component={(props) => <UpdateProfile {...props} host={host} />} />
                <Route path="/updatetask" component={(props) => <UpdateTask {...props} host={host} />} />
                </>
        </Router>
)


export default class App extends Component {
  render() {

      return (
          <div className="App" align="center">
              <Home/>
          </div>
      );
  }
}

