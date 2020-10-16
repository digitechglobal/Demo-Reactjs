import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from './UI_Card';
import "./UI_Menu.css";
import { container } from './theme';

const useStyle = makeStyles({
    root: {
        backgroundColor: 'transparent',
        height: '65px',
        // display: 'flex',
        // justifyContent: 'center',
    },

    item: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
        fontSize: '14px',

    },
    btn: {
        width: '150px',
        height: '38px',
        backgroundColor: '#ffffff',
        color: '#707070',
        marginTop: '20px',
        '&:hover': {
            backgroundColor: 'transparent',
            border: 'solid 1px white',
            color: 'white',
        }
    }
});

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
            <CssBaseline />
            <ElevationScroll {...props}>
                {/* menu */}
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
                                        <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', marginLeft: '-40px', fontSize: '20px' }}>
                                            <h3>PRJNhoNho</h3>
                                        </Grid>
                                        <Grid item xs={7}></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container style={{ height: '100%' }}>
                                        <Grid item xs={1}>
                                            <div className={classes.item}>Home</div>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <div className={classes.item}>About us</div>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <div className={classes.item}>Service</div>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <div className={classes.item}>Product</div>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <div className={classes.item}>Blog</div>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <div className={classes.item}>Contact</div>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <div className={classes.item}>Login/Resgister</div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Container>
                    </Toolbar>
                </AppBar>
                {/* endmenu */}
            </ElevationScroll>
            <Toolbar />

            {/* content */}
            <div style={{ background: 'url("./img/banner-bg.jpg") no-repeat center center fixed', height: '720px', marginTop: '-65px' }}>
                <Container >
                    <div style={{ paddingTop: '10%' }}>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <div style={{ marginLeft: '50px' }}>
                                    <Typography variant="h1" style={{ lineHeight: '60px' }}>Improved <br />Production level <br />with Robotics</Typography>
                                    <Typography variant="p" style={{ lineHeight: '70px', color: 'white', textTransform: 'uppercase', marginRight: '15px' }}>Everyone wants the innovation through robotics</Typography>
                                    <br />
                                    <Button className={classes.btn} href="#"><Typography variant="p">View Details</Typography></Button>
                                </div>
                            </Grid>
                            <Grid xs={12} sm={6} md={6} lg={6}>
                                <div>
                                    <img style={{ maxHeight: '100%', maxWidth: '100%' }} src="./img/banner-img.png" alt="banner-img.png"></img>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

            <Container>
                <Grid container style={{ marginLeft: '50px' }}>
                    <Grid item xs={11}>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={4} lg={3}><Card /></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}><Card /></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}><Card /></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}><Card /></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Container>
            {/* endregion */}


        </React.Fragment >
    );
}

export default Menu;