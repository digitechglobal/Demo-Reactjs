import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Login from './UI_Login';
import Register from './UI_Register';
import styles_SignUp from './../../Styles/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div style={{ height: '100%' }}>{children}</div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    ...styles_SignUp(theme)
}));

function SignUp() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Container className={classes.khung_SignUp}>
                <Grid container >
                    <Grid item xs={12} sm={12} md={6} lg={6} className={classes.khungTrai}>
                        {/* imgLeft */}
                        <div className={classes.banner_Signup}>
                            <img src="./img/banner-img.png" alt="bg-image-left" width="100%" height="100%" />
                        </div>
                        {/* end imgLeft */}
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} container>
                        {/* Tab nhap thong tin */}
                        <div className={classes.card_SignUp}>
                            <Paper className={classes.tab_SignUp}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    <Tab label="Đăng Nhập" {...a11yProps(0)} />
                                    <Tab label="Đăng Ký" {...a11yProps(1)} />
                                </Tabs>
                                <TabPanel className={classes.tabpanel_SignUp} value={value} index={0}>
                                    <Login />
                                </TabPanel>
                                <TabPanel className={classes.tabpanel_SignUp} value={value} index={1}>
                                    <Register />
                                </TabPanel>
                            </Paper>
                        </div>
                        {/* end tab nhap thong tin */}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default SignUp;