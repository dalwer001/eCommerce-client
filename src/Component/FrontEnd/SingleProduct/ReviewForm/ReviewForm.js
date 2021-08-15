import React, { useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
// import'./ReviewForm.css';
import { useContext } from 'react';
import { UserContext } from '../../../../App';
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReviewForm = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [singleProduct, setSingleProduct] = useState([]);
    const [review, setReview] = useState({});
    const { id } = useParams();


    useEffect(() => {
        const singleProduct = async () => {
            const res = await axios.get(`https://pacific-plateau-10670.herokuapp.com/products/${id}`);
            setSingleProduct(res.data);
        }
        singleProduct();
    }, [id])

    useEffect(() => {
        const singleProduct = async () => {
            const res = await axios.get(`https://pacific-plateau-10670.herokuapp.com/offerProduct/${id}`);
            setSingleProduct(res.data);
            // console.log(res.data);
        }
        singleProduct();
    }, [id])

    const Review = () => {
        const singleProduct = async () => {
            const res = await axios.get(`https://pacific-plateau-10670.herokuapp.com/products/${id}`);
            setSingleProduct(res.data);
        }
        singleProduct();
    }

    const handleBlur = e => {
        const newInfo = { ...review }
        newInfo[e.target.name] = e.target.value;
        setReview(newInfo);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('id', singleProduct._id);
        formData.append('name', loggedInUser.name);
        formData.append('email', loggedInUser.email);
        formData.append('description', review.description);

        try {
            const res = await axios.post('https://pacific-plateau-10670.herokuapp.com/addReview', formData);
            if (res) {
                e.target.reset();
                alert('Review added successfully');
                Review();
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Add review
                </Typography>
                <TextField name="id" type="hidden" value={id} />
                <TextField name="name" label="name*" value={loggedInUser.name} fullWidth />
                <TextField name="email" label="email*" value={loggedInUser.email} fullWidth />
                <TextField name="description" onBlur={handleBlur} label="Your review*" multiline minRows={4} fullWidth />
                <Button variant="contained" className={classes.buttonSubmit} color="primary" size="large" type="submit" >
                    Submit
                </Button>
            </form>
        </Paper>
    );
};

export default ReviewForm;