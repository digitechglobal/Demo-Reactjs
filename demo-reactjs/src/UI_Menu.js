import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';


const useStyle = makeStyles({

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
                <AppBar style={{ backgroundColor: '#959BFF', height: '100px' }}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={6}>
                                <Grid item xs={4}>
                                    <div style={{ backgroundColor: 'red', height: '50px' }}>
                                        <h3 style={{ float: "right" }}>PRJNhoNho</h3>
                                        <img style={{ float: "right", width: "50px", height: "50px" }} src="./logohufi.png" />
                                    </div>
                                </Grid>
                                <Grid item xs={8}>
                                    <div style={{ backgroundColor: 'cyan' }}>
                                        12
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container item xs={6}>
                                <Grid item xs={2}>
                                    <div style={{ backgroundColor: 'red' }}>1</div>
                                </Grid>
                                <Grid item xs={1}>
                                    <div style={{ backgroundColor: 'yellow' }}>1</div>
                                </Grid>
                                <Grid item xs={1}>
                                    <div style={{ backgroundColor: 'red' }}>1</div>
                                </Grid>
                                <Grid item xs={1}>
                                    <div style={{ backgroundColor: 'yellow' }}>1</div>
                                </Grid>
                                <Grid item xs={1}>
                                    <div style={{ backgroundColor: 'red' }}>1</div>
                                </Grid>
                                <Grid item xs={1}>
                                    <div style={{ backgroundColor: 'yellow' }}>1</div>
                                </Grid>
                                <Grid item xs={1}>
                                    <div style={{ backgroundColor: 'red' }}>1</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />

            {/* content */}
            <Container>

            </Container>
            {/* endregion */}

        </React.Fragment>
    );
}

export default Menu;