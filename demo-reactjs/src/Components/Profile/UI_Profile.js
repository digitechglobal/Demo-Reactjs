import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ChangeProfile from './UI_ChangeProfile';
import ChangePass from './UI_ChangePassword';
import { styles_Profile } from './../../Styles/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import ButtonCus from './../Public/compo_Button';

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
  ...styles_Profile(theme)
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
            <div className={classes.imageLeft}>
              {/* <img src="./img/banner-img.png" alt="bg-image-left" width="100%" height="100%" /> */}
              <img src="./img/avatar.png" alt="bg-image-left" className={classes.avatar} />
              <ButtonCus content='Change Image' />
            </div>
            {/* end imgLeft */}
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} container>
            {/* Tab nhap thong tin */}
            <div className={classes.card_Profile}>
              <Paper className={classes.tab_Profile}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="Profile" {...a11yProps(0)} />
                  <Tab label="Change Password" {...a11yProps(1)} />
                </Tabs>
                <TabPanel className={classes.tabpanel_Profile} value={value} index={0}>
                  <ChangeProfile />
                </TabPanel>
                <TabPanel className={classes.tabpanel_Profile} value={value} index={1}>
                  <ChangePass />
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