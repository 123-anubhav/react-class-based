import React, { Fragment } from "react";
import PropsPractice from "./PropsPractice";

let StateBasic = () => {
    const message = " Hello from StateBasic!";
    const styleClass = "text-primary h4";

    return (
        <Fragment>
            <div className="text-danger h3 mt-2">StatePractice</div>
            <div className="container mt-3">
                <PropsPractice val={message} className={styleClass}/>
            </div>

        </Fragment>
    );
}
export default StateBasic;