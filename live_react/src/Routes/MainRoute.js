import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../Components/Home";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import NotMatch from "../Components/NotMatch";
// import News from "../Components/News";
import Profile from "../Components/Profile";
import Movies from "../Components/Movies";

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/romance" component={Movies} />
            <Route exact path="/action" component={Movies} />
            <Route exact path="/fiction" component={Movies} />
            <Route exact path="/comedy" component={Movies} />

            <Route component={NotMatch} />        
        </Switch>
    );
};

export default MainRoute;