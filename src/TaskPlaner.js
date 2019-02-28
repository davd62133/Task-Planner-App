import React, { Component } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import UpperBar from './UpperBar.js';
import TaskCard from './TaskCard.js';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

class TaskPlaner extends React.Component{

    constructor(props){
        super(props);
        this.state = {drawer:false};
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer(event){
        this.setState({drawer:true});
    }

    render(){
        const tasks=JSON.parse(localStorage.getItem("tasks"));
        const style = {
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 20,
            left: 'auto',
            position: 'fixed'
        };
        return(
            <div className="TaskPlanner">
                <UpperBar/>
                <p/>
                {tasks.map((value)=>{
                    return (
                        <div key={"div" + value.description}>
                        <TaskCard description={value.description}
                                     responsible={value.responsible}
                                     dueDate={value.dueDate}
                                     status={value.status}/>
                                    <p/>
                        </div>
                                     )})}

                <Link to="/newtask">
                    <Fab style={style} aria-label="Add" color='primary'>
                        <AddIcon/>
                    </Fab>
                </Link>


            </div>
        );
    }
}

export default TaskPlaner;