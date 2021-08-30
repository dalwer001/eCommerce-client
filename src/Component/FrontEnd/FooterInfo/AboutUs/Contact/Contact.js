import React from 'react';
import { TextField, Button, TextareaAutosize, Paper } from '@material-ui/core';
import useStyles from '../../../SingleProduct/ReviewForm/styles';
import Navbar from '../../../Shared/Navbar/Navbar';

const Contact = () => {
    const classes = useStyles();
    return (
        <section className="p-5">
            <div className="container p-5">
                <Navbar></Navbar>
                <div className="text-center mt-5 mb-5">
                    <h1 className="text-center mb-5">Get in Touch</h1>
                    <p style={{ color: "#93C4CD", fontWeight: "700" }}>Contact us for any further questions, possible business partnerships</p>
                </div>
                <div className="row m-0 p-5">
                    <div className="col-md-4 text-center">
                        <p><i class="fas fa-comments fs-1"></i></p>
                        <h4 className="p-3">Let’s talk</h4>
                        <p>Phone: 123.4567.8899</p>
                        <p>Fax: 123.4567.88991</p>
                        <p><u>hello@konatheme.com</u></p>
                    </div>
                    <div className="col-md-4 text-center">
                        <p><i class="fas fa-store fs-1"></i></p>
                        <h4 className="p-3">Visit our Store</h4>
                        <p>Elizabeth Street 123</p>
                        <p>50050 Sydney</p>
                        <p><u>See the map</u></p>
                    </div>
                    <div className="col-md-4 text-center">
                        <p><i class="fas fa-users fs-1"></i></p>
                        <h4 className="p-3">Start your career</h4>
                        <p>Commodo ad sint hashtag,</p>
                        <p>voluptate consequat vero veniam.</p>
                        <p><u>career@konatheme.com</u></p>
                    </div>
                </div>
            </div>
            <div className="row m-0 px-5">
                <div className="col-md-4 p-5">
                    <h3 className="mt-5">Get in contact with us by filling out our contact form.</h3>
                </div>
                <div className="col-md-8 px-5">
                    <h1 className="text-center mb-3">Contact</h1>
                    <Paper className={classes.paper}>
                        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} action="">
                            <TextField name="Name*" label="Your review*" fullWidth />
                            <TextField name="Email*" label="name*" fullWidth />
                            <TextField name="Subject" label="email*" fullWidth />
                            <TextField label="Message*" multiline rows={5} rowsMax={7} fullWidth/>
                            <Button variant="contained" className={classes.buttonSubmit} color="primary" size="large" type="submit" >
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </div>
            </div>
        </section>
    );
};

export default Contact;