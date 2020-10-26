import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width: '150px',
        height: '45px',
        backgroundColor: 'white',
        color: 'black',
        marginLeft: '-10px',
        marginBottom: '15px',
        '&:hover': {
            backgroundImage: 'linear-gradient(to left, #CD95FF, #8790FF)',
            color: 'white',
            border: 'solid 1px #9691FF',
        }
    },
});

export default function ButtonCus(props) {
    const classes = useStyles();
    return (
        <Button className={classes.root} href="#">
            <Typography variant="p">{props.content}</Typography>
        </Button>
    );
} 