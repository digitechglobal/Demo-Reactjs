import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { callApiAuth } from './../../Services/apiCaller';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styles_ChangeProfile, ColorButton } from './../../Styles/styles';

const useStyle = makeStyles((theme) => ({
    ...styles_ChangeProfile(theme)
}));


function ChangeProfile() {
    let user = '';
    user = Cookies.get('accessToken');
    const pasrseUser = JSON.parse(user);
    const [infoUser, setInfoUser] = useState({});
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

    const ButtonCus = withStyles((theme) => ({
        ...ColorButton(theme)
    }))(Button);

    const validationSchema = Yup.object().shape({
        firstName: Yup
            .string()
            .required('Required'),

        lastName: Yup
            .string()
            .matches(/^[a-zA-Z0-9_-]+$/, 'Không chứa ký tự đặc biệt'),

        number: Yup
            .string()
            .matches(/^[0-9]+$/, "Phải là chữ số")
            .min(10, 'SĐT tối thiểu 10 chữ số')
            .max(11, 'SĐT tối đa 11 chữ số'),

        gender: Yup
            .mixed()
            .oneOf(['male', 'female', 'other', 'Male', 'Female', 'Other'], 'Không đúng định dạng'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            ...infoUser,
        },
        validationSchema: validationSchema,
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

                }
                else {
                    alert("Failed to update user");
                }
            })
        },
    });
    const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = formik;

    return (
        <Grid container className={classes.root}>
            <form onSubmit={handleSubmit} className={classes.form} noValidate autoComplete="off">
                <div className={classes.name_username}>
                    <TextField
                        className={classes.text}
                        id="outlined-textarea"
                        multiline
                        name="firstName"
                        error={errors.firstName}
                        helperText={errors.firstName}
                        placeholder="User"
                        variant="outlined"
                        value={values.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        style={{ marginLeft: '11px' }}
                        className={classes.text}
                        id="outlined-textarea"
                        multiline
                        name="lastName"
                        variant="outlined"
                        placeholder="Name"
                        error={errors.lastName}
                        helperText={errors.lastName}
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
                    error={errors.gender}
                    helperText={errors.gender}
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
                    error={errors.number}
                    helperText={errors.number}
                    onChange={handleChange}

                />
                <div>
                    <ButtonCus
                        disabled={Object.keys(errors).length === 0 ? false : true}
                        type="submit"
                        variant="contained"
                        color="primary">
                        Update
                    </ButtonCus>
                </div>

            </form>

        </Grid>
    )
}

export default ChangeProfile;