import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 100,
    marginLeft: 20,
    marginRight: '2%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 'calc(280px + 2%)',
    },
  },
  wrapperMinimize: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 100,
    marginLeft: 20,
    marginRight: '2%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '130px',
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    minHeight: '100%',
    overflow: 'auto',
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [sideBar, setSideBarMinimize] = useState(false);

  useEffect(() => {}, [sideBar]);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        callBack={value => setSideBarMinimize(value)}
      />
      
      <div className={sideBar ? classes.wrapperMinimize : classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
