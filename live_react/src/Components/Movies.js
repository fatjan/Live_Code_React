import React, { Component } from 'react';
import axios from 'axios';
import ListMovies from './ListMovies';
import { connect } from "unistore/react";
import { actions } from  "./store";

import {Redirect, withRouter} from "react-router-dom";


class Movies extends Component {
    componentDidMount = () => {
        this.props.getMovies()
    };

    handleClick = e => {
        const romance = "Romance"
        this.props.searchMovies(romance)
    }
    handleClick1 = e => {
        const action = "Action"
        this.props.searchMovies(action)
    }
    handleClick2 = e => {
        const fiction = "Fiction"
        this.props.searchMovies(fiction)
    }

    handleClick3 = e => {
        const comedy = "Comedy"
        this.props.searchMovies(comedy)
    }

    render() {
        const {listMoviesFilter} = this.props;
            return (
                // {console.log(listMoviesFilter)}
                <div>
                    <div className="row">
                        <div className="col-lg-2 col-md-2"></div>
                        <div className="col-lg-10 cold-md-10 cold-sm-12">
                    
                            {listMoviesFilter.map((item, key) => {
                            // const src_img = item.poster === null ? foto : item.poster;
                            return <ListMovies key={key} title={item.Title} poster={item.Poster} year={item.Year} synopsis={item.Synopsis} />;
                        })}
                        </div>
                </div>
                </div>
            );
        // }
    }
    
}

// export default News;
export default connect(
    "listMovies,listMoviesFilter",
    actions
)(withRouter(Movies));