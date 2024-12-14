import React, { Fragment } from "react";

class React16ComponentProps extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wishMessage: 'Hello, I M From Child Component Data'
        };
        console.log("props : " + props);
    }

    sendData = () => {
        this.props.sendToChild(this.state.wishMessage);
    }

    render() {
        return (
            <Fragment>
                <div className="container col-md-6 mt-3">

                    <br />
                    <p className="text-secondary"> send child component data to parent &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={this.sendData} className="bg-secondary h5 text-white">
                            send Data
                        </button>
                    </p>
                    <br />
                    <span className="h5 text-info">
                        LOADING PARENT COMPONENT DATA IN CHILD USING PROPS
                        {/*  from Parent Component :  {this.props.fName} */}
                    </span>
                    <table className="table table-bordered table-hover">
                        <thead >
                            <tr >
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>State</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* just like loop iterating an element */}
                            {this.props.users.map((user, index) => (
                                <tr key={index}>
                                    <td> {user.fname}</td>
                                    <td> {user.lname}</td>
                                    <td> {user.city}</td>
                                    <td> {user.state}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </Fragment >
        );
    }
}

export default React16ComponentProps;