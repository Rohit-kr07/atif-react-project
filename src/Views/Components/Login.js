import React from "react";
import { Link } from "react-router-dom";
import { Logincss } from "../../Styles/LoginStyle";

function Login() {
    // const savedUser = JSON.parse(localStorage.getItem("user") || "null");
    // const savedEmail = savedUser?.email || "";

    return (
        <div style={Logincss.body}>
            <div style={Logincss.container}>

                <p style={Logincss.welcome}>
                    Welcome Back
                </p>

                <p style={Logincss.para}>
                    Sign in to continue to your dashboard
                </p>

                <div style={Logincss.emailbox}>
                    <label
                        htmlFor="email"
                        style={Logincss.label1}
                    >
                        Email Address:
                    </label>

                    <br />

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        style={Logincss.input1}
                        // defaultValue={savedEmail}
                    />
                </div>

                <div style={Logincss.pass}>
                    <label
                        htmlFor="password"
                        style={Logincss.label2}
                    >
                        Password:
                    </label>

                    <br />

                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        style={Logincss.input2}
                    />
                </div>

                <p style={Logincss.lastpara}>
                    Password must be at least 6 characters long.
                </p>

                <div style={Logincss.lastbox}>
                    <label style={Logincss.remember}>
                        <input type="checkbox" />
                        <span>Remember me for 30 days</span>
                    </label>

                    <p style={Logincss.forgot}>
                        Forgot password?
                    </p>
                </div>

                <Link to="/Overviewpage" style={{textDecoration: "none"}}>
                    <button
                        type="button"
                        style={Logincss.loginButton}
                    >
                        Login
                    </button>
                </Link>

                <p style={Logincss.signupText}>
                    Don't have an account?{" "}
                    <Link
                        to="/signuppage"
                        style={Logincss.signupLink}
                    >
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Login;