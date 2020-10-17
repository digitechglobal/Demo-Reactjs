import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, blue } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';

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

function Login() {
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
            '.MuiTextField-root': {
                color: 'red',
            }
        },
    }))(Button);

    return (
        <Grid container style={{ backgroundColor: 'rgba(225, 230, 230, 1)', borderRadius: '0px 25px 25px 0px', paddingTop: '50px', height: '100%' }}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.text}
                    id="outlined-textarea"
                    label="Email/Username"
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
                <ColorButton variant="contained" color="primary" className={classes.margin}>
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