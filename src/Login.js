import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import user from "./images/user.png";
import {Link} from "react-router-dom";
import axios from 'axios';

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
        localStorage.setItem("username",this.state.username);
        axios.post(this.props.host+'/user/login', {
            id: this.state.username,
            password: this.state.password
        })
            .then(function (response) {
                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem("isLoggedIn","true");
            })
            .catch(function (error) {
                window.alert("Wrong credencials");
            });
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
                    <Button fullWidth
                            color="primary"
                            className="submit"
                    component={Link} to={{pathname:"/update", state:{"newuser":true}}}> Create Account</Button>
                </Card>
            </div>
		);
	}
}

export default Login;
