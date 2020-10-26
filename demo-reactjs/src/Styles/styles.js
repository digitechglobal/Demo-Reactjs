import { blue } from '@material-ui/core/colors';

const styles_SignUp = (theme) => ({
    root: {
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        backgroundSize: 'cover',
        paddingTop: '7%',
        paddingBottom: '7%',
        margin: '0px',
        background: 'url("./img/banner-bg.jpg") no-repeat fixed',
        backgroundSize: 'cover',
        '& MuiTabPanel-root': {
            padding: "0px",
        },

        '& MuiTab-textColorPrimary.Mui-selected': {
            color: "#8b76db !important",
        },

        '& PrivateTabIndicator-colorPrimary-3': {
            backgroundColor: "#8b76db !important",
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '40%',
            paddingBottom: '55%',
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: '40%',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '50%',
            paddingBottom: '72%',
        }
    },

    title_SignUp: {
        color: "#7706bec7",
        fontSize: "32px",
        marginTop: "15px",
        width: "100%",
        textAlign: "center",
    },

    khungTrai: {
        backgroundColor: "rgb(240 254 255 / 72%)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        borderRadius: '25px 0px 0px 25px',
        padding: '20px',
        paddingLeft: '40px'
    },

    banner_Signup: {
        width: '100%',
        height: '100%',
        borderRadius: '25px 0px 0px 25px',
        transform: 'scaleX(-1)',
    },

    card_SignUp: {
        width: "100%",
        height: "auto",
        float: "left",
        borderRadius: "0px 25px 25px 0px",
    },

    tab_SignUp: {
        flexGrow: "1",
        borderRadius: "0px 25px 25px 0px",
        backgroundColor: "rgb(240 254 255 / 72%)",
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            borderRadius: '0px',
        }
    },

    tabpanel_SignUp: {
        height: '100%',
        marginTop: '-48px',
    },

    link_SignUp: {
        textDecoration: "none",
        color: "#8b76db",
        '&:hover': {
            color: "#8b76db",
        }
    },

})

const styles_Login = (theme) => ({
    root: {
        backgroundColor: 'rgba(238, 253, 253, 1)',
        borderRadius: '0px 25px 25px 0px',
        paddingTop: '50px', height: '100%',
        [theme.breakpoints.down('sm')]: {
            borderRadius: '0px',
        }
    },

    form: {
        paddingTop: '50px',
        paddingLeft: '30px',
        '& .MuiTextField-root': {
            width: '90%',
            paddingBottom: '20px',
        },
        paddingBottom: '5%'
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
})

const styles_Register = (theme) => ({
    root: {
        backgroundColor: 'rgba(238, 253, 253, 1)',
        borderRadius: '0px 25px 25px 0px',
        paddingTop: '50px',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            borderRadius: '0px',
        }
    },

    form: {
        paddingTop: '50px',
        paddingLeft: '30px',
        '& .MuiTextField-root': {
            width: '90%',
            paddingBottom: '20px',
        },
        paddingBottom: '5%'
    },

    note: {
        marginLeft: '-50px',
        textAlign: 'center',
        fontStyle: 'italic',
        color: 'rgb(103,106,106)',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0px',
        }
    },

    icon: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '-50px',
    },

    icon_items: {
        color: '#648DAE',
        fontSize: 'default',
        marginTop: '-10px',
        marginRight: '10px',
        fontSize: '33px',
    }
})

const styles_Profile = (theme) => ({
    root: {
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        backgroundSize: 'cover',
        paddingTop: '7%',
        paddingBottom: '9.8%',
        margin: '0px',
        background: 'url("./img/banner-bg.jpg") no-repeat fixed',
        backgroundSize: 'cover',
        '& MuiTabPanel-root': {
            padding: "0px",
        },

        '& MuiTab-textColorPrimary.Mui-selected': {
            color: "#8b76db !important",
        },

        '& PrivateTabIndicator-colorPrimary-3': {
            backgroundColor: "#8b76db !important",
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '40%',
            paddingBottom: '55%',
        },
        [theme.breakpoints.down('sm')]: {
            paddingTop: '40%',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '50%',
            paddingBottom: '72%',
        }
    },

    khungTrai: {
        backgroundColor: "rgb(240 254 255 / 72%)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        borderRadius: '10px 0px 0px 10px',
        padding: '20px',
        paddingLeft: '40px'
    },

    imageLeft: {
        borderRadius: '10px 0px 0px 10px',
        width: "366px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
    },

    avatar: {
        width: "65%",
        height: "50%",
        marginBottom: '30px'
    },

    title: {
        width: 'auto',
        textAlign: 'center',
        backgroundColor: 'yellow'
    },


    text_title: {
        fontSize: '32px',
        margin: '0px',
        color: '#0008ff',
        fontWeight: '500',
    },

    card_Profile: {
        width: "100%",
        height: "auto",
        float: "left",
        borderRadius: '0px 10px 10px 0px',
    },

    tab_Profile: {
        flexGrow: "1",
        borderRadius: '0px 10px 10px 0px',
        backgroundColor: "rgb(240 254 255 / 72%)",
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            borderRadius: '0px',
        }
    },

    tabpanel_Profile: {
        height: '100%',
        marginTop: '-48px',
    },

})

const styles_ChangeProfile = (theme) => ({
    root: {
        backgroundColor: 'rgba(238, 253, 253, 1)',
        borderRadius: '0px 10px 10px 0px',
        paddingTop: '25px',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            borderRadius: '0px',
        }
    },


    form: {
        paddingTop: '50px',
        paddingLeft: '30px',
        '& .MuiTextField-root': {
            width: '90%',
            paddingBottom: '20px',
        },
        paddingBottom: '5%'
    },

    name_username: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
    },

    text: {
        width: '50% !important',
    }
})

const styles_ChangePassword = (theme) => ({
    root: {
        backgroundColor: 'rgba(238, 253, 253, 1)',
        borderRadius: '10px',
        paddingTop: '50px',
        paddingBottom: '8%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            borderRadius: '0px',
        }
    },

    form: {
        paddingTop: '50px',
        paddingLeft: '30px',
        '& .MuiTextField-root': {
            width: '90%',
            paddingBottom: '20px',
        },
        paddingBottom: '5%'
    }
})

const ColorButton = (theme) => ({
    root: {
        height: '40px',
        paddingLeft: '0px 10px 10px 0px',
        width: '90%',
        marginBottom: '15px',
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: '#8B76DB',
        '&:hover': {
            backgroundColor: '#BE94FF',
        },
    },
})

export {
    styles_Login,
    ColorButton,
    styles_Register,
    styles_Profile,
    styles_ChangeProfile,
    styles_ChangePassword,
}

export default styles_SignUp;