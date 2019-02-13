import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {user : '', password : ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({user: event.target.value, password: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
    }

	render(){
		return(
            <div className="Login">
                <form onSubmit={this.handleSubmit}>

                        <TextField
                                  id="outlined-user"
                                  label="User"
                                  className="textField"
                                  onChange={this.handleChange}
                                  margin="normal"
                                  variant="outlined"
                                />
                         <p/>
                        <TextField
                                  id="outlined-password"
                                  label="Password"
                                  className="textField"
                                  onChange={this.handleChange}
                                  margin="normal"
                                  variant="outlined"
                                 />
                        <p/>
                        <Button> Login </Button>

                </form>
            </div>
		);
	}
}

export default Login;
