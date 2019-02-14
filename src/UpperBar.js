import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import user from "./images/user.png";

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

class UpperBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {drawer:false};
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.hideDrawer = this.hideDrawer.bind(this);
        this.logout = this.logout.bind(this);
    }

    toggleDrawer(event){
        this.setState({drawer:true});
    }

    hideDrawer(event){
        this.setState({drawer:false});
    }

    logout(event){
        window.location.reload();
        localStorage.setItem('isLoggedIn',false);
    }

    render(){
        const bottomStyle={
            position:'absolute',
            bottom:0
        }

        return(
            <div className="UpperBar">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton aria-label="Home" onClick={this.toggleDrawer}>
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Task Planner
                        </Typography>
                        <Drawer open={this.state.drawer} onClose={this.hideDrawer}>
                            <div onClick={this.hideDrawer} onKeyDown={this.hideDrawer}>

                                <img alt="" src={user} width={80} height={80}/>
                                <p/>
                                {localStorage.getItem('username')}
                                <p/>
                                <Button>Edit</Button>
                                <Divider/>
                                <div style={bottomStyle}>
                                    <Divider/>
                                    <Button onClick={this.logout}>LogOut</Button>
                                </div>
                            </div>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default UpperBar;
