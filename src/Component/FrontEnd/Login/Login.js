import React, { useState } from 'react';
import firebase from 'firebase/App';
import "firebase/auth";
import firebaseConfig from './firebase.config';
// import { useContext } from 'react';
// import { UserContext } from '../../App';
// import { useHistory, useLocation } from 'react-router';
import './Login.css'
import image from '../../../Images/google.png'


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
     success: false
    });



    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    //google sign in
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // const { displayName, email } = result.user;
                // const signedInUser = { name: displayName, email }
                // setLoggedInUser(signedInUser);
                history.replace(from);
                const user = result.user;
                
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    //BlurHandling
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


    //Submit handling
    const handleSubmit = (e) => {
        // for creating new user


        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // setLoggedInUser(newUserInfo);
                    updateUserName(user.name);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }


            // for login purpose


        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // setLoggedInUser(newUserInfo);
                    console.log(newUser);
                    console.log('sign in user info', res.user);
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
                console.log('user name Updated SuccessFully');
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="container">
            <div className="col-md-12">
                <div className=" login card shadow text-white mx-auto mt-5" style={{ width: '24rem', height: '31rem' }}>

                    {/* Login form */}
                    <form className="p-3" onSubmit={handleSubmit}>
                        <h2 className="border-bottom" >{newUser ? 'Create An Account' : 'Login'}</h2>
                        <label for="" class="p-2">{newUser ? 'Name:' : 'Username or Email'}</label>
                        {
                            newUser &&
                            <input type="text" class="form-control" name="name" placeholder="Your Name" onBlur={handleBlur} required />
                        }
                        <label for="" class="p-2">{newUser ? 'Username or Email' : ''}</label>
                        <input type="text" class="form-control" name="email" placeholder="Your Email" onBlur={handleBlur} required />
                        <label for="" class="p-2">Password</label>
                        <input type="password" class="form-control" name="password" placeholder="password" onBlur={handleBlur} />
                       
                        <button className="create mt-3 w-100">{newUser ? 'Create An Account' : 'Login'}</button>
                        <p> {newUser ? 'Already have an account?' : 'Do not have an account?'} <button className="buttonStyle" onClick={()=> setNewUser(!newUser)} name="newUser"> {newUser ? 'Login' : 'Create An Account'}</button></p>
                    </form>
                </div>
                <div>
                <p style={{ color: 'red', textAlign:'center' }}>{user.error}</p>
                {user.success && <p style={{ color: 'green' }}>user {newUser ? 'Created' : 'logged In'}Successfully.</p>}
                </div>
                <div className="text-center mt-3 mb-3">
                    <h5>or</h5>
                    <button className="btn btn-light mt-3 w-25 shadow border" onClick={handleGoogleSignIn}><img className="photo" src={image} alt=""/> Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;