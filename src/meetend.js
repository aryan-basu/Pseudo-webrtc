import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import firebase from "firebase";
import Fire from './firebase';
import { useHistory } from 'react-router-dom';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import "./Home.css"

function Meetend () {
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                         // this value to authenticate with your backend server, if
                         // you have one. Use User.getToken() instead.
      }
      
        const history = useHistory() ;
         async function handleLogout () {
            await Fire.auth().signOut();
            history.push("/");
            };
        return (
          
  
    
            <div className="container2">
       
            <span className="float-right">
                 <button className="logout logo mt-3" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt fa-3x text-success"></i>
                 </button>
                 </span>
                 <img src={photoUrl}className="rounded-circle float-right mt-3 mr-3"height="50"></img>
            

  
  <div className="container mt-5">

            <h1 className="text-center text-light pt-5">You left the meeting</h1>
            <div className="container mt-4">
        <div id="login-row" className="row justify-content-center align-items-center mt-4">
          <div id="login-column" className="col-md-6 mt-4">
            <div id="login-box" className="col-md-8 text-center"></div>
            <button className="btn btn-light text-center btn-block mb-4">Back to the home Screen</button>
            <div className="text-center">
            <button className="btn btn-light">Rejoin</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            
        
        )
    }

export default Meetend;
