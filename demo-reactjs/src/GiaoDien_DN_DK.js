import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './GiaoDien_DN_DK.css';
import Login from './UI_Login';
import Register from './UI_Register';



const useStyles = makeStyles({
    root: {
        height: '720px',
        background: "url('./img/1.jpg') no-repeat center fixed",
        backgroundSize: 'cover',
    },
});

function GiaoDien() {
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
                alignItems: 'center',
                flexDirection: 'column',
                position: 'relative',
            }}>
                {/* Title */}
                <div className="title">
                    <h1 style={{ margin: '0px' }}>SIGN IN FORM</h1>
                </div>
                {/* end Title */}

                <div className="khung">
                    {/* imgLeft */}
                    <div className="imageLeft">
                        <img style={{ borderRadius: '25px 0px 0px 25px' }} src="./img/1.jpg" alt="background-UI-Login" width="100%" height="100%" />
                    </div>
                    {/* end imgLeft */}

                    {/* Tab nhap thong tin */}
                    <div className="card">
                        <BrowserRouter>
                            <Paper style={{ borderRadius: '0px 25px 0px 0px', backgroundColor: 'rgb(240 254 255 / 72%)' }} className="tab">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    <Link to="/" className="link">
                                        <Tab label="Đăng Nhập" />
                                    </Link>
                                    <Link to="/dangky" className="link">
                                        <Tab label="Đăng Ký" />
                                    </Link>
                                </Tabs>
                            </Paper>

                            <Switch>
                                <Route exact path="/"><Login /></Route>
                                <Route path="/dangky"><Register /></Route>
                            </Switch>
                        </BrowserRouter>
                    </div>
                    {/* end tab nhap thong tin */}
                </div>
            </div>
        </div>
    );
}

export default GiaoDien;