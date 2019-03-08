import React, {Component} from "react";
import UpperBar from "./UpperBar";
import Typography from '@material-ui/core/Typography';
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link}  from "react-router-dom";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';


class NewTask extends React.Component{

    constructor(props){
        super(props);
        this.state = {"description":this.props.description, "responsible":(this.props.responsible!=null)?
                this.props.responsible:localStorage.getItem('username'), "status":'To start',"dueDate":''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        //localStorage.tasks.concat(JSON.stringify(this.state));
        //console.log(JSON.parse(localStorage.tasks).push(this.state))

        fetch(this.props.host + "/addtask?userId="+localStorage.username, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.state.description+this.state.dueDate+this.state.status,
                description : this.state.description,
                date: this.state.dueDate,
                status: this.state.status
            })
        }).then(response => window.alert("Task Added succesfully"));
    }

    render(){

        return(
          <>
              <UpperBar/>
              <Card>
                <CardContent>
                  <Typography variant="h5">
                    New Task
                  </Typography>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            id="outlined-user"
                            label="Description"
                            name="description"
                            className="textField"
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            required={true}
                        />
                        <br/>
                        <TextField
                            id="outlined-user"
                            label="Responsible"
                            name="responsible"
                            className="textField"
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            required={true}
                            value = {this.state.responsible}
                        />
                        <br/>
                        <FormControl  variant="outlined">
                            <InputLabel htmlFor="status" required={true} shrink={true}>Status</InputLabel>
                            <Select
                                value={this.state.status}
                                onChange={this.handleChange}
                                input={
                                    <OutlinedInput
                                        labelWidth={this.state.labelWidth}
                                        name="status"
                                        id="status"
                                        labelWidth={100}
                                    />
                                }
                        >
                            <MenuItem value={"To start"} default>To start</MenuItem>
                            <MenuItem value={"In progress"}>In progress</MenuItem>
                            <MenuItem value={"Done"}>Done</MenuItem>
                        </Select>
                        </FormControl>
                        <br/>
                        <TextField
                            id="outlined-user"
                            label="Due Date"
                            name="dueDate"
                            className="textField"
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                            type="date"
                            required={true}
                            shrink="true"
                        />
                        <Button type="submit"
                                fullWidth
                                color="primary"
                                className="submit"> Submit</Button>
                    </form>
                    <Link to="/">
                        <Button type="submit"
                                fullWidth
                                color="primary"
                                className="submit"> Back</Button>
                    </Link>
                </CardContent>
              </Card>
          </>
        );
    }
}

export default NewTask;