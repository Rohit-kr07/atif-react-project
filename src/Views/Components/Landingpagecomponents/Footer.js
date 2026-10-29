import React from "react";
import { Link } from "react-router-dom";

import Navbutton from "./Navbutton";
import { Navbuttonstyle } from "../../../Styles/Navbuttonstyle";
import { Footerstyle } from "../../../Styles/Footerstyle";

const Footer = () => {
    return (
        <div style={Navbuttonstyle.container}>

            <h4 style={Footerstyle.heading}>
                © 2025 WebTech Practice. Built for learning and growth.
            </h4>

            <div style={Navbuttonstyle.box1}>

                <Navbutton label="About" />

                <Navbutton label="Services" />

                <Navbutton label="Theme" />

                <Link to="/login">
                    <Navbutton label="Login" />
                </Link>

                <Link to="/signuppage">
                    <Navbutton label="SignUp" filled={true} />
                </Link>

            </div>

        </div>
    );
};

export default Footer;