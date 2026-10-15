import React from "react";
import Sidebar from "../Components/Sidebar";
import Headersection from "../Components/Headersection";
import { common } from "../../Styles/Commonpagestyle";
import Security from "../Components/Security";
function Securitypage (){
    return (
        <div style={common.maindiv}>
            <Sidebar />
            <div style={common.rightbox}>
                <Headersection />
                <Security />
            </div>

        </div>
    );
}
export default Securitypage