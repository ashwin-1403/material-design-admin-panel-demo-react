import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import logo from "../../assets/images/logo.png";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon01 from "@material-ui/icons/Notifications";
import GroupIcon from '@material-ui/icons/Group';
import {
  IconFlagIN,
  // IconFlagDE,
  // IconFlagUS
} from "material-ui-flags";
import {logout} from '../../pages/auth/signin/slice';
import {useDispatch} from 'react-redux';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  
  root: {},
  avatar: {
    width: 60,
    height: 60,
  },
  topBar: {
    background: "white",
    height: "70px",
  },
  signoutStyle: {
    margin: "0px",
    fontWeight: "600",
    textDecoration: "none",
    fontFamily: "Public Sans, sans-serif",
    marginLeft: "8px",
    lineHeight: "1.57143",
    fontSize: 16,
    color: theme.palette.primary.dark,
    "&:hover": {
      background: "white",
      border: "none",
      borderRadius: "none",
    },
  },
  notifyBell: {
    color: "black",
    float: "left"
  },
}));

const TopBar = ({ currentUser, className, onMobileNavOpen, ...rest }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [notifications] = useState([]);
  const verInfo = `Image not found`;
  const adminLogout = () => {
    
    dispatch(logout());
  }

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
     
      <Toolbar className={classes.topBar}>

        <RouterLink to="/">
          <img
            src={logo}
            width="42"
            alt={verInfo}
            title={verInfo}
            style={{ padding: 5 }}
          />
        </RouterLink>
        <Typography variant="h5" style={{ marginLeft: 5, color: "#000" }}>
          {"Demo"}
        </Typography>
        <Box flexGrow={1} />
        <Hidden mdDown>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <IconButton>
          <IconFlagIN />
        </IconButton>
        <NotificationsIcon
          className={classes.notifyBell}
        />
        <GroupIcon className={classes.notifyBell}/>
          <IconButton color="inherit">
          <Button
            variant="contained"
            color="primary"
            onClick={() => adminLogout()}
           
          >
                Sign out
              </Button>
          </IconButton>
        </Hidden>

        <Hidden lgUp>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <IconButton>
          <IconFlagIN />
        </IconButton>
        <NotificationsIcon
          className={classes.notifyBell}
        />
        <GroupIcon className={classes.notifyBell}/>
        <IconButton color="inherit">
          <Button
            variant="contained"
            color="primary"
            onClick={() => adminLogout()}
          >
                Sign out
              </Button>
          </IconButton>
          <IconButton color="primary" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
