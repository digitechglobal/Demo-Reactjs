import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import { callApiAuth } from './../../Services/apiCaller';
import * as Yup from 'yup';
import { styles_ChangePassword, ColorButton } from './../../Styles/styles';


const useStyle = makeStyles((theme) => ({
    ...styles_ChangePassword(theme)
}));

const ButtonCus = withStyles((theme) => ({
    ...ColorButton(theme)
}))(Button);


function ChangePass() {
    let user = '';
    user = Cookies.get('accessToken');
    const pasrseUser = JSON.parse(user);

    const classes = useStyle();

    const validationSchema = Yup.object().shape({
        password: Yup
            .string()
            .min(8, "Minimum 8 characters")
            .required("Required!"),

        newPassword: Yup
            .string()
            .min(8, "Minimum 8 characters")
            .required("Required!"),

        preNewPassword: Yup
            .string()
            .oneOf([Yup.ref("newPassword")], "Password's not match")
            .required("Required!")

    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            password: '',
            newPassword: '',
            preNewPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            callApiAuth('users/resetpassword', 'PATCH', {
                id: pasrseUser.id,
                password: values.password,
                newpassword: values.newPassword
            }).then(res => {
                if (res.data.success == 1) {
                    alert("Success to update user");
                    Cookies.set('accessToken', null);
                    window.location.href = "/"
                }
                else if (res.data.success == -1) {
                    alert("Invalid Password");
                }
                else if (res.data.success == 0) {
                    alert("Failed to change password user");
                }
            })
        },
    });

    const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = formik;

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                    <TextField
                        className={classes.text}
                        id="outlined-password-input"
                        name="password"
                        placeholder="Password"
                        type="password"
                        variant="outlined"
                        value={values.password}
                        error={errors.password}
                        helperText={errors.password}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.text}
                        id="outlined-password-input"
                        name="newPassword"
                        placeholder="New Password"
                        type="password"
                        variant="outlined"
                        error={errors.newPassword}
                        helperText={errors.newPassword}
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
                        error={errors.preNewPassword}
                        helperText={errors.preNewPassword}
                        value={values.preNewPassword}
                        onChange={handleChange}
                    />
                    <div>
                        <ButtonCus
                            disabled={Object.keys(errors).length === 0 ? false : true}
                            type="submit"
                            variant="contained"
                            color="primary">
                            Change
                    </ButtonCus>
                    </div>

                </form>
            </Grid>
        </Grid>
    )
}

export default ChangePass;