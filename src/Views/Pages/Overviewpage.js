import React from "react";
import Overview from "../Components/Overview";
import Sidebar from "../Components/Sidebar";
import Headersection from "../Components/Headersection";
import { common } from "../../Styles/Commonpagestyle";

function Overviewpage() {
    return (
        <div style={common.maindiv}>
            
            <Sidebar />
            
            <div style={common.rightbox}>
            <Headersection />
            <Overview />
            </div>
        </div>
    );
}

export default Overviewpage;
