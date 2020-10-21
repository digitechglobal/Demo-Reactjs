import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import './UI_Profile.css';
import styles from './styles';
import ButtonCus from './compo_Button';
import ChangePass from './UI_ChangePassword';
import ChangeProfile from './UI_ChangeProfile';

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

const useStyles = makeStyles(() => ({
  ...styles
}));

function Profile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div style={{
        height: '100%',
        width: '100%',
        // backgroundColor: 'rgba(216, 216, 216, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        {/* <div style={{ width: 'auto', marginLeft: '350px' }}>
          <h1 style={{ fontSize: '36px', margin: '0px', color: '#0008ff', fontWeight: '500', marginLeft: '-350px' }}>ACCOUNT SETTING</h1>
        </div> */}
        {/* end Title */}

        <div className="khung_Profile">
          {/* imgLeft */}
          <div className="imageLeft_Profile">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}>
              <img src="./img/avatar.png" alt="bg-image-left" width="65%" height="43%" style={{ marginTop: '30px', marginBottom: '30px' }} />

              <ButtonCus content='Change Image' />
            </div>
          </div>
          {/* end imgLeft */}

          {/* Tab nhap thong tin */}
          <div className="card_Profile">
            {/* <BrowserRouter> */}
            <Paper className="tab_Profile" style={{ height: '100%' }}>
              <div style={{ width: 'auto', marginLeft: '350px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '32px', margin: '0px', color: '#0008ff', fontWeight: '500', marginLeft: '-350px', paddingTop: '25px' }}>ACCOUNT SETTING</h1>
                <hr style={{ marginRight: '89px', marginLeft: '-256px' }} />
              </div>
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
              <TabPanel style={{ height: '100%', marginTop: '-48px' }} value={value} index={0}>
                <ChangeProfile />
              </TabPanel>
              <TabPanel style={{ height: '100%', marginTop: '-48px' }} value={value} index={1}>
                <ChangePass />
              </TabPanel>
            </Paper>
          </div>
          {/* end tab nhap thong tin */}
        </div>
      </div>
    </div>
  );
}

export default Profile;