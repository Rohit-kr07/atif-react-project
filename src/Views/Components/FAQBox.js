import React from "react";
import { FAQBoxstyle } from "../../Styles/FAQBoxstyle";

function FAQBox(boxes) {
    return (
        <div style={FAQBoxstyle.box}>
            <p style={FAQBoxstyle.heading}>
                {boxes.question}
            </p>

            <p style={FAQBoxstyle.text}>
                {boxes.answer}
            </p>
        </div>
    );
}

export default FAQBox;