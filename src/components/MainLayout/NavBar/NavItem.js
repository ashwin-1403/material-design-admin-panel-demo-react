import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Button, ListItem, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: theme.palette.primary.dark,
    fontWeight: '18px',
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%',
    '&:hover': {
      background: 'white',
    },
  },
  icon: {
    // marginRight: theme.spacing(1),
  },
  sideBarIcon: {
    fontSize: 30,
    marginLeft: theme.spacing(1.3),
    marginBottom: theme.spacing(1.5),
  },
  title: {
    marginRight: 'auto',
    fontSize: 18,
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontSize: 18,
    },
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
}));

const NavItem = ({ className, href, icon: Icon, title, sidebar, ...rest }) => {
  const classes = useStyles();

  return (
    // Sidebar List Items
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        component={RouterLink}
        to={href}
      >
        {sidebar == false && <span className={classes.title}>{title}</span>}
        <Icon
          className={sidebar ? classes.sideBarIcon : classes.icon}
          size={sidebar ? '25' : '20'}
        />
      </Button>
    </ListItem>
  );
};

export default NavItem;
