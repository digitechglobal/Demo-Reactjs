import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import './GiaoDien_DN_DK.css';
import Login from './UI_Login';
import Register from './UI_Register';
import styles from './styles';

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

function SignUp() {
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
                backgroundColor: 'rgba(216, 216, 216, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                {/* Title */}
                {/* <div className="title">
                    <h1 style={{ margin: '0px' }}>SIGN IN FORM</h1>
                    <div style={{ float: 'right', width: '50px', height: '50px', marginTop: '-100px', marginRight: '3%' }}>
                        <Button type="button" onClick={handleOpen}>
                            <CloseIcon style={{ fontSize: '60px' }} />
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <Menu />
                        </Modal>
                        <Link path="/"><CloseIcon style={{ fontSize: '60px' }} /></Link>
                    </div>
                </div> */}

                {/* end Title */}

                <div className="khung">
                    {/* imgLeft */}
                    <div className="imageLeft">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%', height: '100%',
                        }}>
                            <img style={{ borderRadius: '25px 0px 0px 25px', transform: 'scaleX(-1)' }}
                                src="./img/banner-img.png" alt="bg-image-left" width="90%" height="75%" />
                        </div>
                    </div>
                    {/* end imgLeft */}

                    {/* Tab nhap thong tin */}
                    <div className="card">
                        {/* <BrowserRouter> */}
                        <Paper className="tab" style={{ height: '100%', borderRadius: '0px 25px 25px 0px' }}>
                            <Tabs style={{ borderRadius: '0px 25px 0px 0px' }}
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="Đăng Nhập" {...a11yProps(0)} />
                                <Tab label="Đăng Ký" {...a11yProps(1)} />
                            </Tabs>
                            <TabPanel style={{ height: '100%', marginTop: '-48px' }} value={value} index={0}>
                                <Login style={{ backgroundColor: 'rgb(225, 230, 230)', borderRadius: '0px 25px 25px', height: '100%' }} />
                            </TabPanel>
                            <TabPanel style={{ height: '100%', marginTop: '-48px' }} value={value} index={1}>
                                <Register style={{ width: '100%', height: '100%' }} />
                            </TabPanel>
                        </Paper>
                    </div>
                    {/* end tab nhap thong tin */}
                </div>
            </div>
        </div>
    );
}

export default SignUp;