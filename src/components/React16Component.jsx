import React, { Fragment } from "react";
import React16ComponentProps from "./React16ComponentProps";
import './TableStyles.css';

class React16Component extends React.Component {

    // DEFINE STATE DIRCTLY WITHOUT CONSTRUCTOR, INSIDE CONSTRUCTOR YOU CAN DEFINE ALSO
    state = {
        user: [{
            fname: 'Anubhav',
            lname: 'Srivastava',
            state: 'Delhi',
            city: 'Delhi'
        }, {
            fname: 'Alok',
            lname: 'Singh',
            state: 'Hyderabad',
            city: 'Telangana'
        },
        {
            fname: 'Ada',
            lname: 'Khan',
            state: 'Pune',
            city: 'Maharashtra'
        },
        {
            fname: 'Fatima',
            lname: 'Khan',
            state: 'Hyderabad',
            city: 'Telangana'
        }, {
            fname: 'Jaddu',
            lname: 'Singh',
            state: 'Guntur',
            city: 'Tamilnadu'
        }],
        wishMsg: ''
    }

    /*
    constructor(props) {
        super(props);
         this.state = {
            user: [{
                fname: 'Anubhav',
                lname: 'Srivastava',
                state: 'Delhi',
                city: 'Delhi'
            }, {
                fname: 'Alok',
                lname: 'Singh',
                state: 'Hyderabad',
                city: 'Telangana'
            },
            {
                fname: 'Ada',
                lname: 'Khan',
                state: 'Pune',
                city: 'Maharashtra'
            },
            {
                fname: 'Fatima',
                lname: 'Khan',
                state: 'Hyderabad',
                city: 'Telangana'
            }, {
                fname: 'Jaddu',
                lname: 'Singh',
                state: 'Guntur',
                city: 'Tamilnadu'
            }],
            wishMsg: ''
        }; 
    }*/

    receiveData = (data) => {
        //  alert('receiveData' + data);
        this.setState({
            ...this.state.user,
            wishMsg: data
        });
    }

    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    <span className="h3  text-secondary  text-center">
                        React 16 Class Based Components Example
                    </span>

                    <div className="row">
                        <div className="col-md-6">
                            <form className="form-control-group mt-3">
                                <span className="h3 text-danger ">
                                    DATA LOAD FROM USING STATE CONCEPTS
                                </span>
                                <table className="table table-bordered table-warning">
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>State</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* ITERATING ANELEMENT INSIDE ARRAY */}
                                        {
                                            this.state.user.map((u, index) => (
                                                <tr key={index}>
                                                    <td> {u.fname}</td>
                                                    <td> {u.lname}</td>
                                                    <td> {u.city}</td>
                                                    <td> {u.state}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </form>
                        </div>

                        <div className="col-md-6">
                            {/* CHECKING WITH FIRST ARRAY FNAME VALUE IT IS WORKING FINE
                             <React16ComponentProps fName={this.state.user[0].fname} />
                              */}
                              <p className="text-white bg-success h3">Child to Parent data sending and display example</p>
                            <span className="h5 text-white bg-dark">
                                Message from child:</span>
                            &nbsp;
                            &nbsp;
                            <span className="h5 text-white bg-primary"> {this.state.wishMsg}</span>
                            <React16ComponentProps users={this.state.user} sendToChild={this.receiveData} />
                        </div>

                    </div>
                </div>
            </Fragment >
        );
    }
}

export default React16Component;