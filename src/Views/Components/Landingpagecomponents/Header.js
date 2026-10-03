import React from "react";
import { Link } from "react-router-dom";

import Navbutton from "./Navbutton";
import { Navbuttonstyle } from "../../../Styles/Navbuttonstyle";
import { Headerstyle } from "../../../Styles/Headerstyle";

const Header = () => {
    return (
        <div style={Navbuttonstyle.container}>

            <h3 style={Headerstyle.heading}>
                WebTech Practice
            </h3>

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

export default Header;