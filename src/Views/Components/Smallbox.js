
import React from "react";
import { Overviewstyle } from "../../Styles/Overviewstyle";

function Smallbox(props) {
    return (
        <div style={Overviewstyle.smlbx}>
            <p style={Overviewstyle.heading}>
                {props.heading}
            </p>

            <p style={Overviewstyle.parah}>
                {props.text}
            </p>

            <div style={Overviewstyle.line}></div>
        </div>
    );
}

export default Smallbox;
