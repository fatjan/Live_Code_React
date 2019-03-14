import React, {Component} from "react";
import {Redirect, withRouter} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from  "./store";


class Profile extends Component {
    render() {
        if (!this.props.is_login) {
            return <Redirect to = {{pathname: "/signin"}} />;
        } else {
            return (
                <section className="content">
                    <br/>
                    <h1 style={{textAlign: "center"}}><b>Profile</b></h1>
                    <p style={{textAlign: "center"}}>
                        <label>Avatar: </label> {this.props.avatar}
                    </p>
                    <p style={{textAlign: "center"}}>
                        <label>Name: </label> {this.props.username}
                    </p>
                    <p style={{textAlign: "center"}}>
                        <label>Email: </label> {this.props.email}
                    </p>
                    
                </section>
            );
        }
    }   
}

export default connect(
    "is_login,email,username, avatar",
    actions
)(withRouter(Profile));