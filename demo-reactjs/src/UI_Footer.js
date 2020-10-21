import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiInputLabel-animated':
        {
            paddingLeft: '25px',
            marginTop: '-6px',
        }
    },

    link: {
        color: 'white',
        '&:hover': {
            color: '#9046D6',
            textDecoration: 'none',
        }
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <div style={{
            background: 'url("./img/footer-bg.jpg") no-repeat center center',
            color: 'white',
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Container style={{ marginLeft: '180px' }}>
                <Grid container style={{ height: '100%' }}>
                    <Grid item xs={3}>
                        <div>
                            <h3>Top Products</h3>
                        </div>
                        <div style={{ lineHeight: '30px' }}>
                            <Typography variant="p"><Link to='#' className={classes.link}>Managed Website</Link></Typography>
                            <br />
                            <Typography variant="p"><Link to='#' className={classes.link}>Managed Raputation</Link></Typography>
                            <br />
                            <Typography variant="p"><Link to='#' className={classes.link}>Power Tools</Link></Typography>
                            <br />
                            <Typography variant="p"><Link to='#' className={classes.link}>Marketing Service</Link></Typography>
                        </div>
                    </Grid>
                    <Grid item xs={5} >
                        <div>
                            <h3>Newsletter</h3>
                        </div>
                        <div className={classes.root}>
                            <Typography variant="p">You can trust us, we only send promo offers, not a single spam</Typography>
                            <div style={{ marginTop: '20px' }}>
                                <TextField size="small" style={{ width: '330px', backgroundColor: 'white', borderRadius: '25px' }} id="standard-basic" label="Email" />
                                <Button style={{ height: '45px', width: '150px', marginLeft: '20px', backgroundImage: 'linear-gradient(to left, #CD95FF, #8790FF)', border: 'solid 0.5px blue', borderRadius: '25px' }}>SUBSCRIBE</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ paddingLeft: '15px' }}>
                        <div>
                            <h3>Instagram Feed</h3>
                        </div>
                    </Grid>
                </Grid>
                <Grid container style={{ marginTop: '100px' }}>
                    <Grid item xs={8}>
                        <Typography variant="p">Copyright &copy; 2020 All rights reserved | This is template design by <i>*******</i></Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <FacebookIcon style={{ fontSize: '40px', marginRight: '10px', marginTop: '-10px' }} />
                        <LinkedInIcon style={{ fontSize: '40px', marginRight: '10px', marginTop: '-10px' }} />
                        <InstagramIcon style={{ fontSize: '40px', marginRight: '10px', marginTop: '-10px' }} />
                        <TwitterIcon style={{ fontSize: '40px', marginTop: '-10px' }} />
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}

export default Footer;