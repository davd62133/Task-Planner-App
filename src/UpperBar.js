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
import {Link}  from "react-router-dom";
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Modal from '@material-ui/core/Modal';
import {Card} from "@material-ui/core";
import {CardContent} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';

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
        this.state = {drawer:false,anchorEl: null,open:false, responsible:"", dueDate:"", status:""};
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.hideDrawer = this.hideDrawer.bind(this);
        this.logout = this.logout.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
        this.handleOpenModal();
    };

    handleCloseModal = () =>{
        this.setState({open:false});
    };

    handleOpenModal = () =>{
        this.setState({open:true});
    };

    handleChangeFilter(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit(e){
        e.preventDefault();
        this.handleCloseModal();
    };

    render(){
        const bottomStyle={
            position:'absolute',
            bottom:0
        };
        var cardStyle = {
            display: 'block',
            width: '70vw',
            height: '70vh'
        }

        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return(
            <div className="UpperBar">
                <AppBar position="static">
                    <Toolbar style={{alignItems: 'center'}}>
                        <IconButton aria-label="Home" onClick={this.toggleDrawer}>
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Task Planner
                        </Typography>
                        <div>
                            <IconButton color="inherit" aria-haspopup="true" onClick={this.handleMenu}>
                                <MoreIcon />
                            </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>Filter</MenuItem>
                        </Menu>
                            <Modal open={this.state.open} onClose={this.handleCloseModal}>
                                <Card style={cardStyle}>
                                    <CardContent>
                                        <Typography variant="h5">
                                            Filter
                                        </Typography>
                                        <form onSubmit={this.handleSubmit}>
                                            <TextField
                                                id="outlined-user"
                                                label="Due Date"
                                                name="dueDate"
                                                className="textField"
                                                margin="normal"
                                                variant="outlined"
                                                type="date"
                                                shrink="true"
                                                onChange={this.handleChangeFilter}
                                                value={this.state.dueDate}
                                            />
                                            <br/>
                                            <TextField
                                                id="outlined-user"
                                                label="Responsible"
                                                name="responsible"
                                                className="textField"
                                                margin="normal"
                                                variant="outlined"
                                                shrink="true"
                                                onChange={this.handleChangeFilter}
                                                value={this.state.responsible}
                                            />
                                            <br/>
                                            <FormControl  variant="outlined">
                                                <InputLabel htmlFor="status" required={true} shrink={true}>Status</InputLabel>
                                                <Select
                                                    name = "status"
                                                    value={this.state.status}
                                                    onChange={this.handleChangeFilter}
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
                                            <Button type="submit"
                                                    fullWidth
                                                    color="primary"
                                                    className="submit"> Submit</Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Modal>
                        </div>
                        <Drawer open={this.state.drawer} onClose={this.hideDrawer}>
                            <div onClick={this.hideDrawer} onKeyDown={this.hideDrawer}>

                                <img alt="" src={user} width={80} height={80}/>
                                <p/>
                                {localStorage.getItem('username')}
                                <p/>
                                <Button component={Link} to="/update">Edit</Button>
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
