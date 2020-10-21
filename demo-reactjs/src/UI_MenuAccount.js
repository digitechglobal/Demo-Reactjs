import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Profile from './UI_Profile';

const StyledMenu = withStyles({
  paper: {
    //border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    // '&:focus': {
    //     backgroundColor: theme.palette.primary.main,
    //     '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //         color: theme.palette.common.white,
    //     },
    // },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const history = useHistory();
  const { user } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button style={{ backgroundColor: 'transparent', boxShadow: 'none', paddingTop: '15px' }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="transparent"
        onClick={handleClick}
      >
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', marginLeft: '-40px' }}>
          <AccountCircleIcon style={{ marginRight: '5px', fontSize: '40px' }} />
          <p style={{ fontSize: '15px', textTransform: 'uppercase', marginTop: '23px' }}>{user.firstName}</p>
        </div>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => { setAnchorEl(null); }}
      >

        <StyledMenuItem onClick={() => { setAnchorEl(null); history.push('/profile') }}>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => { setAnchorEl(null); Cookies.set('accessToken', null); window.location.href = "/" }}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
