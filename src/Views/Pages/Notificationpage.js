import React from "react";
import Sidebar from "../Components/Sidebar";
import Headersection from "../Components/Headersection";
import { common } from "../../Styles/Commonpagestyle";
import Notification from "../Components/Notification";

function Notificationpage() {
    return (
        <div style={common.maindiv}>
            <Sidebar />
            <div style={common.rightbox}>
                <Headersection />
                <Notification />
            </div>
        </div>
    )
}
export default Notificationpage;