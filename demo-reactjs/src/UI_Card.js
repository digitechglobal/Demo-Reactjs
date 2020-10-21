import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonCus from './compo_Button';

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        backgroundColor: '#F9F9FF',
    },

    media: {
        height: 230,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    title: {
        lineHeight: '50px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '18px'
    },

    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        magrinTop: '-5x',
        fontWeight: 'bold',
        fontSize: '16px'
    }
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    title="The Upper Eye"
                    component="div">
                    <img src={props.imga} width='40%' height='80%'></img>
                </CardMedia>
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        {props.name}</Typography>
                    <Typography style={{ textAlign: 'center' }} variant="body2" color="textSecondary" component="p">
                        {props.note}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.btn}>
                <ButtonCus content='View Details' />
            </CardActions>
        </Card >
    );
}
