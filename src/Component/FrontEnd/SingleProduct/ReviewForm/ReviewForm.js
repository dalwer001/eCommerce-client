import React from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
// import'./ReviewForm.css';

const ReviewForm = () => {
    const classes = useStyles();
return (
    <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}  action="">
                <Typography variant="h6">
                    Add review
                </Typography>
                <TextField name="creator" label="Your review*"  fullWidth className={classes.fileInput} />
                <TextField name="title" label="name*" fullWidth  />
                <TextField name="message" label="email*" fullWidth  />

                <Button variant="contained" className={classes.buttonSubmit} color="primary" size="large" type="submit" >
                    Submit
                </Button>
            </form>
        </Paper>


);
};

export default ReviewForm;