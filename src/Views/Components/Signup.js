import React from "react";
import { Link } from "react-router-dom";
import { SignUpstyle } from "../../Styles/SignUpstyle";

const Signup = () => {

    return (
        <div style={SignUpstyle.body}>

            <div style={SignUpstyle.container}>

                <h2 style={SignUpstyle.heading}>
                    Create your account
                </h2>

                <p style={SignUpstyle.Heading1}>
                    Sign up to access the practice dashboard.
                </p>



                <div style={SignUpstyle.box1}>

                    <div style={SignUpstyle.box2}>

                        <label style={SignUpstyle.label}>
                            First name:
                        </label>

                        <input
                            type="text"
                            placeholder="Enter First Name"
                            style={SignUpstyle.input}
                        />

                    </div>


                    <div style={SignUpstyle.box2}>

                        <label style={SignUpstyle.label}>
                            Last Name:
                        </label>

                        <input
                            type="text"
                            placeholder="Enter Last Name"
                            style={SignUpstyle.input}
                        />

                    </div>

                </div>



                <div style={SignUpstyle.box3}>

                    <label style={SignUpstyle.label}>
                        Email Address:
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email address"
                        style={SignUpstyle.mailbox}
                    />

                </div>


                {/* Password + Confirm Password */}
                <div style={SignUpstyle.box1}>

                    <div style={SignUpstyle.box2}>

                        <label style={SignUpstyle.label}>
                            Password:
                        </label>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            style={SignUpstyle.input}
                        />

                    </div>


                    <div style={SignUpstyle.box2}>

                        <label style={SignUpstyle.label}>
                            Confirm Password:
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            style={SignUpstyle.input}
                        />

                    </div>

                </div>



                <p style={SignUpstyle.passwordInfo}>
                    Use at least 8 characters, with
                    <br />
                    letter & number
                </p>



                <div style={SignUpstyle.terms}>

                    <input
                        type="checkbox"
                        id="terms"
                        defaultChecked
                        style={SignUpstyle.checkbox}
                    />

                    <label
                        htmlFor="terms"
                        style={SignUpstyle.para}
                    >
                        I agree to the Terms
                    </label>

                </div>



                <button
                    type="button"
                    style={SignUpstyle.button}
                >
                    Create Account
                </button>


                <div style={SignUpstyle.signInContainer}>

                    Already have account?{" "}

                    <Link
                        to="/"
                        style={SignUpstyle.signInLink}
                    >
                        Sign in
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Signup;