import React from "react";
import { Notificationstyle } from "../../Styles/Notificationstyle";

function Box(boxes) {
    return (
        <div style={Notificationstyle.smlbox}>
            <p style={Notificationstyle.icon}>
                <i className={boxes.icon} style={{ color: "#4ECDC4" }}></i>
            </p>

            <p style={Notificationstyle.title}>
                {boxes.title}
            </p>

            <p style={Notificationstyle.description}>
                {boxes.description}
            </p>

            <p style={Notificationstyle.checkbox}>
                <i className="fa-regular fa-square-check" style={{ color: "#4ECDC4" }}></i>
                &nbsp; {boxes.checkboxLabel}
            </p>
        </div>
    );
}

export default Box;