import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import Dashboard from './pages/dashboard';
import Application from './pages/Application/index';
import Ecommerce from './pages/Ecommerce/index';
import Analysis from './pages/Analyctics/index';


import { useDispatch } from 'react-redux';
import { signinCheck } from './pages/auth/signin/slice';
import Signin from './pages/auth/signin/index.js';
import Signup from './pages/auth/register';
import ForgotPassword from './pages/auth/forgotPassword';
import MainLayout from './components/MainLayout';
import Profile from './pages/User/Profile';
import UserAccount from './pages/User/Account';

function Routes() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // const email = useSelector((state) => state.auth?.email);
  // const password = useSelector((state) => state.auth?.password);
  const [isVerified, setVerified] = useState(false);

  useEffect(() => {
    let sEmail = localStorage.getItem("email");
    let sPass = localStorage.getItem("password");
    if (sEmail != undefined && sPass != undefined && sEmail != null && sPass != null) {
      
      setVerified(true);
    } else {
      
      dispatch(signinCheck());
      setVerified(false);
    }
  }, [state]);

  const ProtectedRoute = ({ component: Component, isVerified, ...rest }) => {
    return isVerified ? (
      <Route
        {...rest}
        render={props => {
          return  <MainLayout><Component {...props} /></MainLayout>
        }}
      />
    ) : (
        <Redirect to="/" />
      );
  };

  const PublicRoute = ({component: Component, isVerified, ...rest}) => {
    return !isVerified ? (
      <Route
        {...rest}
        render={props => {
          return <Component {...props} />;
        }}
      />
    ) : (
        <Redirect to="/" />
      );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={(props) =>
          isVerified ? <Redirect to="/dashboard" /> : <Signin />
        } />
        <PublicRoute exact path="/register" component={Signup} isVerified={isVerified} />
        <PublicRoute exact path="/request-password" component={ForgotPassword} isVerified={isVerified} />

        <ProtectedRoute exact path="/dashboard" component={Dashboard} isVerified={isVerified} />

        <ProtectedRoute exact path="/application" component={Application} isVerified={isVerified} />
        <ProtectedRoute exact path="/analysis" component={Analysis} isVerified={isVerified} />
        <ProtectedRoute exact path="/ecommerce" component={Ecommerce} isVerified={isVerified} />
        <ProtectedRoute exact path="/user-profile" component={Profile} isVerified={isVerified} />
        <ProtectedRoute exact path="/user-account" component={UserAccount} isVerified={isVerified} />


        <Route component={Signin} />
      </Switch>
    </Router>
  )
}
export default Routes;