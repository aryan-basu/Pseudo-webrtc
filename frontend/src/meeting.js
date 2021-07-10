import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
// import GitHubIcon from '@material-ui/icons/GitHub';
// import "./Home.css"

class Meeting extends Component {
    render() {
        return (
            <div className="container2">
                <h1>Meeting</h1>
                <ul>
                    <li>
                        <a href="http://localhost:3000/signin">SignIn</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/signup">SignUp</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/meethome">MeetHome</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/meetpreview">
                            MeetPreview
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/meeting">Meeting</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/meetend">MeetEnd</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Meeting;
