import React from "react";
import { Sixboxstyle } from "../../../Styles/Sixboxstyle";

function Sixbox(boxes) {
    return (
        <div style={Sixboxstyle.box}>
            <h3 style={Sixboxstyle.heading}>
                {boxes.heading}
            </h3>

            <p style={Sixboxstyle.text}>
                {boxes.text}
            </p>
        </div>
    );
}

export default Sixbox;