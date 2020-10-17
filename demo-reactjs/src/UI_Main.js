import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Modal from '@material-ui/core/Modal';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Card from './UI_Card';
import "./UI_Menu.css";
import { container } from './theme';
import GiaoDien from "./UI_SignUp";
import CardContent from './UI_CardContent';

const useStyle = makeStyles((theme) => ({
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
        color: '#343434',
        marginTop: '20px',
        '&:hover': {
            backgroundColor: 'transparent',
            border: 'solid 1px white',
            color: 'white',
        }
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

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// };

// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// };

function Main(props) {
    const classes = useStyle();
    // getModalStyle is not a pure function, we roll the style only on the first render
    // const [modalStyle] = React.useState(getModalStyle);
    // const [open, setOpen] = React.useState(false);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };


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
                                            {/* <div className={classes.item}>
                                                <button type="button" onClick={handleOpen}>
                                                    Login/Resgister
                                                    </button>
                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="simple-modal-title"
                                                    aria-describedby="simple-modal-description"
                                                >
                                                    <GiaoDien />
                                                </Modal>
                                            </div> */}
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
            <Container style={{ marginTop: '50px' }}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginBottom: '90px', marginTop: '90px', textAlign: 'center', lineHeight: '50px' }}>
                        <Typography style={{ fontWeight: '500' }} variant="h3">Featured Robotics Products to Show</Typography>
                        <Typography variant="p" style={{ color: '#7B7B91' }}>
                            Who are in extremely love with eco friendly system.
							</Typography>
                    </Grid>
                </Grid>
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
            <Container>
                <Grid container style={{ marginLeft: '50px' }}>
                    <Grid item xs={11}>
                        <CardContent />
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Container>
            {/* endregion */}
        </React.Fragment >

    );
}

export default Main;