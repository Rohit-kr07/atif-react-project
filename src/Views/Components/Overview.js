import React from "react";
import { Overviewstyle } from "../../Styles/Overviewstyle";
import Smallbox from "./Smallbox";
const Overview = () => {
    return (
        <div style={Overviewstyle.box1}>
            <p style={Overviewstyle.wlcm}>
                Welcome Back, Demo user
            </p>

            <p style={Overviewstyle.p4}>
                Manage your profile settings and account preferences.
                Your data is securely stored in your browser's localStorage.
            </p>

             <div style={Overviewstyle.smlbox}>
            <Smallbox
                heading="Theme"
                text="Dark/Light mode persisted across all pages"
            />

            <Smallbox
                heading="Authentication"
                text="Secure session stored in browser storage"
            />

            <Smallbox
                heading="Profile"
                text="20% profile completed (1/5 fields)"
            />

            <Smallbox
                heading="Security"
                text="Password protection and account security"
            />
        </div>
    

            <p style={Overviewstyle.p5}>Quick Action</p>

            <div style={Overviewstyle.lastbox}>
                <div style={Overviewstyle.lstbx1}>
                    <p style={Overviewstyle.hdng2}>Edit Profile</p>
                    <p style={Overviewstyle.upd}>
                        Update your personal information
                    </p>
                </div>

                <div style={Overviewstyle.lstbx1}>
                    <p style={Overviewstyle.hdng2}>Change Password</p>
                    <p style={Overviewstyle.upd}>
                        Update your Account security
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Overview;