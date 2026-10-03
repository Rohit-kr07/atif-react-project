import React from "react";
import { Link } from "react-router-dom";
import { Leftboxstyle } from "../../../Styles/Leftboxstyle";

const Leftbox = () => {
    return (
        <div style={Leftboxstyle.container}>

            <h1 style={Leftboxstyle.title}>
                Launch your Web Tech practice site in minutes
            </h1>

            <p style={Leftboxstyle.description}>
                A clear, modern starter template with Login, Signup, Dashboard,
                Profile and Logout pages using only HTML/CSS/JS and browser
                localStorage. Perfect for learning and practicing web
                development fundamentals.
            </p>

            <div>

                <Link
                    to="/signuppage"
                    style={{
                        marginLeft: "20px",
                        border: "none",
                    }}
                >
                    <button style={Leftboxstyle.button}>
                        SignUp
                    </button>
                </Link>

                <Link to="/login">
                    <button style={Leftboxstyle.button1}>
                        I already have an account
                    </button>
                </Link>

            </div>

        </div>
    );
};

export default Leftbox;