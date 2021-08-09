import React from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
// import'./ReviewForm.css';
import { useContext } from 'react';
import { UserContext } from '../../../../App';

const ReviewForm = () => {
    const classes = useStyles();
     const[loggedInUser, setLoggedInUser]=useContext(UserContext);
     console.log(loggedInUser);
return (
    <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}  action="">
                <Typography variant="h6">
                    Add review
                </Typography>
                <TextField name="name" label="name*" value={loggedInUser.name} fullWidth  />
                <TextField name="email" label="email*"value={loggedInUser.email} fullWidth  />
                <TextField name="description" label="Your review*" multiline minRows={4} fullWidth />
                <Button variant="contained" className={classes.buttonSubmit} color="primary" size="large" type="submit" >
                    Submit
                </Button>
            </form>
        </Paper>
);
};

export default ReviewForm;