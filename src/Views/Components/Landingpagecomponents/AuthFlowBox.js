import React from "react";
import { AuthFlowBoxStyle } from "../../../Styles/AuthFlowBoxStyle";

const AuthFlowBox = () => {
    return (
        <div style={AuthFlowBoxStyle.box2}>

            <div style={AuthFlowBoxStyle.inbox2}>

                <button style={AuthFlowBoxStyle.btn4}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                <div style={AuthFlowBoxStyle.newbx1}>

                    <h2 style={AuthFlowBoxStyle.hdng}>
                        Complete Auth Flow
                    </h2>

                    <p style={AuthFlowBoxStyle.pp}>
                        Beautiful dark/light mode with smooth transitions,
                        persisted across all pages and sessions.
                    </p>

                </div>

                <button style={AuthFlowBoxStyle.btn5}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>

            </div>

            <div style={AuthFlowBoxStyle.swipe}>
                <div style={AuthFlowBoxStyle.threeswipee}></div>
                <div style={AuthFlowBoxStyle.threeswipe}></div>
                <div style={AuthFlowBoxStyle.threeswipe}></div>
            </div>

        </div>
    );
};

export default AuthFlowBox;