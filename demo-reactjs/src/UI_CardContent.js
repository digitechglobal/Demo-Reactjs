import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(45),
            height: theme.spacing(20),
        },
    },

    items: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
        marginLeft: '30px',
        marginTop: '-5px',
        width: '90%',
    }
}));

export default function CardContent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper variant="outlined">
                <Grid container className={classes.items}>
                    <Grid container>
                        <Grid item xs={2} style={{ display: 'flex', alignItems: 'center' }}><PersonIcon style={{ fontSize: '30px' }} /></Grid>
                        <Grid item xs={10}><h3 style={{ marginLeft: '-20px', marginTop: '20px', display: 'flex', alignItems: 'center' }}>Expert Technicians</h3></Grid>
                    </Grid>
                </Grid>
                <Grid container className={classes.items}>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </Grid>
            </Paper>
            <Paper variant="outlined">
                <Grid container className={classes.items}>
                    <Grid container>
                        <Grid item xs={2} style={{ display: 'flex', alignItems: 'center' }}><AssignmentIcon style={{ fontSize: '30px' }} /></Grid>
                        <Grid item xs={10}><h3 style={{ marginLeft: '-15px' }}>Expert Technicians</h3></Grid>
                    </Grid>
                </Grid>
                <Grid container className={classes.items}>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </Grid>
            </Paper>
            <Paper>
                <Grid container className={classes.items}>
                    <Grid container>
                        <Grid item xs={2} style={{ display: 'flex', alignItems: 'center' }}><ContactPhoneIcon style={{ fontSize: '30px' }} /></Grid>
                        <Grid item xs={10}><h3 style={{ marginLeft: '-15px' }}>Expert Technicians</h3></Grid>
                    </Grid>
                </Grid>
                <Grid container className={classes.items}>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </Grid>
            </Paper>
        </div>
    );
}