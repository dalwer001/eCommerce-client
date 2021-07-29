// import React, { useContext } from 'react';
 import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";


import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
// import { userContext } from '../../../App';
import { useState } from 'react';
 import google from '../../../Images/google.png';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

// const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

//handleBlur
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
//handleSubmit
    const handleSubmit = (e) => {
// creating new user
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
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
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
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
    }

//update User Name
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        })
            .then(function () {
                console.log('User name Updated SuccessFully');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

//google sign in
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                // setLoggedInUser(signedInUser);
                console.log(signedInUser);
                history.replace(from);

                /** @type {firebase.auth.OAuthCredential} */
                var user = result.user;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage);
            });
    }

    return (
        <div className="container">
            <div className="col-md-12">
                <div className="card shadow text-white mx-auto mt-5" style={{ width: '25rem', height: '30rem', backgroundColor:"#A6C3EB" }}>
                    <form className="p-3" onSubmit={handleSubmit}>
                        <h2 className="border-bottom" >{newUser ? 'Create An Account' : 'Login'}</h2>
                        <label className="p-2">{newUser ? 'Name:' : 'Username or Email'}</label>
                        {
                            newUser &&
                            <input type="text" className="form-control" name="name" placeholder="Your Name" onBlur={handleBlur} required />
                
                        }
                        <label className="p-2">{newUser ? 'Username or Email' : ''}</label>
                        <input type="text" className="form-control" name="email" placeholder="Your Email" onBlur={handleBlur} required />
                        <label className="p-2">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="password" onBlur={handleBlur} />
                        <button className="btn btn-danger mt-3 w-100">{newUser ? 'Create An Account' : 'Login'}</button>
                        <p className="text-center pt-2 "> {newUser ? 'Already have an account?' : 'Do not have an account?'} <button className=" bg-info text-white" onClick={()=> setNewUser(!newUser)} name="newUser"> {newUser ? 'Login' : 'Create An Account'}</button></p>
                    </form>
                </div>
                <div>
                    <p style={{ color: 'red', textAlign:'center' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'logged In'}Successfully.</p>}
                </div>
{/* Google Sign in */}
                <div className="text-center mt-3 mb-3 google">
                    <h5>or</h5>
                    <button className="btn btn-light shadow border" onClick={handleGoogleSignIn}> <img className="photo" src={google} alt=""/> Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;