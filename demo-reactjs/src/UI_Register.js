import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { callApi } from './apiCaller';


const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: '10px',
        marginLeft: '30px',

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '400px',
            marginBottom: '5px',
        },
    },

    note: {
        marginLeft: '-50px',
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'rgb(103,106,106)',
    },

    icon: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '-50px',
        fontSize: '16px',

    }
}));

function Register() {
    const classes = useStyle();
    const [value, setValue] = React.useState();

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
        },
    }))(Button);

    const [valueUsername, setValueUsername] = React.useState();
    const [valuePass, setValuePass] = React.useState();
    const [valueEmail, setValueEmail] = React.useState();
    const [valueConfirmPass, setvalueConfirmPass] = React.useState();

    const checkValue = () => {
        if ((valueUsername == null) || (valueEmail == null) || (valuePass == null) || (valueConfirmPass == null) ||
            (valueUsername == '') || (valueEmail == '') || (valuePass == '') || (valueConfirmPass == '')) {
            return 0; //Có trường trống
        }

        else {
            if (valuePass.length >= 3) {
                if (valuePass != valueConfirmPass) {
                    return -1; //Password và Comfirm Password
                }
                return 1;
            }
            else {
                return -2; //Độ dài pass < 3
            }
        }

    }

    const Save = () => {
        const check = checkValue();
        console.log(check);
        if (check == 0)
            alert("Vui lòng nhập đầy đủ thông tin");
        else if (check == -1) { alert("Confirm password không đúng"); }
        else if (check == -2) { alert("Độ dài password >= 3 ký tự"); }
        else {
            callApi('users/', 'POST', {
                firstName: valueUsername,
                lastName: '',
                gender: "",
                email: valueEmail,
                password: valuePass,
                number: ""
            }).then(res => {
                if (res.data.success == 1) {
                    alert("Created successfully");
                    window.location.href = "/login";
                }
                else if (res.data.success == -1) { alert('Email Existence. Please enter another email'); }
                else { alert("Database connection error"); }
                setValueUsername('');
                setValueEmail('');
            })
        }
        setValuePass('');
        setvalueConfirmPass('');
    }

    return (
        <Grid container style={{ backgroundColor: 'rgba(238, 253, 253, 1)', borderRadius: '0px 25px 25px 0px', paddingTop: '50px', height: '100%' }}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.text}
                    id="outlined-textarea"
                    label="Username"
                    placeholder="Username"
                    multiline
                    variant="outlined"
                    color="red"
                    value={valueUsername}
                    onChange={(event, valueUsername) => setValueUsername(event.target.value)}
                />
                <TextField
                    className={classes.text}
                    id="outlined-textarea"
                    label="Email"
                    placeholder="Email"
                    multiline
                    variant="outlined"
                    value={valueEmail}
                    onChange={(event, valueEmail) => setValueEmail(event.target.value)}
                />
                <TextField
                    className={classes.text}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    variant="outlined"
                    value={valuePass}
                    onChange={(event, valuePass) => setValuePass(event.target.value)}
                />
                <TextField
                    className={classes.text}
                    id="outlined-password-input"
                    label="ConfirmPassword"
                    placeholder="ConfirmPassword"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    value={valueConfirmPass}
                    onChange={(event, valueConfirmPass) => setvalueConfirmPass(event.target.value)}
                />

                <ColorButton onClick={Save} variant="contained" color="primary" className={classes.margin}>
                    Register
                    </ColorButton>
                <div className={classes.note}>
                    <p>Fast signup with your favourite social profile</p>
                </div>
                <div className={classes.icon}>
                    <FacebookIcon style={{ color: '#648DAE', fontSize: 'default', marginTop: '-10px', marginRight: '10px' }} />
                    <LinkedInIcon style={{ color: '#648DAE', fontSize: 'default', marginTop: '-10px', marginRight: '10px' }} />
                    <TwitterIcon style={{ color: '#648DAE', fontSize: 'default', marginTop: '-10px', marginRight: '10px' }} />
                    <InstagramIcon style={{ color: '#648DAE', fontSize: 'default', marginTop: '-10px' }} />
                </div>

            </form>

        </Grid>
    )
}

export default Register;