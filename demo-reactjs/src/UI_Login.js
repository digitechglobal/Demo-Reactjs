import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import { callApi } from './apiCaller';
import Cookies from 'js-cookie';
import { Route, useHistory } from 'react-router-dom';
import Home from './UI_Home';
import AlertCus from './compo_Alert';


const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: '50px',
        marginLeft: '30px',

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '400px',
            marginBottom: '20px',
        },
    },

    forget: {
        marginTop: '10px',
        marginLeft: '-50px',
        textAlign: 'center',
        color: 'rgb(103,106,106)',
        '& a': {
            textDecoration: 'none',
        },
    },
    text: {
        color: 'red',
    }
}));


function Login(props) {
    //const { setUser } = props;
    const history = useHistory();
    const classes = useStyle();
    const [valueEmail, setValueEmail] = React.useState();
    const [valuePass, setValuePass] = React.useState();

    const CheckLogin = () => {

        callApi('users/login2', 'POST', {
            email: valueEmail,
            password: valuePass
        }).then(res => {
            if (res.data.success == 1) {
                alert("Login Successfully");
                Cookies.set('accessToken', res.data, { expires: 86400 })
                window.location.href = "/";
            }
            else if (res.data.success == -1) { alert("Invalid email"); }
            else if (res.data.success == 0) { alert("Invalid password"); }
            else { alert("Login failed"); }
            setValueEmail('');
            setValuePass('');
        })
    }



    const ColorButton = withStyles((theme) => ({
        root: {
            marginTop: '20px',
            height: '50px',
            marginLeft: '10px',
            width: '400px',
            color: theme.palette.getContrastText(blue[500]),
            backgroundColor: '#8B76DB',
            '&:hover': {
                backgroundColor: '#BE94FF',
            },
            '.MuiTextField-root': {
                color: 'red',
            }
        },
    }))(Button);

    return (
        <Grid container style={{ backgroundColor: 'rgba(238, 253, 253, 1)', borderRadius: '0px 25px 25px 0px', paddingTop: '50px', height: '100%' }}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.text}
                    id="outlined-textarea"
                    label="Email/Username"
                    placeholder="Email/Username"
                    multiline
                    variant="outlined"
                    value={valueEmail}
                    onChange={(event, valueEmail) => setValueEmail(event.target.value)}
                />

                <TextField
                    className={classes.text}
                    id="outlined-password-input"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    value={valuePass}
                    onChange={(event, valuePass) => setValuePass(event.target.value)}
                />
                <ColorButton onClick={CheckLogin} variant="contained" color="primary" className={classes.margin}>
                    Login
                    </ColorButton>
                <div className={classes.forget}>
                    Forget password?<Link to='#'><i>Click here</i></Link>
                </div>
            </form>

        </Grid>
    )
}

export default Login;