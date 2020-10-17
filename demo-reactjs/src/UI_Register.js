import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, blue } from '@material-ui/core/colors';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

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
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

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

    return (
        <Grid container style={{ backgroundColor: 'rgba(225, 230, 230, 1)', borderRadius: '0px 25px 25px 0px', paddingTop: '50px', height: '100%' }}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.text}
                    id="outlined-textarea"
                    label="Username"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    color="red"
                />
                <TextField
                    className={classes.text}
                    id="outlined-textarea"
                    label="Email"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                />
                <TextField
                    className={classes.text}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
                <TextField
                    className={classes.text}
                    id="outlined-password-input"
                    label="Pre-Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />

                <ColorButton variant="contained" color="primary" className={classes.margin}>
                    Register
                    </ColorButton>
                <div className={classes.note}>
                    <p>Fast signup with your favourite social profile</p>
                </div>
                <div className={classes.icon}>
                    <FacebookIcon style={{ color: '#648DAE', fontSize: 'default', marginTop: '-10px', marginRight: '10px' }} />
                    <LinkedInIcon style={{ color: '#648DAE', fontSize: 'default', marginTop: '-10px', marginRight: '10px' }} />
                    <TwitterIcon style={{ color: '#648DAE', fontSize: 'default', marginTop: '-10px' }} />
                </div>

            </form>

        </Grid>
    )
}

export default Register;