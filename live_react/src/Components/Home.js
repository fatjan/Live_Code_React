import React, { Component } from 'react';
import '../asset/css/about.css';
import { connect } from "unistore/react";
import { actions } from  "./store";
import {Redirect, withRouter} from "react-router-dom";

import romance from '../asset/img/romance.jpg';
import action from '../asset/img/action.jpg';
import fiction from '../asset/img/fiction.jpg';
import comedy from '../asset/img/comedy.jpg';

class Home extends Component {
  componentDidMount = () => {
    this.props.getMovies()
  };
  handleClick = e => {
    const romance = "Romance"
    this.props.searchMovies(romance)
    this.props.history.replace("/romance");
  };
  handleClick1 = e => {
    const action = "Action"
    this.props.searchMovies(action)
    this.props.history.replace("/action");
  };
  handleClick2 = e => {
      const fiction = "Fiction"
      this.props.searchMovies(fiction)
      this.props.history.replace("/fiction");
  };

  handleClick3 = e => {
      const comedy = "Comedy"
      this.props.searchMovies(comedy)
      this.props.history.replace("/comedy");
  };
    render() {
      return (
        <div>   
            <div className="row">
                <div className="col-md-2 "></div>

                <div className="col-md-2 col-sm-12 kiri App">
                  <br/>
                  <h6>Romance</h6>
                  <br/>
                  <div className="card" style={{width: "96%", height:"auto"}}>
                    <img className="card-img-top" src={romance} alt="img_romance" /> 
                   </div>
                   <br/>
                    <a href="#" onClick={this.handleClick}>See Movies</a>
                    {/* <a href="#" onClick={this.handleClick} className="judul_kategori">Sports</a> */}
                          
                </div>

                <div className="col-md-2 col-sm-12 kiri App">
                    <br/>
                  <h6>Action</h6>
                  <br/>
                  <div className="card" style={{width: "96%", height:"auto"}}>
                    <img className="card-img-top" src={action} alt="img_action" /> 
                   </div> 
                   <br/>
                    <a href="#" onClick={this.handleClick1}>See Movies</a>
                </div>

                <div className="col-md-2 col-sm-12 kiri App">
                    <br/>
                  <h6>Fiction</h6>
                  <br/>
                  <div className="card" style={{width: "96%", height:"auto"}}>
                    <img className="card-img-top" src={fiction} alt="img_fiction" /> 
                   </div> 
                   <br/>
                    <a href="#" onClick={this.handleClick2}>See Movies</a>
                </div>

                <div className="col-md-2 col-sm-12 kiri App">
                <br/>
                  <h6>Comedy</h6>
                  <br/>
                  <div className="card" style={{width: "96%", height:"auto"}}>
                    <img className="card-img-top" src={comedy} alt="img_comedy" /> 
                   </div> 
                   <br/>
                    <a href="#" onClick={this.handleClick3}>See Movies</a>
                </div>
                <div className="col-md-1"></div>
              </div>
        </div>
        );
    }
}

// export default Home;
export default connect(
  "listMovies",
  actions
)(withRouter(Home));