import React, { Component } from 'react';
import axios from 'axios';
import ListNews from './ListNews';
import {Redirect} from "react-router-dom";
// import '../asset/css/about.css';
// import Header from './Header';
import Search from './Search';
// import '../asset/css/bootstrap.min.css';

// dummy data
import foto from '../asset/img/jay-lee-1323073-unsplash.jpg';
const n_title = "This is the title of the news";
const n_content = "This is the example of a single content."

//News API
const apiKey = "b52d5a69e15d4703b23b7f2b94f2beb7";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadLine = baseUrl + "top-headLines?country=id&" + "pageSize=7&" + "apiKey=" + apiKey;

// https://newsapi.org/v2/top-headlines?country=us&apiKey=b52d5a69e15d4703b23b7f2b94f2beb7

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            listNews : [],
            username : "",
            isLogin : false
        };
    }
    componentDidMount = () => {
        const self= this;
        axios
        .get(urlHeadLine)
        .then(function(response) {
            self.setState({listNews: response.data.articles});
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
        
    };

    handleInputChange = e => {
        console.log("event", e.target.value);
        let value = e.target.value;
        this.setState(
            {
                search:value
            },
            () => {
                this.searchNews(value);
            }
        );
    };

    sports = e => {
        this.searchNews("SPORTS")
    }

    movies = e => {
        this.searchNews("MOVIES")
    }

    politics = e => {
        this.searchNews("POLITICS")
    }

    searchNews = async keyword => {
        console.log("searchNews", keyword);
        const self = this;
        if (keyword.length > 2) {
            try {
                const response = await axios.get(
                    baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
                );
                console.log(response);
                self.setState({listNews: response.data.articles})
                } 
            catch(error){
                    console.log(error);
                }
            };
        };

    render() {
        const {listNews, username, isLogin} = this.state;

        // when opening the website, supposedly it goes to sign in first but because the beeceptor not working anymore
        // it is turned into comment mode for now.
        // const is_login = JSON.parse(localStorage.getItem("is_login"));
        // const email = localStorage.getItem("email");
        // const full_name = localStorage.getItem("full_name");
        // console.log("is_login", is_login);

        // if (is_login === null) {
        //     return <Redirect to={{pathname: "/signin"}} />;
        // } else {
            return (
                <div>
                    <Search title="Cari" placeholder="Type here.. " doSearch={this.handleInputChange}
                    keyword={this.state.search}    />
                   
                        <span>News Category : </span>
                            <a href="#" onClick={() => this.sports()} className="judul_kategori">Sports</a>
                            <a href="#" onClick={() => this.movies()} className="judul_kategori">Movies</a>
                            <a href="#" onClick={() => this.politics()} className="judul_kategori">Politics</a>
                        
                  
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

export default News;