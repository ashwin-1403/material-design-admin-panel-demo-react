import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import {signin} from './slice';
import Typography from '@material-ui/core/Typography';
import {PublicSideBar} from '../../../components/publicSideBar';

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .trim("space not allowed")
    .matches(/^\s*\S[\s\S]*$/, { message: "Blank Space not Allowed" })
    .min(8,"Password must have altest 8 character long")
    .required("Password is required"),
});

const useStyles = makeStyles((theme) => ({
 
  loginContainer:{
    marginTop:"202px"
  },
  para:{
    color: "rgb(99, 115, 129)"
  },
  submitBtn:{
    fontWeight:"700"
  },
  getStart:{
    margin:"0px",
    fontWeight:"600",
    textDecoration:"none",
    color:"rgb(0, 69, 255)",
    fontSize:"0.875rem",
    fontFamily:"Public Sans, sans-serif",
    marginLeft:"8px",
    lineHeight: "1.57143"
  },
  getStartPara:{
    fontWeight:"400",
    fontFamily:"Public Sans, sans-serif",
    fontSize:"0.875rem",
    lineHeight: "1.57143"
  }
}));

const Signin = () => {
  const classes = useStyles();
  const [remember_me, setRemember_me] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      
      dispatch(signin(values));
    },
  });
  const handleRemember = (event) => {
    
    setRemember_me(event.target.checked);
    
  };
  return (
    <div>
      <Container >
        <Grid  container spacing={2}>
          <PublicSideBar/>
          <Grid item md={8} >
            <p style={{ float: "right" }} className={classes.getStartPara}>
              Don’t have an account ?
              <Link to="/register" className={classes.getStart}>
                Get started
              </Link>
            </p>
            <Box mt={15}>
              <Container maxWidth="sm">

                <Box justifyContent="center" className={classes.loginContainer}>
                  <Box color="text.primary">
                    <Typography variant="h2">Sign in to demo</Typography>
                  </Box>
                  <Box color="text.primary">
                    < Typography component="p" className={classes.para}>Enter your details below.</Typography>
                  </Box>
                  
                  <form onSubmit={formik.handleSubmit}>
                    <Box color="text.primary">
                      <TextField
                        fullWidth
                        id="email"
                        variant="outlined"
                        name="email"
                        label="Email address"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Box>
                    <br></br>
                    <Box color="text.primary">
                      <TextField
                        fullWidth
                        id="password"
                        name="password"
                        variant="outlined"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                      />
                    </Box>
                    <Box mt={2} mb={2}>
                      <Grid container xs={12} spacing={12}>
                        <Grid item sm={6}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={remember_me}
                                onChange={handleRemember}
                                name="remember"
                                color="primary"
                              />
                            }
                            label="Remember me"
                          />
                        </Grid>

                        <Box mt={1} ml={18} >
                          <Grid item sm={6}>
                            <Link className={classes.getStart} to="/request-password">
                              Forget Password
                            </Link>
                          </Grid>
                        </Box>
                      </Grid>
                    </Box>
                    <Button
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                      className={classes.submitBtn}
                    >
                      Login
                    </Button>
                  </form>
                </Box>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Signin;
