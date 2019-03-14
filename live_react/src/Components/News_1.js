import React, { Component } from 'react';
import axios from 'axios';
import ListNews from './ListNews';
import { connect } from "unistore/react";
import { actions } from  "./store";

import {Redirect, withRouter} from "react-router-dom";

// dummy data
import foto from '../asset/img/romance.jpg';
const n_title = "This is the title of the news";
const n_content = "This is the example of a single content."

//News API
// const apiKey = "b52d5a69e15d4703b23b7f2b94f2beb7";
// const baseUrl = "https://newsapi.org/v2/";
// const urlHeadLine = baseUrl + "top-headLines?country=id&" + "pageSize=7&" + "apiKey=" + apiKey;

// https://newsapi.org/v2/top-headlines?country=us&apiKey=b52d5a69e15d4703b23b7f2b94f2beb7

class News1 extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         listNews : [],
    //         username : "",
    //         isLogin : false
    //     };
    // }
    componentDidMount = () => {
        this.props.getUrlHeadline()
    };

    handleInputChange = e => {
        const value = e.target.value;
            this.props.searchNews(value);        
    };

    handleClick = e => {
        const sports = "Sports"
        this.props.searchCategory(sports)
    }
    handleClick1 = e => {
        const movies = "Movies"
        this.props.searchCategory(movies)
    }
    handleClick2 = e => {
        const politics = "Politics"
        this.props.searchCategory(politics)
    }
    // sports = e => {
    //     this.searchNews("SPORTS")
    // }

    // movies = e => {
    //     this.searchNews("MOVIES")
    // }

    // politics = e => {
    //     this.searchNews("POLITICS")
    // }

    render() {
        const {listNews, ListNewsKiri} = this.props;

        // when opening the website, supposedly it goes to sign in first but because the beeceptor not working anymore
        // it is turned into comment mode for now.
        // const is_login = JSON.parse(localStorage.getItem("is_login"));
        // const email = localStorage.getItem("email");
        // const full_name = localStorage.getItem("full_name");
        // console.log("is_login", is_login);

        // if (is_login === null) {
        //     return <Redirect to={{pathname: "/signin"}} />;
        // } else {

            // keyword={this.props.search}

            return (
                <div>
                    {/* <Search title="Cari" placeholder="Type here.. " doSearch={this.handleInputChange}
                     doClick = {this.handleClick} doClick1 = {this.handleClick1} doClick2 = {this.handleClick2}   /> */}
                   
                        <span>News Category : </span>
                            <a href="#" onClick={this.handleClick} className="judul_kategori">Sports</a>
                            <a href="#" onClick={this.handleClick1} className="judul_kategori">Movies</a>
                            <a href="#" onClick={this.handleClick2} className="judul_kategori">Politics</a>
                        
                  
                        {listNews.map((item, key) => {
                        const src_img = item.urlToImage === null ? foto : item.urlToImage;
                        const content = item.urlToImage !== null ? item.content : "";
                        return <ListNews key={key} title={item.title} img={src_img} content={content} />;
                    })}

                </div>
            );
        // }
    }
    
}

// export default News;
export default connect(
    "listNews",
    actions
)(withRouter(News1));