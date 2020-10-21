import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Link from '@material-ui/core/Link';
import Cookies from 'js-cookie';
import { Route, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { callApi, callApiAuth } from './apiCaller';
import { Check } from '@material-ui/icons';

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


function ChangePass() {
    let user = '';
    user = Cookies.get('accessToken');
    const pasrseUser = JSON.parse(user);

    const history = useHistory();
    const classes = useStyle();

    const ColorButton = withStyles((theme) => ({
        root: {
            marginTop: '20px',
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

    const checkPass = () => {
        if ((values.password == null) || (values.newPassword == null) || (values.preNewPassword == null) ||
            (values.password == '') || (values.newPassword == '') || (values.preNewPassword == '')) {
            return 0; //Có trường trống
        }
        else {
            if (values.password.length >= 3 && values.newPassword.length >= 3) {
                if (values.newPassword == values.preNewPasswor) {
                    return 1; //Password và Comfirm Password
                }
                return -1;
            }
            else {
                return -2; //Độ dài pass < 3
            }
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            password: '',
            newPassword: '',
            preNewPassword: ''
        },
        onSubmit: async (values, { setSubmitting }) => {

            console.log(pasrseUser.id);
            console.log(values.password);
            console.log(values.newPassword);

            if ((values.password == null) || (values.newPassword == null) || (values.preNewPassword == null) ||
                (values.password == '') || (values.newPassword == '') || (values.preNewPassword == '')) {
                alert("Vui lòng nhập đầy đủ thông tin");
            }
            else {
                if (values.password.length >= 3 && values.newPassword.length >= 3) {
                    if (values.newPassword === values.preNewPassword) {
                        callApiAuth('users/resetpassword', 'PATCH', {
                            id: pasrseUser.id,
                            password: values.password,
                            newpassword: values.newPassword
                        }).then(res => {
                            if (res.data.success == 1) {
                                alert("Success to update user");
                                //window.location.href = "/login";
                            }
                            else if (res.data.success == -1) {
                                alert("Invalid Password");
                            }
                            else if (res.data.success == 0) {
                                alert("Failed to change password user");
                            }
                        })

                        values.password = '';
                        values.newPassword = '';
                        values.preNewPassword = '';
                    }
                    else {
                        alert("Password nhập lại không đúng");
                    }
                }
                else {
                    { alert("Độ dài password mới >= 3 ký tự"); }
                }
            }
        },
    });
    const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = formik;

    return (
        <Grid container style={{ borderRadius: '0px 0px 25px 0px', paddingTop: '25px', height: '84%', display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.text}
                    id="outlined-password-input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                />
                <TextField
                    className={classes.text}
                    id="outlined-password-input"
                    name="newPassword"
                    placeholder="New Password"
                    type="password"
                    variant="outlined"
                    value={values.newPassword}
                    onChange={handleChange}
                />

                <TextField
                    className={classes.text}
                    id="outlined-password-input"
                    name="preNewPassword"
                    placeholder="Pre-New Password"
                    type="password"
                    variant="outlined"
                    value={values.preNewPassword}
                    onChange={handleChange}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ColorButton type="submit" variant="contained" color="primary" className={classes.margin}>
                        Change
                    </ColorButton>
                </div>

            </form>

        </Grid>
    )
}

export default ChangePass;