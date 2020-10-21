import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import "./UI_Menu.css";
import SignUp from "./UI_SignUp";
import Home from './UI_Home';
import MenuAcc from './UI_MenuAccount';
import Cookies from 'js-cookie';
import Profile from './UI_Profile';

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        height: '65px',
    },

    item: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
        fontSize: '14px',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
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

function Menu(props) {
    const classes = useStyle();
    // const [user, setUser] = useState();

    let user2 = '';
    user2 = Cookies.get('accessToken');
    const pasrseUser = JSON.parse(user2);

    // console.log("CustomizedMenus -> user2", user2);
    // console.log("CustomizedMenus -> user2", pasrseUser.firstName);

    const [valueChange, setValueChange] = React.useState();

    return (
        <React.Fragment>
            <BrowserRouter>

                <CssBaseline />
                {/* menu */}
                <ElevationScroll {...props}>
                    <AppBar className={classes.root}>
                        <Toolbar>
                            <Container>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Link to='/' style={{ textDecoration: 'none' }}><Grid container>
                                            <Grid item xs={1}></Grid>
                                            <Grid item xs={3} style={{ display: 'flex', alignItems: 'center' }}>
                                                <img style={{ width: "100px", height: "50px" }} src="./logodigitech.png" />
                                            </Grid>
                                            <Grid item xs={4} style={{ color: '#6717AF', display: 'flex', alignItems: 'center', marginLeft: '-60px', marginTop: '20px', fontSize: '20px' }}>
                                                <h3>PRJNhoNho</h3>
                                            </Grid>
                                            <Grid item xs={7}></Grid>
                                        </Grid>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Grid container style={{ height: '100%' }}>
                                            <Grid item xs={1}>
                                                <Link className={classes.item} to='/'>Home</Link>
                                            </Grid>
                                            <Grid item xs={2}>
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
                                    </Grid>
                                </Grid>
                            </Container>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar />
                {/* Endmenu */}

                {/* Content */}
                <div>
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/login">
                            {/* <SignUp setUser={setUser} /> */}
                            <SignUp />
                        </Route>
                        <Route exact path="/profile"><Profile /></Route>
                    </Switch>
                </div>
                {/* End Content */}
            </BrowserRouter>
        </React.Fragment >

    )
}

export default Menu;