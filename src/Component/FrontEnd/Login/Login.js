import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router";
import firebaseConfig from "./firebase.config";
import "./Login.css";
import google from "../../../Images/google.png";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    height: "393px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginO = () => {
  const [newUser, setNewUser] = useState(true);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  //handleBlur
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  //handleSubmit
  const handleSubmit = (e) => {
    // creating new user
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          // setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    // login for existing user
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          // setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };

  //update User Name
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("User name Updated SuccessFully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //google sign in
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        // setLoggedInUser(signedInUser);
        console.log(signedInUser);
        history.replace(from);

        /** @type {firebase.auth.OAuthCredential} */
        var user = result.user;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {newUser ? "Create An Account" : "Login"}
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            {newUser && (
              <TextField
                label={newUser ? "Name:" : "Username or Email"}
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name"
                onBlur={handleBlur}
                required
              />
            )}
            <TextField
              label={newUser ? "Your Email" : "UserName or Email"}
              margin="normal"
              required
              fullWidth
              id="email"
              type="text"
              name="email"
              onBlur={handleBlur}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onBlur={handleBlur}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {newUser ? "Create An Account" : "Login"}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <p className="text-center pt-2 ">
                  {" "}
                  {newUser
                    ? "Already have an account?"
                    : "Do not have an account?"}{" "}
                  <button
                    className="bg-white"
                    onClick={() => setNewUser(!newUser)}
                    name="newUser"
                  >
                    {" "}
                    {newUser ? "Login" : "Create An Account"}
                  </button>
                </p>
              </Grid>
            </Grid>
            <div className="text-center  mb-3 google">
              <h5>or</h5>
              <button
                className="btn btn-light shadow border"
                onClick={handleGoogleSignIn}
              >
                {" "}
                <img className="photo" src={google} alt="" /> Continue with
                google
              </button>
            </div>

            <div>
              <p style={{ color: "red", textAlign: "center" }}>{user.error}</p>
              {user.success && (
                <p style={{ color: "green" }}>
                  User {newUser ? "Created" : "logged In"}Successfully.
                </p>
              )}
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default LoginO;
