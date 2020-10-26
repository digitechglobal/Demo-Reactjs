import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Cookies from 'js-cookie';
import Profile from './../Profile/UI_Profile';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BallotIcon from '@material-ui/icons/Ballot';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ForumIcon from '@material-ui/icons/Forum';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import SignUp from "./../../Components/SignUp/UI_SignUp";
// import SignUp from "./../../Temp/testSignUp";
import Home from './../../Components/Home/UI_Home';
import MenuAcc from './UI_MenuAccount';
import './../../Styles/UI_Menu.css'

const useStyle = makeStyles((theme) => ({
    list: {
        width: '250px',
    },

    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        }
    },
    sectionMobile: {
        display: "flex",
        flexDirection: 'flex-end',
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    logo: {
        [theme.breakpoints.between('xs', 'md')]: {
            marginTop: '30px',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
        },
    },

    logoText: {
        display: 'flex',
        alignItems: 'center',

        [theme.breakpoints.between('xs', 'md')]: {
            marginTop: '-20px',
            marginLeft: '0px',

        },


        [theme.breakpoints.up('md')]: {
            marginTop: '5px',
            marginLeft: '-60px',
        },

        [theme.breakpoints.up('lg')]: {
            marginTop: '5px',
            marginLeft: '-110px',
        },
    },

    item: {
        color: 'blue',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
        fontSize: '16px',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginTop: '10px',
        '&:hover': {
            color: '#127CF5',
        },
        '&:active': {
            color: 'red',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '14px',
            marginTop: '0px'
        },
    },

    item_List: {
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
    }
}));

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

function TestMenu(props) {
    const classes = useStyle();
    const [state, setState] = React.useState({
        right: false,
    });
    const [backgroundMenu, setBackgroundMenu] = useState(false);

    const changeBackgroundMenu = () => {
        if (window.scrollY >= 80) {
            setBackgroundMenu(true);
        }
        else {
            setBackgroundMenu(false);
        }
    };
    window.addEventListener('scroll', changeBackgroundMenu);
    //

    //Set thông tin user lên thanh menu bằng cách lấy thông tin trong cookies
    let user2 = '';
    let pasrseUser = null;
    user2 = Cookies.get('accessToken');
    if (user2 != null) {
        pasrseUser = JSON.parse(user2);
    }
    //

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText>
                        <Link className={classes.item_List} to='/'>Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText>
                        <Link className={classes.item_List} to='#'>About Us</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><BallotIcon /></ListItemIcon>
                    <ListItemText>
                        <Link className={classes.item_List} to='#'>Service</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><AssignmentIcon /></ListItemIcon>
                    <ListItemText>
                        <Link className={classes.item_List} to='#'>Product</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><ForumIcon /></ListItemIcon>
                    <ListItemText>
                        <Link className={classes.item_List} to='#'>Blog</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><ContactSupportIcon /></ListItemIcon>
                    <ListItemText>
                        <Link className={classes.item_List} to='#'>Contact</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    {pasrseUser != null
                        ? <MenuAcc user={pasrseUser} />
                        : <div><ListItemIcon style={{ float: 'left' }}><LockOpenIcon /></ListItemIcon>
                            <ListItemText style={{ float: 'left' }}>
                                <Link className={classes.item} to='/login'>Login/Resgister</Link>
                            </ListItemText>
                        </div>
                    }
                </ListItem>
            </List>
        </div>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('anchor')}
        </Drawer>
    );

    return (

        <BrowserRouter>
            <ElevationScroll {...props}>
                <AppBar component="div" position="fixed" className={backgroundMenu ? 'scrollMenu' : 'root'}>
                    <Toolbar disableGutters='true'>
                        <Container>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Grid container>
                                        <Grid item xs={1} sm={1} md={1} lg={1} ></Grid>
                                        <Grid item xs={11} sm={11} md={3} lg={3} className={classes.logo} >
                                            <Link to='/' style={{ textDecoration: 'none' }}>
                                                <img style={{ width: "100px", height: "50px" }} src="./logodigitech.png" />
                                            </Link>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                                        <Grid item xs={11} sm={11} md={4} lg={4} className={classes.logoText} >
                                            <Link to='/' style={{ textDecoration: 'none' }}>
                                                <h3>PRJNhoNho</h3>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={7}></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6} style={{ display: 'flex' }}>
                                    <Grid className={classes.sectionDesktop} container style={{ height: '100%' }}>
                                        <Grid item xs={1}>
                                            <Link className={classes.item} to='/'>Home</Link>
                                        </Grid>
                                        <Grid item xs={3} sm={2}>
                                            <Link style={{ marginLeft: '20%' }} className={classes.item} to='#'>About us</Link>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Link className={classes.item} to='#'>Service</Link>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Link className={classes.item} to='#'>Product</Link>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Link style={{ marginLeft: '45%' }} className={classes.item} to='#'>Blog</Link>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Link className={classes.item} to='#'>Contact</Link>
                                        </Grid>
                                        <Grid item xs={2}>
                                            {pasrseUser != null
                                                ? <MenuAcc user={pasrseUser} />
                                                : <Link className={classes.item} to='/login'>Login/Resgister</Link>
                                            }
                                        </Grid>
                                    </Grid>
                                    <Grid className={classes.sectionMobile} container>
                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <IconButton
                                                aria-label="show more"
                                                aria-controls={mobileMenuId}
                                                aria-haspopup="true"
                                                onClick={toggleDrawer('right', true)}
                                                color="inherit"
                                            >
                                                <MenuIcon style={{ fontSize: "30px", color: '#551A8B' }} />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            {renderMobileMenu}
            <div>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    {/* <Route exact path="/"><div></div></Route> */}
                    <Route path="/login">
                        {/* <SignUp setUser={setUser} /> */}
                        <SignUp />
                    </Route>
                    <Route exact path="/profile"><Profile /></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default TestMenu;