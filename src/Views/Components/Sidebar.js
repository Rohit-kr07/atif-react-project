
import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Sidebarstyle } from "../../Styles/Sidebarstyle";
import Profile from "./Profile";


const Sidebar = () => {
    const location = useLocation();
const [hoveredLink, setHoveredLink] = useState("");

    return (
        <div style={{ ...Sidebarstyle.box, height: "700px" }}>

            <div style={Sidebarstyle.demouser}>
                <div style={Sidebarstyle.du}>DU</div>

                <div>
                    <p style={Sidebarstyle.p1}>Demo user</p>
                    <p style={Sidebarstyle.p2}>
                        demo@webtech.practice
                    </p>
                </div>
            </div>

            <p style={Sidebarstyle.section}>DASHBOARD</p>

            <div style={Sidebarstyle.links}>
                <Link
                    to="/Overviewpage"
                    style={{
                        ...(
                            location.pathname === "/Overviewpage"
                                ? Sidebarstyle.activeLink
                                : Sidebarstyle.link
                        ),
                        textDecoration: "none",
                        
                    }}
                >
                    Overview
                </Link>

                <Link
                    to="/Profilepage"
                   style={{
    ...(location.pathname === "/Profilepage"
        ? Sidebarstyle.activeLink
        : Sidebarstyle.link),

    backgroundColor:
        hoveredLink === "Profile"
            ? "#E0F7F5"
            : location.pathname === "/Profilepage"
            ? "#F1F3F4"
            : "transparent",

    textDecoration: "none",
    transition: "background-color 0.3s ease",
    
}}
onMouseEnter={()=> setHoveredLink(Profile)}
onMouseLeave={()=> ("")}
                >
                    Profile settings
                </Link>

                <Link
                    to="/Securitypage"
                    style={{
                        ...(
                            location.pathname === "/Securitypage"
                                ? Sidebarstyle.activeLink
                                : Sidebarstyle.link
                        ),
                        textDecoration: "none",
                    }}
                >
                    Security
                </Link>

                <Link
                    to="/Notificationpage"
                    style={{
                        ...(
                            location.pathname === "/Notificationpage"
                                ? Sidebarstyle.activeLink
                                : Sidebarstyle.link
                        ),
                        textDecoration: "none",
                    }}
                >
                    Notifications
                </Link>
            </div>

            <p style={Sidebarstyle.section}>QUICK ACTION</p>

            <Link
                to="/HelpSupportpage"
                style={{
                    ...Sidebarstyle.quickLink,
                    textDecoration: "none",
                }}
            >
                Help &amp; Support
            </Link>

            <p style={Sidebarstyle.account}>ACCOUNT</p>

            <Link
                to="/loginpage"
                style={{
                    ...Sidebarstyle.signout,
                    textDecoration: "none",
                }}
            >
                Sign out
            </Link>

        </div>
    );
};

export default Sidebar;
