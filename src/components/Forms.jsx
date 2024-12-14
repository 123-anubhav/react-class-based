import React, { useState } from "react";

let Forms = () => {
    // Using state to manage form values
    const [form, setForm] = useState({
        name: '',
        mobile: '',
        password: '',
        emailid: ''
    });

    // Destructure form fields for easy use
    const { name, mobile, password, emailid } = form;

    // Handle input changes
    /* const handleInputChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value }); // Update the state dynamically
    }; */

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        console.log("Form Submitted: ", form);
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <form className="form-control" onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Enter Name</td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control-info"
                                        name="name" // Proper name attribute
                                        value={name}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Enter Mobile Number</td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control-info"
                                        name="mobile" // Proper name attribute
                                        value={mobile}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Enter Password</td>
                                <td>
                                    <input
                                        type="password"
                                        className="form-control-info"
                                        name="password" // Proper name attribute
                                        value={password}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Enter Email ID</td>
                                <td>
                                    <input
                                        type="email"
                                        className="form-control-info"
                                        name="emailid" // Proper name attribute
                                        value={emailid}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button
                                        type="submit"
                                        className="text-warning h5 bg-dark"
                                    >
                                        Submit
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Forms;
