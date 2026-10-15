
import React from "react";
import { Profilestyle } from "../../Styles/Profilestyle";

const Profile = () => {
    return (
        <div style={Profilestyle.box1}>
            <h2 style={Profilestyle.profile}>
                Profile Settings
            </h2>

            <h3 style={Profilestyle.prsnl}>
                Personal Information
            </h3>

            <div style={Profilestyle.row}>
                <label style={Profilestyle.label}>
                    Full name
                    <input
                        type="text"
                        placeholder="Demo User"
                        style={Profilestyle.input}
                    />
                </label>

                <label style={Profilestyle.label}>
                    Date of Birth
                    <input
                        type="date"
                        style={Profilestyle.input}
                    />
                </label>
            </div>

            <div style={Profilestyle.row}>
                <label style={Profilestyle.label}>
                    Email Address
                    <input
                        type="email"
                        placeholder="demo@gmail.com"
                        style={Profilestyle.input}
                    />
                </label>

                <label style={Profilestyle.label}>
                    Phone Number
                    <input
                        type="tel"
                        placeholder="+91 9876543210"
                        style={Profilestyle.input}
                    />
                </label>
            </div>

            <h3 style={Profilestyle.address}>
                Address Information
            </h3>

            <label style={Profilestyle.streetLabel}>
                Street Address
            </label>

            <textarea
                style={Profilestyle.textarea}
                placeholder="Enter your complete address"
            />

            <div style={Profilestyle.row}>
                <label style={Profilestyle.label}>
                    PIN Code
                    <input
                        type="text"
                        placeholder="123456"
                        style={Profilestyle.input}
                    />
                </label>

                <label style={Profilestyle.label}>
                    City
                    <input
                        type="text"
                        placeholder="Ranchi"
                        style={Profilestyle.input}
                    />
                </label>
            </div>

            <div style={Profilestyle.row}>
                <label style={Profilestyle.label}>
                    Country
                    <input
                        type="text"
                        placeholder="India"
                        style={Profilestyle.input}
                    />
                </label>

                <label style={Profilestyle.label}>
                    GitHub Profile
                    <input
                        type="url"
                        placeholder="https://github.com/username"
                        style={Profilestyle.input}
                    />
                </label>
            </div>

            <div style={Profilestyle.button}>
                <div style={Profilestyle.gap}>
                    <button
                        type="button"
                        style={Profilestyle.btn1}
                    >
                        Cancel changes
                    </button>

                    <button
                        type="button"
                        style={Profilestyle.btn2}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
