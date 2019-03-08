import React, { Component } from 'react';
import user from "./images/user.png";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {Link}  from "react-router-dom";

export default class UpdateProfile extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {"username": localStorage.getItem("username"), "password": "", "confirm": ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.props.location.state.newuser === true){
            this.createUser();
        }else{
            this.updateUser();
        }
        if (this.state.password !== this.state.confirm) {
            window.alert("Password are not the same");
        } else{
            localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);
            }
        window.alert("Account Uploades")
        }

        createUser() {
            fetch(this.props.host + "/createuser", {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.state.username,
                    password: this.state.password
                })
            }).then(response => console.log("User Created"));
        }

        updateUser() {
            fetch(this.props.host + "/updateuser", {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: this.state.username,
                    password: this.state.password
                })
            }).then(response => console.log("User Created"));
        }



    render(){
        const cardStyle = {
            display: 'block',
            width: '70vw',
            height: '90vh'
        }

        return(
            <>
                <Card style={cardStyle}>
                    {console.log(this.props)}
                    {this.props.location.state.newuser === true ?
                        <Typography variant="h5">
                            New User Information
                        </Typography>:<Typography variant="h5">
                            Update User Information
                        </Typography>}

                    <img alt="" src={user} width={100} height={100}/>
                    <form onSubmit={this.handleSubmit}>
                        {this.props.location.state.newuser === true?
                            <TextField
                                id="outlined-user"
                                label="User"
                                name="username"
                                className="textField"
                                onChange={this.handleChange}
                                margin="normal"
                                variant="outlined"
                                required={true}
                            />:
                            <TextField
                                id="outlined-user"
                                label="User"
                                name="username"
                                className="textField"
                                onChange={this.handleChange}
                                margin="normal"
                                variant="outlined"
                                required={true}
                                value={this.state.username}
                                disabled
                            />
                        }

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
                        <TextField
                            id="outlined-password"
                            label="Confirm Password"
                            name="confirm"
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
                                className="submit"> Save </Button>

                    </form>
                    <Button component={Link} to="/" fullWidth color="primary">Back</Button>
                </Card>
            </>
        )
    }
}
