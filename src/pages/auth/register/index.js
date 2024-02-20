import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import {PublicSideBar} from '../../../components/publicSideBar';
import Typography from '@material-ui/core/Typography';
// import Logo from '../../../assets/images/logo.png';
// import SideImage from '../../../assets/images/welcome_m_Ui.png';

const genders = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
  {
    value: "others",
    label: "Others",
  },
];

const rolls = [
  {
    value: "customer",
    label: "Customer",
  },
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "vendor",
    label: "Vendor",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  signinBox:{
    marginTop:"100px"
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

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .matches(/^\s*\S[\s\S]*$/, { message: "Blank Space not Allowed" })
    .required("Password is required"),
  userName: yup
    .string()
    .min(2, "Too Short!")
    .matches(/^\s*\S[\s\S]*$/, { message: "Blank Space not Allowed" })
    .max(50, "Too Long!")
    .required("Required"),
  conformPassword: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("password")], "Password not matched"),
  }),
  address: yup
    .string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  city: yup
    .string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  _state: yup
    .string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  zipCode: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits"),
  phone_no: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Phone No Shuld have Atlest 10 digits")
    .max(15, "Phone No Shuld not have more then 15 digits"),
  gender: yup.string().ensure().required("Gender is required!"),
  roll: yup.string().ensure().required("Please select the Roll"),
  date: yup.date().required(),
});

