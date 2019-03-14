import React from "react";

const NotMatch = props => {
    const pathname = window.location.pathname;

    return (
        <section className="content">
            <h4>404. Page is Not found</h4>
            <p>
                page: <b>{pathname}</b> that you're looking for is not found
            </p>
        </section>
    );
};

export default NotMatch;