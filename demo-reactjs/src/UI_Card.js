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
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}
                    className={classes.media}
                    title="The Upper Eyes"
                    component="div">
                    <img src="./img/p1.png" width='45%' height='90%'></img>
                </CardMedia>
                <CardContent>
                    <Typography style={{ lineHeight: '50px', textAlign: 'center' }} gutterBottom variant="h5" component="h2">
                        The Upper Eyes</Typography>
                    <Typography style={{ textAlign: 'center' }} variant="body2" color="textSecondary" component="p">
                        Who are in extremely love with eco friendly system.</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', magrinTop: '-5x' }}>
                <ButtonCus />
            </CardActions>
        </Card >
    );
}
