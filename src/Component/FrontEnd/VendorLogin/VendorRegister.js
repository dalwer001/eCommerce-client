import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './VendorLogin.css'
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    marginTop:'100',
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '600px', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
    color:'white',
    backgroundColor: 'white',
    padding: '50px',
    // opacity: 0.5,

    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function VendorRegister() {
  const classes = useStyles();

  const history = useHistory();

  const [user, setUser] = useState({
    firstName:"", lastName:"", companyName:"", contactNumber:"", email:"", password:""
  })
  let name, value;
  const handleInputs=(e)=>{
    console.log(e);
    name= e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
  }

  const PostData = async(e)=>{
    e.preventDefault();

    const {firstName, lastName, companyName, contactNumber, email, password} = user;

    const res = await fetch('https://pacific-plateau-10670.herokuapp.com/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstName, lastName, companyName, contactNumber, email, password
      })

    });

    const data =await res.json();

    if(res.status === 422 || !data){
      window.alert("Invalid Registration");
    }
    else{
      window.alert("Registration Successfully");
      history.push("/vendorLogin");
    }
  }



  return (
      <div className="vendorLogin">
    <Container  component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form method="POST" className={classes.form} onSubmit={PostData} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value={user.firstName}
                onChange={handleInputs}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={user.lastName}
                onChange={handleInputs}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               
                required
                fullWidth
                id="companyName"
                label="Company Name"
                name="companyName"
                value={user.companyName}
                onChange={handleInputs}
                autoComplete="companyName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               
                required
                fullWidth
                id="contactNumber"
                label="Contact Number"
                name="contactNumber"
                value={user.contactNumber}
                onChange={handleInputs}
                autoComplete="contactNumber"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={user.email}
                onChange={handleInputs}
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
               
                required
                fullWidth
                name="password"
                value={user.password}
                onChange={handleInputs}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="dark"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/vendorLogin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    
    </Container>
    </div>
  );
}