const Signup = () => {
  const classes = useStyles();
  const [gender, setGender] = useState("");
  const [roll, setRoll] = useState("");
  const [date, setDate] = useState("");
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userName: "",
      conformPassword: "",
      address: "",
      city: "",
      _state: "",
      zipCode: "",
      phone_no: "",
      gender: "",
      roll: "",
      date: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleGender = (event) => {
    formik.handleChange(event);
    setGender(event.target.value);
    
  };

  const handleRoll = (event) => {
    formik.handleChange(event);
    setRoll(event.target.value);
    
  };

  const handleDate = (event) => {
    
    formik.handleChange(event);
    setDate(event.target.value);
    
  };
  return (
    <div>
      <Container maxWidth="xl">
        <Grid spacing={0} container>
           <PublicSideBar/>
          <Grid item sm={8} >
            <Typography component="p" style={{ float: "right",marginTop:"5px" }} className={classes.getStartPara}>
              Already have an account? 
              <Link className={classes.getStart} to="/">
                 Login
              </Link>
            </Typography>
            <Box mt={2}>
              <Container maxWidth="sm" mt={5} style={{ backgroundColor: "" }}>
                <Box justifyContent="center" className={classes.signinBox}>
                  <Box color="text.primary">
                    <Typography variant="h2">
                      Signup to demo
                    </Typography>
                  </Box>
                  <Box color="text.primary">
                    <Typography component="p" className={classes.para}>
                      Enter your details below.
                    </Typography>
                  </Box>
                  <Box>
                    <form onSubmit={formik.handleSubmit}>
                      <Box color="text.primary">
                        <TextField
                          fullWidth
                          id="userName"
                          name="userName"
                          variant="outlined"
                          label="User Name"
                          type="text"
                          value={formik.values.userName}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.userName &&
                            Boolean(formik.errors.userName)
                          }
                          helperText={
                            formik.touched.userName && formik.errors.userName
                          }
                        />
                      </Box>
                      <Box color="text.primary" mt={2}>
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
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
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

                      <Box color="text.primary" mt={2}>
                        <TextField
                          fullWidth
                          id="conformPassword"
                          name="conformPassword"
                          variant="outlined"
                          label="Confirm Password"
                          type="password"
                          value={formik.values.conformPassword}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.conformPassword &&
                            Boolean(formik.errors.conformPassword)
                          }
                          helperText={
                            formik.touched.conformPassword &&
                            formik.errors.conformPassword
                          }
                        />
                      </Box>

                      <Box color="text.primary" mt={2}>
                        <TextField
                          fullWidth
                          id="address"
                          name="address"
                          variant="outlined"
                          label="Address"
                          type="text"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.address &&
                            Boolean(formik.errors.address)
                          }
                          helperText={
                            formik.touched.address && formik.errors.address
                          }
                        />
                      </Box>

                      <Box color="text.primary" mt={2}>
                        <TextField
                          fullWidth
                          id="city"
                          name="city"
                          variant="outlined"
                          label="City"
                          type="text"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.city && Boolean(formik.errors.city)
                          }
                          helperText={formik.touched.city && formik.errors.city}
                        />
                      </Box>

                      <Box color="text.primary" mt={2}>
                        <TextField
                          fullWidth
                          id="_state"
                          name="_state"
                          variant="outlined"
                          label="State"
                          type="text"
                          value={formik.values._state}
                          onChange={formik.handleChange}
                          error={
                            formik.touched._state &&
                            Boolean(formik.errors._state)
                          }
                          helperText={
                            formik.touched._state && formik.errors._state
                          }
                        />
                      </Box>

                      <Box color="text.primary" mt={2}>
                        <TextField
                          fullWidth
                          id="zipCode"
                          name="zipCode"
                          variant="outlined"
                          label="Zipcode"
                          type="text"
                          value={formik.values.zipCode}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.zipCode &&
                            Boolean(formik.errors.zipCode)
                          }
                          helperText={
                            formik.touched.zipCode && formik.errors.zipCode
                          }
                        />
                      </Box>

                      <Box color="text.primary" mt={2}>
                        <TextField
                          fullWidth
                          id="phone_no"
                          name="phone_no"
                          variant="outlined"
                          label="Phone Number"
                          type="text"
                          value={formik.values.phone_no}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.phone_no &&
                            Boolean(formik.errors.phone_no)
                          }
                          helperText={
                            formik.touched.phone_no && formik.errors.phone_no
                          }
                        />
                      </Box>

                      <Box color="text.primary" mt={2}>
                        <TextField
                          id="gender"
                          name="gender"
                          fullWidth
                          select
                          label="Gender"
                          value={gender}
                          // onChange={formik.handleChange}
                          // onChange={() => { formik.handleChange; handleGender();}}
                          onChange={handleGender}
                          // helperText="Please select your Gender"
                          variant="outlined"
                          error={
                            formik.touched.gender &&
                            Boolean(formik.errors.gender)
                          }
                          helperText={
                            formik.touched.gender && formik.errors.gender
                          }
                        >
                          {genders.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>

                      <Box color="text.primary" mt={2}>
                        <TextField
                          id="roll"
                          name="roll"
                          fullWidth
                          select
                          label="Roll"
                          value={roll}
                          // onChange={formik.handleChange}
                          // onChange={() => { formik.handleChange; handleGender();}}
                          onChange={handleRoll}
                          // helperText="Please select your Gender"
                          variant="outlined"
                          error={
                            formik.touched.roll && Boolean(formik.errors.roll)
                          }
                          helperText={formik.touched.roll && formik.errors.roll}
                        >
                          {rolls.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>

                      <Box mt={2}>
                        <TextField
                          id="date"
                          name="date"
                          label="Birthday"
                          fullWidth
                          type="date"
                          // defaultValue="2017-05-24"
                          className={classes.textField}
                          onChange={handleDate}
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          error={
                            formik.touched.date && Boolean(formik.errors.date)
                          }
                          helperText={formik.touched.date && formik.errors.date}
                        />
                      </Box>

                      <Box mt={2}>
                        <Button
                          color="primary"
                          variant="contained"
                          fullWidth
                          type="submit"
                          className={classes.submitBtn}
                        >
                         Sign-up
                        </Button>
                      </Box>
                    </form>
                    <Box mt={2} ml={27} mb={5} justifyContent="center">
                      <Link to="/request-password" className={classes.getStart}>
                       Forget Password
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Signup;