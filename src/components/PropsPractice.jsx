import React, { Fragment } from "react";

let PropsPractice = (props) => {

    // Log the received props to check
    console.log("Received props in PropsPractice:", props);

    return (
        <Fragment>
            <div className={`container mt-3 ${props.className}`}>
                PropsPractice : {props.val}
            </div>
        </Fragment>
    );
};

export default PropsPractice;