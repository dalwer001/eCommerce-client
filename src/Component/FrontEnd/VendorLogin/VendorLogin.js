import React from "react";
import "./VendorLogin.css";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./VendorStyle.js";
import { Carousel } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
const VendorLogin = () => {
  const classes = useStyles();
  return (
    <div className="vendorLogin">
      <div
        style={{ height: "400px" }}
        className="row d-flex align-items-center w-75"
      >
        <div className="col-md-6 offset-md-1 sideWrite">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
                alt="First slide"
              />
              <Carousel.Caption className="justify-content-center"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                alt="Second slide"
              />

              <Carousel.Caption className="justify-content-between"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-md-4">
          <Paper className={classes.paper}>
            <form
              autoComplete="off"
              noValidate
              className={`${classes.root} ${classes.form}`}
              action=""
            >
              <Typography variant="h6">Vendor Login</Typography>

              <TextField name="title" label="name*" fullWidth />
              <TextField name="message" label="email*" fullWidth />

              <Button
                variant="contained "
                className={classes.buttonSubmit}
                size="large"
                type="submit"
              >
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
