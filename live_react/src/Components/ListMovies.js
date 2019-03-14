import React from "react";
import PropTypes from "prop-types";

const style = {
    maxWidth : "119px"
};



const ListMovies = props => {
    return (
        <div className="row">
        <div className="col-md-2 col-sm-12">
            {/* <div className="card"> */}
                <img style={style} src={props.poster} alt="img_teaser" className="img_teaser" />
            {/* </div> */}
        </div>
        <div className="col-md-7 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h3>{props.title}</h3>
                    <div className="right">{props.year}</div>
                    <p className="card-text">{props.synopsis}</p>
                </div>
            </div>
        </div>
        </div>

    );
};

ListMovies.propTypes = {
    title : PropTypes.string.isRequired,
    year : PropTypes.string.isRequired,
    poster: PropTypes.string,
    synopsis: PropTypes.string
};

export default ListMovies;