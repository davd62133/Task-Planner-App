import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import user from "./images/user.png";

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {username : '', password : ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(event){
        localStorage.getItem('username')===this.state.username &&
        localStorage.getItem('password')===this.state.password
            ? localStorage.setItem('isLoggedIn',true): localStorage.setItem('isLoggedIn',false);
    }

	render(){
        var cardStyle = {
            display: 'block',
            width: '70vw',
            height: '70vh'
        }
		return(
            <div className="Login">
                <Card style={cardStyle}>
                    <img alt="" src={user} width={100} height={100}/>
                <form onSubmit={this.handleSubmit}>

                        <TextField
                                  id="outlined-user"
                                  label="User"
                                  name="username"
                                  className="textField"
                                  onChange={this.handleChange}
                                  margin="normal"
                                  variant="outlined"
                                  required={true}
                                />
                         <p/>
                        <TextField
                                  id="outlined-password"
                                  label="Password"
                                  name="password"
                                  className="textField"
                                  onChange={this.handleChange}
                                  margin="normal"
                                  variant="outlined"
                                  required={true}
                                  type="password"
                                 />
                        <p/>
                        <Button type="submit"
                                fullWidth
                                color="primary"
                                className="submit"> Login </Button>

                </form>
                </Card>
            </div>
		);
	}
}

export default Login;
