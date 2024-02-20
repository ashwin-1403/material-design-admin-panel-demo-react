import React, { useEffect, useState } from "react";
// import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
// import { reducer } from 'redux-oidc';
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
// import { selectUserInstance } from 'app/common/auth/selectors';
import EditIcon from "@material-ui/icons/Edit";
import { Edit as EditMeninmizeIcon } from "react-feather";
import avatar from "../../../../src/assets/images/profile_pic.jpg";
// import Avatar from '@material-ui/core/Avatar';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  Typography,
  makeStyles,
} from "@material-ui/core";

import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  MessageCircle as MessageIcon,
  Calendar as CalenderIcon,
} from "react-feather";

import NavItem from "./NavItem";

import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import SpeedIcon from "@material-ui/icons/Speed";
import StoreIcon from "@material-ui/icons/Store";
import AssessmentIcon from "@material-ui/icons/Assessment";
import MultilineChartIcon from "@material-ui/icons/MultilineChart";
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 280,
  },
  desktopDrawer: {
    width: 280,
    top: 100,
    left: "2%",
    height: "calc(80% - 80px)",
    borderRadius: 10,
    [theme.breakpoints.up("md")]: {
      height: "calc(95% - 80px)",
    },
  },
  desktopMinimizeDrawer: {
    width: 80,
    top: 100,
    left: "2%",
    height: "calc(80% - 80px)",
    borderRadius: 10,
  },
  avatar: {
    cursor: "pointer",
    width: 125,
    height: 125,
    marginBottom: 15,
    marginTop: 15,
  },
  avatarMinimize: {
    cursor: "pointer",
    width: 50,
    height: 50,
    marginBottom: 15,
    marginTop: 15,
  },
  name: {
    color: theme.palette.primary.dark,
    textAlign: "center !important",
  },
  role: {
    marginBottom: 10,
    color: theme.palette.primary.dark,
    fontWeight: 100,
    textAlign: "center",
  },
  edit: {
    color: theme.palette.text.disabled,
    textDecoration: "none",
  },
  editMinimizeIcon: {
    fontSize: 25,
    marginTop: 20,
    color: theme.palette.primary.dark,
  },
  editMinimizeSelectedIcon: {
    fontSize: 25,
    marginTop: 20,
    color: theme.palette.primary.main,
  },
  editIcon: {
    fontSize: 15,
    marginRight: 5,
  },
  chevronIconStyle: {
    color: theme.palette.primary.dark,
    cursor: "pointer",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  linkText:{
    color: "#757575",
    textDecoration:"none"
  }
}));

const NavBar = ({ onMobileClose, openMobile, callBack }) => {
  // useInjectReducer({ key: 'oidc', reducer: reducer });
  const classes = useStyles();
  const location = useLocation();
  const [sideBar, setMinimizeBar] = useState(false);
  const sideBarBoolean = sideBar;
  const [open, setOpenAnalysis] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);
  const [openBlog, setOpenBlog] = React.useState(false);
  const [openInbox, setOpenInbox] = React.useState(false);




  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname, sideBar]);

  const handleClickAnanlysis = () => {
    setOpenAnalysis(!open);
  };
  const handleClickUser = () => {
    setOpenUser(!openUser);
  };
  const handleClickBlog = () => {
    setOpenBlog(!openBlog);
  };
  const handleClickInbox = () => {
    setOpenInbox(!openInbox);
  };

  const minimizeContent = (
    <Box height="100%" display="flex" flexDirection="column">
      {/* Collapse content */}
      <Box alignItems="center" display="flex" flexDirection="column" p={1}>
        <Link to="/">
          <Avatar className={classes.avatarMinimize} src={avatar} />
        </Link>
        <Typography color="textPrimary" variant="body2">
          <Link to="/" className={classes.edit}>
            <EditMeninmizeIcon
              className={
                location.pathname === "/provider/edit-profile" ||
                location.pathname === "/edit-profile"
                  ? classes.editMinimizeSelectedIcon
                  : classes.editMinimizeIcon
              }
            />
          </Link>
        </Typography>
      </Box>
      <Box p={1}>
        <List>
          <div>
            <NavItem
              href={"/"}
              key="s"
              title={"s"}
              sidebar={sideBarBoolean}
              icon="f"
            />
          </div>
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box p={2} display={"flex"} justifyContent={"center"}>
        <ChevronRightIcon
          className={classes.chevronIconStyle}
          onClick={() => {
            callBack(!sideBar);
            setMinimizeBar(!sideBar);
          }}
        />
      </Box>
    </Box>
  );

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      {/* side content */}
      <Box alignItems="center" display="flex" flexDirection="column" p={1}>
        <Link to="/">
          <Avatar className={classes.avatar} src={avatar} />
        </Link>
        <Typography className={classes.name} color="textPrimary" variant="h4">
          John Smith
        </Typography>
        <Typography
          className={classes.role}
          color="textPrimary"
          variant="subtitle1"
        >
          Admin
        </Typography>
      </Box>
      <Box p={1}>
        {/* Genral list Start */}
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              GENRAL
            </ListSubheader>
          }
          className={classes.root}
        >
          <Link to="/application" className={classes.linkText}>
            <ListItem button>
              <ListItemIcon>
                <SpeedIcon />
              </ListItemIcon>
              <ListItemText primary="App" />
            </ListItem>
          </Link>

          <Link to="/ecommerce" className={classes.linkText}>
            <ListItem button>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="E-Commers" />
            </ListItem>
          </Link>

          <ListItem button onClick={handleClickAnanlysis}>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/analysis" className={classes.linkText}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <MultilineChartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Adwance Analytics" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </List>
        {/* Genral list End */}

        {/* Management list Start */}
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Management
            </ListSubheader>
          }
          className={classes.root}
        >

          <ListItem button onClick={handleClickUser}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
            {openUser ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openUser} timeout="auto" unmountOnExit>

            <List component="div" disablePadding>
              <Link to="/user-profile" className={classes.linkText}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
              </Link>

              <Link to="/user-account" className={classes.linkText}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <AccountTreeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Account" />
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <ListItem button onClick={handleClickBlog}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
            {openBlog ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openBlog} timeout="auto" unmountOnExit>

            <List component="div" disablePadding>
              <Link to="/blog-post" className={classes.linkText}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Post" />
                </ListItem>
              </Link>

              <Link to="/blog-newpost" className={classes.linkText}>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <AccountTreeIcon />
                  </ListItemIcon>
                  <ListItemText primary="New-Post" />
                </ListItem>
              </Link>
            </List>
          </Collapse>

        </List>
        {/* Management list End */}
{/* App List Start */}
        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          App
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button onClick={handleClickInbox}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {openInbox ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openInbox} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
      {/* App list End */}
      </Box>
      <Box flexGrow={1} />
      <Box p={2} display={"flex"} justifyContent={"flex-end"}>
        <ChevronLeftIcon
          className={classes.chevronIconStyle}
          size={25}
          onClick={() => {
            callBack(!sideBar);
            setMinimizeBar(!sideBar);
          }}
        />
      </Box>
    </Box>
  );

  return (
    <>
      {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={
            sideBar
              ? { paper: classes.desktopMinimizeDrawer }
              : { paper: classes.desktopDrawer }
          }
          open
          variant="persistent"
        >
          {sideBar ? minimizeContent : content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
