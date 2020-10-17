import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import "./UI_Menu.css";
import SignUp from "./UI_SignUp";
import Home from './UI_Home';
import Footer from './UI_Footer';

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
                                        <Grid container>
                                            <Grid item xs={1}></Grid>
                                            <Grid item xs={2} style={{ display: 'flex', alignItems: 'center' }}>
                                                <img style={{ width: "50px", height: "50px", borderRadius: '50%' }} src="./logohufi.png" />
                                            </Grid>
                                            <Grid item xs={4} style={{ color: '#6717AF', display: 'flex', alignItems: 'center', marginLeft: '-40px', fontSize: '20px' }}>
                                                <h3>PRJNhoNho</h3>
                                            </Grid>
                                            <Grid item xs={7}></Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Grid container style={{ height: '100%' }}>
                                            <Grid item xs={1}>
                                                <Link className={classes.item} to='/'>Home</Link>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Link className={classes.item} to='#'>About us</Link>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Link className={classes.item} to='#'>Service</Link>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <Link className={classes.item} to='#'>Product</Link>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <Link className={classes.item} to='#'>Blog</Link>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Link className={classes.item} to='#'>Contact</Link>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Link className={classes.item} to='/login'>Login/Resgister</Link>
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
                        <Route path="/login"><SignUp /></Route>
                    </Switch>
                </div>
                <Footer />

                {/* End Content */}
            </BrowserRouter>
        </React.Fragment >

    )
}

export default Menu;