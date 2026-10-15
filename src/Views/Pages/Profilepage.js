import React from "react";
import Profile from "../Components/Profile";
import { common } from "../../Styles/Commonpagestyle";
import Sidebar from "../Components/Sidebar";
import Headersection from "../Components/Headersection";

function Profilepage() {
    return (
        <div style={common.maindiv}>
            <Sidebar />
            <div style={common.rightbox}>
                <Headersection />
                <Profile />
            </div>
            
        </div>
    );
}

export default Profilepage;