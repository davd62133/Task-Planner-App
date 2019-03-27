import React from "react";
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
import axios from "axios";

export default class UpdateTask extends React.Component{

    constructor(props){
        super(props);
        this.state={begin : props.location.state,
                description: props.location.state.description,
                status: props.location.state.status,
                responsible: props.location.state.responsible,
                dueDate: props.location.state.dueDate,
            id:props.location.state.id};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        var list = JSON.parse(localStorage.getItem("tasks"))
        for(var i = 0; i<list.length;i++){
            if(list[i].description===this.state.begin.description &&
                list[i].status===this.state.begin.status &&
                list[i].responsible===this.state.begin.responsible &&
                list[i].dueDate===this.state.begin.dueDate){
                var updateTask = {description: this.state.description,
                                    status: this.state.status,
                                    responsible: this.state.responsible,
                                    dueDate: this.state.dueDate};
                list[i] = updateTask;
                localStorage.setItem("tasks",JSON.stringify(list));
            }
        }

        axios.put(this.props.host+'/taskplanner/updatetask?userId='+localStorage.username,{
            id: this.state.id,
            description : this.state.description,
            date: this.state.dueDate,
            status: this.state.status
        },{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem("accessToken")
            }
        }).then(function (response) {
            window.alert("Task Updated")
        }).catch(function (error) {
            console.log(error);
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        console.log(this.state);
        return(
          <>
              <UpperBar/>
              <Card>
                  <CardContent>
                      <Typography variant="h5">
                         Update task
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
                              value={this.state.description}
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
                              value={this.state.dueDate}
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