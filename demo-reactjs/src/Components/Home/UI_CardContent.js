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
            [theme.breakpoints.down('lg')]: {
                width: '100%',
            }
        },
    },

    items: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
        marginLeft: '30px',
        marginTop: '-5px',
        width: '90%',
    },

    titleCard: {
        marginLeft: '-20px',
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0px',
        },

        [theme.breakpoints.up('sm')]: {
            marginLeft: '-10px',
        },

        [theme.breakpoints.up('md')]: {
            marginLeft: '-20px',
        },
    }
}));

export default function CardContent(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper variant="outlined">
                <Grid container className={classes.items}>
                    <Grid container>
                        <Grid item xs={2} style={{ display: 'flex', alignItems: 'center' }}><PersonIcon style={{ fontSize: '30px' }} /></Grid>
                        <Grid item xs={10}><h3 className={classes.titleCard}>{props.title}</h3></Grid>
                    </Grid>
                </Grid>
                <Grid container className={classes.items}>
                    <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                </Grid>
            </Paper>
        </div>
    );
}