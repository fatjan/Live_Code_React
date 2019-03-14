import React, { Component } from 'react';
import axios from 'axios';
import ListHeadlines from './ListHeadlines';
// import '../asset/css/about.css';
// import Header from './Header';
import Search from './Search';
import { connect } from "unistore/react";
import { actions } from  "./store";
import {Redirect, withRouter} from "react-router-dom";

// dummy data
import foto from '../asset/img/jake-allison-1322894-unsplash.jpg';
const n_title = "This is the title of the news";
const n_content = "This is the example of a single content."

// //News API
// const apiKey = "b52d5a69e15d4703b23b7f2b94f2beb7";
// const baseUrl = "https://newsapi.org/v2/";
// const urlHeadLine = baseUrl + "everything?q=bitcoin&" + "pageSize=7&" + "language=en&" + "apiKey=" + apiKey;

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=b52d5a69e15d4703b23b7f2b94f2beb7


class NewsKiri extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         listHeadlines : [],
    //         username : "",
    //         isLogin : false
    //     };
    // }
    componentDidMount = () => {
        this.props.getUrlHeadline()
        // const self= this;
        // axios
        // .get(urlHeadLine)
        // .then(function(response) {
        //     self.setState({listHeadlines: response.data.articles});
        //     console.log(response.data);
        // })
        // .catch(function(error) {
        //     console.log(error);
        // });
        
    };
    render() {
        // console.log("here")
        // const {listHeadlines, username, isLogin} = this.state;
        return (
            <div>

                {this.props.listNewsKiri.map((item, key) => {
                    return <ListHeadlines key={key} title={item.title} />;
                })}
            </div>
        );
    }
}

// export default NewsKiri;
export default connect(
    "listNewsKiri",
    actions
)(withRouter(NewsKiri));