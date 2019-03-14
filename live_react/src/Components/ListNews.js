import React from "react";
import PropTypes from "prop-types";

const style = {
    maxWidth : "625px"
};

const ListNews = props => {
    return (
        <div class="card">
            <img style={style} src={props.img} alt="img_teaser" className="img_teaser" />

                <div class="card-body">
                <h3>{props.title}</h3>
                <div className="right">{props.content}</div>
            </div>
        </div>
                  

    );
};

ListNews.propTypes = {
    title : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    img: PropTypes.string
};

export default ListNews;