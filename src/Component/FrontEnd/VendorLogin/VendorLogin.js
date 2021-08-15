import React, { useContext, useState, useEffect } from 'react';
import './VendorLogin.css'
import { useParams } from 'react-router-dom';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './VendorStyle.js';
import { Carousel } from 'react-bootstrap';
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
const VendorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vendors, setVendors] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/vendorSidebar" } };

  useEffect(() => {
    fetch("https://pacific-plateau-10670.herokuapp.com/vendors")
      .then((res) => res.json())
      .then((data) => setVendors(data));
  }, []);

  const vendorStatus = () => {
    return vendors.filter(vendor => vendor.status === "Accepted")
      .map(vendor =>console.log(vendor.status))
  }


  const logInUser = async (e) => {
    e.preventDefault();

    const res = await fetch('https://pacific-plateau-10670.herokuapp.com/signIn', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password, status: vendorStatus()
      })
    });



    const data = res.json();
    if (res.status === 400 || !data || !vendorStatus()) {
      window.alert('Invalid Credentials');
    }

    // else if(!vendors.status==="Accepted" && !vendors.email && !vendors.password){
    //   window.alert('Invalid Credentials');
    // }
    else {
      // if(){
      //   window.alert('Invalid Credentials');
      // }
      // else{
      window.alert("Login Successful");
      const signedInUser = {
        email: email,
        password: password

      }
      setLoggedInUser(signedInUser);
      // storeAuthToken();

      history.replace(from);
      history.push('/vendorSidebar');
      // }
    }

  }

  return (

    <div className="vendorLogin">

      <div style={{ height: '100%' }} className="row d-flex align-items-center w-75">
        <div className="col-md-6 offset-md-1 sideWrite">
          <Carousel>
            <Carousel.Item>

              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                alt="First slide"
              />
              <Carousel.Caption className="justify-content-center">

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                alt="Second slide"
              />

              <Carousel.Caption className="justify-content-between">

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="Third slide"
              />

              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-md-4">
          <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} action="" method="POST">
              <Typography variant="h6">
                Vendor Login
              </Typography>
              <TextField name="status" type="hidden" value={vendorStatus()} />

              <TextField type="email" name="email" label="email*" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />

              <TextField type="password" name="password" label="password*" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />

              <Button variant="contained " className={classes.buttonSubmit} size="large" type="submit" onClick={logInUser}>
                Submit
              </Button>
              <Grid container>

                <Grid item xs>
                  <p className="text-center pt-2 ">
                    {" "}


                    "Do not have an account?"{" "}
                    <Link href="/VendorRegister" variant="body2">
                      Create an Account
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </form>
          </Paper>

        </div>
      </div>

    </div>


  );
};

export default VendorLogin;
