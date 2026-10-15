
import React from "react";
import { SecurityStyle } from "../../Styles/Securitystyle";
import Input from "./InputComponent";

const Security = () => {
    return (
        <div style={SecurityStyle.box1}>
            <h2 style={SecurityStyle.security}>
                Security Settings
            </h2>

            <h3 style={SecurityStyle.smlsecurity}>
                Security Settings
            </h3>

            <p style={SecurityStyle.inst}>
                Keep your account secure by using a strong password and
                changing it regularly.
            </p>

            <div style={SecurityStyle.row1}>
                <label style={SecurityStyle.row1label}>
                    Current Password
                    <Input
                        type="password"
                        placeholder="Enter current password"
                        width="380px"
                        height="45px"
                        // style={SecurityStyle.input}
                    />
                </label>

                <label style={SecurityStyle.row1label}>
                    New Password
                    <Input
                        type="password"
                        placeholder="Minimum 6 characters"
                        width="380px"
                        height="45px"
                        // style={SecurityStyle.input}
                    />
                </label>
            </div>

            <div style={SecurityStyle.row2}>
                <label style={SecurityStyle.row2label}>
                    Confirm New Password
                    <Input
                        type="password"
                        placeholder="Re-enter new password"
                        width="780px"
                        height="45px"
                        // style={SecurityStyle.input}
                    />
                </label>
            </div>

            <div style={SecurityStyle.row3}>
                <div></div>

                <div style={SecurityStyle.gapp}>
                    <button
                        type="button"
                        style={SecurityStyle.btn1}
                    >
                        Clear
                    </button>

                    <button
                        type="button"
                        style={SecurityStyle.btn2}
                    >
                        Update Password
                    </button>
                </div>
            </div>

            <div style={SecurityStyle.lastline}></div>

            <h3 style={SecurityStyle.securityinfo}>
                Security Information
            </h3>

            <div style={SecurityStyle.threebox}>
                <div style={SecurityStyle.sml3box}>
                    <i
                        className="fa-regular fa-calendar"
                        style={SecurityStyle.icon}
                    ></i>

                    <p style={SecurityStyle.text2nd}>
                        Account created
                    </p>

                    <p style={SecurityStyle.date}>
                        21/07/2025
                    </p>
                </div>

                <div style={SecurityStyle.sml3box}>
                    <i
                        className="fa-regular fa-calendar"
                        style={SecurityStyle.icon}
                    ></i>

                    <p style={SecurityStyle.text2nd}>
                        Last password change
                    </p>

                    <p style={SecurityStyle.date}>
                        21/07/2025
                    </p>
                </div>

                <div style={SecurityStyle.sml3box}>
                    <i
                        className="fa-solid fa-shield-halved"
                        style={SecurityStyle.icon}
                    ></i>

                    <p style={SecurityStyle.text2nd}>
                        Account security
                    </p>

                    <p style={SecurityStyle.date}>
                        Password protected
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Security;
