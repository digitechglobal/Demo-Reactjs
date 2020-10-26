import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { callApi } from './../../Services/apiCaller';
import * as Yup from 'yup';
import { styles_Register, ColorButton } from './../../Styles/styles';


const useStyle = makeStyles((theme) => ({
    ...styles_Register(theme)
}));

const ButtonCus = withStyles((theme) => ({
    ...ColorButton(theme)
}))(Button);

function Register() {
    const classes = useStyle();

    const validationSchema = Yup.object().shape({

        username: Yup
            .string()
            .required()
            .matches(/^[a-zA-Z0-9_-]+$/, 'Không chứa ký tự đặc biệt'),

        email: Yup
            .string()
            .email("Invalid email format")
            .required("Required!"),

        password: Yup
            .string()
            .min(8, "Minimum 8 characters")
            .required("Required!")
            .matches(/^[a-zA-Z0-9_-]+$/, 'Không chứa ký tự đặc biệt'),

        confirmPassword: Yup
            .string()
            .oneOf([Yup.ref("password")], "Password's not match")
            .required("Required!")
            .matches(/^[a-zA-Z0-9_-]+$/, 'Không chứa ký tự đặc biệt'),

    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            callApi('users/', 'POST', {
                firstName: values.username,
                lastName: '',
                gender: "",
                email: values.email,
                password: values.password,
                number: ""
            }).then(res => {
                if (res.data.success == 1) {
                    alert("Created successfully");
                    window.location.href = "/login";
                }
                else if (res.data.success == -1) { alert('Email Existence. Please enter another email'); }
                else { alert("Database connection error"); }
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
                        name="username"
                        placeholder="Username"
                        multiline
                        variant="outlined"
                        color="red"
                        value={values.username}
                        error={errors.username}
                        helperText={errors.username}
                        onChange={handleChange}
                    />
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
                    <TextField
                        className={classes.text}
                        id="outlined-password-input"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        variant="outlined"
                        error={errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        value={values.confirmPassword}
                        onChange={handleChange}
                    />

                    <ButtonCus
                        disabled={Object.keys(errors).length === 0 ? false : true}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Register
                    </ButtonCus>
                    <div className={classes.note}>
                        <p>Fast signup with your favourite social profile</p>
                    </div>
                    <div className={classes.icon}>
                        <FacebookIcon className={classes.icon_items} />
                        <LinkedInIcon className={classes.icon_items} />
                        <TwitterIcon className={classes.icon_items} />
                        <InstagramIcon className={classes.icon_items} />
                    </div>

                </form>
            </Grid>
        </Grid>
    )
}

export default Register;