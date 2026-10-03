import React from "react";
import { Navbuttonstyle } from "../../../Styles/Navbuttonstyle";

const Navbutton = ({ label, filled = false, textColor = "white" }) => {
    return (
        <button
            style={{
                ...Navbuttonstyle.btn,
                backgroundColor: filled ? "#4ECDC4" : "transparent",
                color: textColor,
            }}
        >
            {label}
        </button>
    );
};

export default Navbutton;