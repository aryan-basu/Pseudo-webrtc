import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// import GitHubIcon from '@material-ui/icons/GitHub';
class Signup extends Component {
    render() {
        return (
            <div className="Signup">
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

                <div className="container  mt-5">
                    <div class="card-signup ">
                        <div className="card-header bg-success">
                            <h3 className="text-center">Sign Up</h3>
                        </div>
                        <div className="card-body ">
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user" />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-envelope" />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user-circle" />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Create a username"
                                    />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-key" />
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Create a new password"
                                    />
                                </div>
                                <div className="row align-items-center remember ml-3">
                                    <input type="checkbox" />{" "}
                                    &nbsp;&nbsp;&nbsp;Remember Me
                                </div>
                                <button className="btn float-right btn-success">
                                    Sign up
                                </button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links pb-4">
                                Already have an account?&nbsp;
                                <a className="text-success" href={"/signin"}>
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
