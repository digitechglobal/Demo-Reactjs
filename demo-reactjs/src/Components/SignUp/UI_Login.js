import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { callApi } from './../../Services/apiCaller';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styles_Login, ColorButton } from './../../Styles/styles';


const useStyle = makeStyles((theme) => ({
    ...styles_Login(theme)
}));

const ButtonCus = withStyles((theme) => ({
    ...ColorButton(theme)
}))(Button);

function Login() {
    const classes = useStyle();

    const validationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("Invalid email format")
            .required("Required!"),

        password: Yup
            .string()
            .min(8, "Minimum 8 characters")
            .required("Required!")
            .matches(/^[a-zA-Z0-9_-]+$/, 'Không chứa ký tự đặc biệt'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            callApi('users/login2', 'POST', {
                email: values.email,
                password: values.password
            }).then(res => {
                if (res.data.success == 1) {
                    alert("Login Successfully");
                    Cookies.set('accessToken', res.data, { expires: 86400 })
                    window.location.href = "/";
                }
                else if (res.data.success == -1) { alert("Invalid email"); }
                else if (res.data.success == 0) { alert("Invalid password"); }
                else { alert("Login failed"); }
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
                        id="outlined-textarea"
                        name="email"
                        placeholder="Email"
                        multiline
                        variant="outlined"
                        value={values.email}
                        error={errors.email}
                        helperText={errors.email}
                        onChange={handleChange}
                    />

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
                    <ButtonCus
                        disabled={Object.keys(errors).length === 0 ? false : true}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </ButtonCus>
                    <div className={classes.forget}>
                        Forget password?<Link to='#'><i>Click here</i></Link>
                    </div>
                </form>
            </Grid>
        </Grid>
    )
}

export default Login;