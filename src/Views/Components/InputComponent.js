
import React from "react";

function Input(Inpbox) {
    return (
        <input
            type= "password"
            placeholder={Inpbox.placeholder}
            style={{
                width: Inpbox.width,
                height: Inpbox.height,
                paddingLeft: "20px",
                border: "1px solid #F1F3F4",
                borderRadius: "15px",
                backgroundColor: "#F1F3F4",
                fontSize: "13px",
                outline: "none",
                boxSizing: "border-box",
                ...Inpbox.style,
            }}
        />
    );
}

export default Input;