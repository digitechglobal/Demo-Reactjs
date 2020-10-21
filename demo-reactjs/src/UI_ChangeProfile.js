import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import { callApi, callApiAuth } from './apiCaller';
import Cookies from 'js-cookie';
import { Route, useHistory } from 'react-router-dom';
import { Info } from '@material-ui/icons';
import { useFormik } from 'formik';

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: '50px',
        marginLeft: '30px',

        '& .MuiTextField-root': {
            display: 'flex',
            justifyContent: 'center',
            margin: theme.spacing(1),
            width: '400px',
            marginBottom: '20px',
        },

        '& .MuiInputBase-input.Mui-disabled': {
            color: '#212121',
        }
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
        width: '190px !important',
        marginRight: '11px !important',
    }
}));


function ChangeProfile() {
    let user = '';
    user = Cookies.get('accessToken');
    const pasrseUser = JSON.parse(user);

    const [infoUser, setInfoUser] = useState({});

    const history = useHistory();
    const classes = useStyle();


    const call = () => {
        return callApiAuth(`users/${pasrseUser.id}`, 'GET', null, pasrseUser.token)
            .then(res => {
                return { ...res.data.data };
            })

    };

    const setTest = async () => {
        const kq = await call();
        setInfoUser(kq);
    }

    useEffect(() => {
        setTest();
    }, [])

    const ColorButton = withStyles((theme) => ({
        root: {
            height: '40px',
            marginLeft: '10px',
            width: '150px',
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

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            ...infoUser,
        },
        onSubmit: async (values, { setSubmitting }) => {
            callApiAuth('users/', 'PATCH', {
                id: pasrseUser.id,
                firstName: values.firstName,
                lastName: values.lastName,
                gender: values.gender,
                email: values.email,
                number: values.number
            }).then(res => {
                if (res.data.success > 0) {
                    alert("Updated successfully");
                    //window.location.href = "/login";
                }
                else {
                    alert("Failed to update user");
                }
            })
        },
    });
    const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = formik;

    return (
        <Grid container style={{ borderRadius: '0px 0px 25px 0px', paddingTop: '25px', height: '84%', display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <TextField
                        className={classes.text}
                        id="outlined-textarea"
                        multiline
                        name="firstName"
                        placeholder="User"
                        variant="outlined"
                        value={values.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.text}
                        id="outlined-textarea"
                        multiline
                        name="lastName"
                        variant="outlined"
                        defaultValue={values.lastName}
                        placeholder="Name"
                        value={values.lastName}
                        onChange={handleChange}
                    />

                </div>
                <TextField
                    style={{ marginTop: '0px' }}
                    id="outlined-password-input"
                    name="gender"
                    autoComplete="current-password"
                    placeholder="Gender"
                    variant="outlined"
                    value={values.gender}
                    onChange={handleChange}
                />
                <TextField
                    disabled='true'
                    id="outlined-password-input"
                    name="email"
                    autoComplete="current-password"
                    placeholder="Email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                />
                <TextField
                    id="outlined-password-input"
                    name="number"
                    autoComplete="current-password"
                    placeholder="Number Phone"
                    variant="outlined"
                    value={values.number}
                    onChange={handleChange}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ColorButton type="submit" variant="contained" color="primary" className={classes.margin}>
                        Update
                    </ColorButton>
                </div>

            </form>

        </Grid>
    )
}

export default ChangeProfile;