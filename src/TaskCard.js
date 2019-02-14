import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import {CardContent} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

class TaskCard extends React.Component{

    constructor(props){
        super(props);
    }
    render() {
        return(
          <div className="TaskCard">
              <Card>
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
              </Card>
          </div>
        );
    }
}

export default TaskCard;