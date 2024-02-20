import React, { memo } from 'react';
import {
    Grid,
    Box
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Logo from '../../assets/images/logo.png';
import SideImage from '../../assets/images/welcome_m_Ui.png';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
    sideImage: {
        marginLeft: "42px",
        maxWidth:"100%"
    },
    welcomeHeading: {
        marginLeft: "30px",
        marginTop: "20%"
    },
    logo: {
        height: "60px",
        width: "60px",
        marginLeft: "30px",
        marginTop: "30px",
        maxWidth:"100%"
    },
    sideBoxx: {
        height: "96vh",
        
    }
}));

export const PublicSideBar = memo((props) => {
    const classes = useStyles();
    return (
        <Grid item md={4} >
            <Box
                boxShadow={3}
                borderRadius={16}
                bgcolor="background.paper"
                mt={2}
                className={classes.sideBoxx}
                // style={{height:"760px"}}
            >
                <div>
                    <img className={classes.logo} src={Logo} alt="logo" />
                </div>
                <h2 className={classes.welcomeHeading}>Hi, Welcome Back User</h2>
                <img src={SideImage} className={classes.sideImage} alt="logo" />
            </Box>
        </Grid>
    );
});