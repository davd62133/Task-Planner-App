import React, { Component } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import UpperBar from './UpperBar.js';
import TaskCard from './TaskCard.js';

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
            </div>
        );
    }
}

export default TaskPlaner;