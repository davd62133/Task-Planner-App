import React from 'react';
import UpperBar from './UpperBar.js';
import TaskCard from './TaskCard.js';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import axios from "axios";

class TaskPlaner extends React.Component{

    constructor(props){
        super(props);
        this.state = {drawer:false};
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.state = {tasks:[]}
    }

    toggleDrawer(event){
        this.setState({drawer:true});
    }

    componentDidMount() {
        var now = this;
        axios.get(this.props.host+"/taskplanner/gettasks?userid="+localStorage.username,{
            headers:{
                Authorization: 'Bearer '+localStorage.getItem("accessToken")
            }
        }).then(function (response) {
            now.setState({tasks:response.data});
        }).catch(function (error) {
            console.log(error);
        })
    }

    render(){
        const {tasks} = this.state;
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
                        <div key={value.id}>
                        <TaskCard description={value.description}
                                     responsible={localStorage.username}
                                     dueDate={value.date}
                                     status={value.status}
                                    id={value.id}/>
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