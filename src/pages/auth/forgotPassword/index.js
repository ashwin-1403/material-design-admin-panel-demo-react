import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Logo from '../../../assets/images/logo.png';

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const useStyles = makeStyles((theme) => ({
  para: {
    color: "rgb(99, 115, 129)",
  },
  submitBtn: {
    fontWeight: "700",
  },
  logo: {
    height: "60px",
    width: "60px",
    marginLeft: "30px",
    marginTop: "30px",
  },
}));

const ForgotPassword = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Box>
        <img className={classes.logo} src={Logo} alt="logo" />
      </Box>
      <Box mt={18}>
        <Container maxWidth="sm">
          <Box className="MuiBox-root css-2sac1j">
            <Box color="text.primary" mt={2}>
              <h2>Forgot your password?</h2>
            </Box>
            <Box color="text.primary" mt={2}>
              <p className={classes.para}>
                Please enter the email address associated with your account and
                We will email you a link to reset your password.
              </p>
            </Box>
            <form onSubmit={formik.handleSubmit}>
              <Box color="text.primary" mt={2}>
                <TextField
                  fullWidth
                  id="email"
                  variant="outlined"
                  name="email"
                  label="Email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box mt={2}>
                <Button
                  className={classes.submitBtn}
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Reset Password
                </Button>
              </Box>
              <Box mt={2}>
                <Button
                  href="/"
                  color="primary"
                  fullWidth
                  className={classes.submitBtn}
                  type="button"
                >
                  Back
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ForgotPassword;