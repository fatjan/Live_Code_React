import React from "react";
import {Link} from "react-router-dom";
import logo from "../asset/logo/logo-alterra-academy.png";
import { connect } from "unistore/react";
import { actions } from "./store";
import { withRouter } from "react-router-dom";



const logoWrapper = {
    display: "block",
    width: "100px",
    float: "left",
    textAlign: "center"
};

const Navigation = props => {
    // const is_login = JSON.parse(localStorage.getItem("is_login"));
    // console.log("is_login", is_login)
    if (!props.is_login) {
    return (
        <nav id = "topnav">
            {/* <div style={logoWrapper}>
                <img src={logo} className="App-logo" alt="logo" /> <b>ReactNews</b>
            </div> */}

            <div className="navbar-top" id="ini">
                <div className="container-fluid">
                    <div className="row" id="ini">
                          <div className="col-md-6 col-sm-6 judul">
                              <span id="judul_logo">Movies</span>
                          </div>
                          <div className="col-md-6 col-sm-6 link">          
                     
                                <Link to="/">Home</Link>
                           
                                <Link to="/signup">SignUp</Link>
                           
                                <Link to="/signin">Log In</Link>
                           
                                {/* <Link to="/profile">Profile</Link> */}
                          
                                {/* <Link to="/" onClick={() => props.postSignout()}>SignOut</Link> */}
                          </div>
                  </div>
              </div>
            </div>
        </nav>
    );
        } else { return (
            <nav id = "topnav">
            {/* <div style={logoWrapper}>
                <img src={logo} className="App-logo" alt="logo" /> <b>ReactNews</b>
            </div> */}

            <div className="navbar-top" id="ini">
                <div className="container-fluid">
                    <div className="row" id="ini">
                          <div className="col-md-6 col-sm-6 judul">
                              <span id="judul_logo">Movies</span>
                          </div>
                          <div className="col-md-6 col-sm-6 link">          
                     
                            <Link to="/">Home</Link>
                           
                                {/* <Link to="/signup">SignUp</Link> */}
                           
                                {/* <Link to="/signin">SignIn</Link> */}
                           
                                <Link to="/profile">Profile</Link>
                          
                                <Link to="/signin" onClick={() => props.postLogout()}>SignOut</Link>
                          </div>
                  </div>
              </div>
            </div>
        </nav>
        );
        };
};

// export default Navigation;

export default connect (
    "is_login",
    actions
) (withRouter (Navigation));
