import React from "react";
import PropTypes from "prop-types";

const style = {
    maxWidth : "580px"
};

const ListHeadlines = props => {
    return (
        <table>
            <tr>
                <td>
                {/* <button className="tombol"> # 2 </button> <br/> */}
                    <a href="#">{props.title}</a>
                </td>
            </tr>
        </table>
    );
};

ListHeadlines.propTypes = {
    title : PropTypes.string.isRequired
};

export default ListHeadlines;