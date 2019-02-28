import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {CardContent} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {Link}  from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';

function update(){
    return(
        window.location.assign('/updatetask')
    );
}

class TaskCard extends React.Component{

    constructor(props){
        super(props);
    }


    render() {


        return(
          <div className="TaskCard">
              <Card>
                  <CardActionArea  component={Link} to={{pathname: '/updatetask', state:{
                          description : this.props.description,
                          status : this.props.status,
                          responsible : this.props.responsible,
                          dueDate : this.props.dueDate
                      }}}>
                      <CardContent>
                          <Typography variant="h5">
                              {this.props.description}
                          </Typography>
                          <Typography color="textSecondary">
                              {this.props.status}-DueDate:{this.props.dueDate}
                          </Typography>
                          <Typography color="textSecondary">
                              Responsible: {this.props.responsible}
                          </Typography>
                      </CardContent>
                  </CardActionArea>
              </Card>
          </div>
        );
    }
}

export default TaskCard;