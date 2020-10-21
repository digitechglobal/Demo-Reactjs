import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from './UI_Card';
import "./UI_Menu.css";
import Footer from './UI_Footer';
import CardContent from './UI_CardContent';

const useStyle = makeStyles((theme) => ({
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

export default function Home(props) {
    const classes = useStyle();

    return (
        <div>
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
                            <Grid item xs={12} sm={6} md={4} lg={3}><Card imga="./img/p1.png" name="The Upper Eye" note="
										Who are in extremely love with eco friendly system."/></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}><Card imga="./img/p2.png" name="The Crab Wheel" note="
										Who are in extremely love with eco friendly system."/></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}><Card imga="./img/p3.png" name="The Plug Ninja" note="
										Who are in extremely love with eco friendly system."/></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}><Card imga="./img/p4.png" name="The Controller" note="
										Who are in extremely love with eco friendly system."/></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Container>
            <div style={{ background: 'url("./img/feature-bg.png") no-repeat center center fixed', height: '720px', marginTop: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container>
                    <Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginBottom: '40px', marginTop: '40px', textAlign: 'center', lineHeight: '50px' }}>
                            <Typography style={{ fontWeight: '500', color: 'white' }} variant="h3">Some Features that Made us Unique</Typography>
                            <Typography variant="p" style={{ color: '#7B7B91', color: 'white' }}>
                                Who are in extremely love with eco friendly system.
							</Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{ marginLeft: '33px' }}>
                        <Grid item xs={11}>
                            <CardContent title1="Expert Technicians" title2="Professional Service" title3="Great Support" />
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                    <Grid container style={{ marginLeft: '33px', marginTop: '10px' }}>
                        <Grid item xs={11}>
                            <CardContent title1="Technical Skills" title2="Highly Recomended" title3="Positive Reviews" />
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </Container>
            </div>
            <Footer />
            {/* endregion */}
        </div >
    );
}