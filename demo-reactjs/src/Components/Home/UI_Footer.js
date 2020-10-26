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
import { ClassTwoTone } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0px',
        padding: '0px',

        background: 'url("./img/footer-bg.jpg") no-repeat fixed',
        color: 'white',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundSize: 'cover',
        paddingBottom: '10%',
        [theme.breakpoints.down('md')]: {
            paddingBottom: '5%',
        },
        paddingTop: '5%',
        [theme.breakpoints.down('md')]: {
            paddingTop: '2%',
        }
    },

    wrapper: {
        height: '100%',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '40px'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '70px'
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px'
        },
    },

    wrapperTop: {
        height: '100%',
        [theme.breakpoints.down('md')]: {
            marginTop: '50px'
        }
    },

    wrapperTopLast: {
        height: '100%',
        paddingLeft: '80px',
        [theme.breakpoints.down('md')]: {
            marginTop: '50px',
            paddingLeft: '0px'
        }
    },

    newletterSerch: {
        '& .MuiInputLabel-animated':
        {
            paddingLeft: '25px',
            marginTop: '-6px',
        }
    },

    searchField: {
        paddingTop: '20px',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '210px',
        }
    },

    search: {
        width: '330px',
        backgroundColor: 'white',
        borderRadius: '25px',
        [theme.breakpoints.down('lg')]: {
            width: '100%',
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        },
    },

    link: {
        color: 'white',
        '&:hover': {
            color: '#9046D6',
            textDecoration: 'none',
        }
    },

    btn: {
        height: '45px',
        width: '150px',
        marginLeft: '20px',
        backgroundImage: 'linear-gradient(to left, #CD95FF, #8790FF)',
        border: 'solid 0.5px blue',
        borderRadius: '25px',
        '&:hover': {
            backgroundImage: 'linear-gradient(to left, #7676FA, #B97CFA)',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '10px',
            width: '20%',
            marginLeft: '0px'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '10px',
            width: '30%',
            marginLeft: '0px'
        }
    },

    wrapperBottomCopyRight: {
        marginTop: '100px',
        height: '100%',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '40px'
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '70px'
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '20px'
        },
    },

    wrapperBottomIcon: {
        [theme.breakpoints.down('md')]: {
            marginTop: '20px',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
        }
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid container className={classes.wrapper}>
                    <Grid item xs={12} sm={12} md={3} lg={3} className={classes.wrapperTop}>
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
                    <Grid item xs={12} sm={12} md={5} lg={5} className={classes.wrapperTopLast}>
                        <div style={{ width: '100%' }}>
                            <h3>Newsletter</h3>
                        </div>
                        <div className={classes.newletterSerch}>
                            <Typography variant="p">You can trust us, we only send promo offers, not a single spam</Typography>
                            <div >
                                <Grid container style={{ paddingTop: '10px' }}>
                                    <Grid item xs={12} sm={12} md={8} lg={7}>
                                        <TextField size="small" className={classes.search} id="standard-basic" label="Email" />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} lg={5}>
                                        <Button className={classes.btn}>SUBSCRIBE</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} className={classes.wrapperTopLast}>
                        <div>
                            <h3>Instagram Feed</h3>
                        </div>
                    </Grid>
                </Grid>
                <Grid container className={classes.wrapperBottomCopyRight}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Typography variant="p">Copyright &copy; 2020 All rights reserved | This is template design by <i>*******</i></Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} className={classes.wrapperBottomIcon}>
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