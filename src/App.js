import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Meetend from "./meetend.js";
import Meeting from "./meeting.js";
import Signup from "./signup.js";
import Signin from "./signin.js";
import Meethome from "./meethome.js";
import Meetpreview from "./meetpreview.js";
import "./App.css";

const App = () => {
    let time = new Date().toLocaleTimeString();
    const date1 = new Date().toDateString();
    const [ctime, setctime] = useState(time);
    const updatetime = () => {
        time = new Date().toLocaleTimeString();
        setctime(time);
    };

    setInterval(updatetime, 1000);
    return (
        <div>
            <div className="bg-success time float-left">
                <h4 className="text-light text-center">
                    &nbsp;&nbsp;{ctime}
                    <br></br>
                    {date1}
                </h4>
            </div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Signin} />
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/meetend" exact component={Meetend} />
                    <Route path="/meethome" exact component={Meethome} />
                    <Route path="/meeting" exact component={Meeting} />
                    <Route path="/meetpreview" exact component={Meetpreview} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
// export default Initial;
