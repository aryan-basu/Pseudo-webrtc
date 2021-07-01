import React, { Component } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MicNoneIcon from "@material-ui/icons/MicNone";
import VideocamIcon from "@material-ui/icons/Videocam";
import "./meetpreview.css";
import { green, purple } from "@material-ui/core/colors";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";

class Meetpreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            copySuccess: false,
            myCurrentTime: new Date().toLocaleString()
        };
    }
    getCurrentDate(separator = "") {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${year}${separator}${
            month < 10 ? `0${month}` : `${month}`
        }${separator}${date}`;
    }
    copyCodeToClipboard = () => {
        const el = this.textArea;
        el.select();
        document.execCommand("copy");
        this.setState({ copySuccess: true });
    };
    render() {
        return (
            <div className="meetpreview">
                {/* <div className="basic-nav">
                    <div className="basic-row">
                        <div className="basic-time">
                            <div className="time-data">
                                {this.state.myCurrentTime}
                            </div>
                        </div>
                    </div>

                    <div className="basic-row">
                        <IconButton>
                            <AccountCircleIcon />
                        </IconButton>
                    </div>
                </div> */}
                <div className="spaces"></div>
                <h1 className="room-name">Room #1</h1>
                <div className="video-preview">
                    <div className="video-controls">
                        <div className="row">
                            <div className="column">
                                <MicNoneIcon style={{ color: "white" }} />
                            </div>
                            <div className="column">
                                <VideocamIcon style={{ color: "white" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="username">
                    <h1 className="label">choose a username</h1>
                </div>

                <div class="grid-container">
                    <div class="grid-item">
                        {" "}
                        <div className="box1">
                            <TextField
                                id="standard-read-only-input"
                                onChange={(textarea) =>
                                    (this.textArea = textarea)
                                }
                                label="Read Only"
                                defaultValue="Invite Link"
                                InputProps={{
                                    readOnly: true
                                }}
                            />

                            <button
                                className="button1"
                                onClick={() => this.copyCodeToClipboard()}
                            >
                                <FileCopyIcon size="small" />
                            </button>
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="box2">Join Meeting</div>
                    </div>
                </div>
                <div className="username1">
                    {this.state.copySuccess ? (
                        <div style={{ color: "green" }}>Success!</div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Meetpreview;
