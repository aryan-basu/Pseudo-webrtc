import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import firebase from "firebase";
import Signup from "./signup.js";
import { Redirect } from "react-router";

import Fire from './firebase';
import { useHistory } from 'react-router-dom';


import "./meethome.css";

// import GitHubIcon from '@material-ui/icons/GitHub';
function Meethome()
{
    var user = firebase.auth().currentUser;
    var fullname, name, email, photoUrl, uid, emailVerified;
    if (user != null) {
        fullname=user.displayName;
        name = user.displayName.split(' ')[0];
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

        return(
        <div className="Meethome">
             <span className="float-right">
                    <button className="logout logo mt-3" onClick={handleLogout}>
                       <i className="fas fa-sign-out-alt fa-3x text-success"></i>
                    </button>
                    </span>
                    <img src={photoUrl}className="rounded-circle float-right mt-3 mr-3"height="50"></img>
                <div className="container">
                    <img
                        className="mt-4 logo"
                        src="output-onlinepngtools.png"
                        height="130"
                        width="270"
                    ></img>

                    <div class="vertical float-left mt-4">
                        <h1 className="text-light mt-3 p-4">Meetings</h1>
                    </div>
                </div>
                <div class="text-light mt-3 p-4">
                    <div className="text-center">
                        <div class="heading1">
                            <h1>Welcome {name} !</h1>
                        </div>
                    </div>
                </div>
                <div class="form1">
                    <form class="form-center">
                        <div class="form-group mx-sm-2">
                            <input type="text" class="form-control" placeholder="Enter Meeting Code"/>
                        </div>
                    </form>
                </div>
                <div>
                    <h4 class="or">or</h4>
                </div>
                <div class="text-center" id="btn">
                    <button type="button" class="btn1 float-center btn-success">New Meet</button>
                </div>
        </div>
        );
    }


export default Meethome;
