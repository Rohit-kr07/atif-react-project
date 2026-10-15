
import React from "react";
import { Notificationstyle } from "../../Styles/Notificationstyle";
import Box from "./NotificationBox";

function Notification() {
    return (
        <div style={Notificationstyle.box1}>
            <p style={Notificationstyle.notif}>
                Notifications
            </p>

            <div style={Notificationstyle.np}>
                <p style={Notificationstyle.notipre}>
                    <i className="fa-solid fa-bell" style={{ color: "#4ECDC4" }}></i>
                    &nbsp;&nbsp; Notification Preferences
                </p>
            </div>

            <p style={Notificationstyle.inst}>
                Manage how and when you receive notifications about your
                account activity.
            </p>

            <div style={Notificationstyle.row1}>
                <Box
                    icon="fa-solid fa-envelope"
                    title="Email Notifications"
                    description="Receive important updates via email"
                    checkboxLabel="Enable email notifications"
                />

                <Box
                    icon="fa-solid fa-lock"
                    title="Security Alerts"
                    description="Get notified about security changes"
                    checkboxLabel="Enable security alerts"
                />
            </div>

            <p style={Notificationstyle.rcnta}>
                <i className="fa-regular fa-file-lines" style={{ color: "#4ECDC4" }}></i>
                &nbsp;&nbsp; Recent Activity
            </p>

            <div style={Notificationstyle.row2}>
                <p style={Notificationstyle.checkboxx}>
                    <i className="fa-regular fa-square-check" style={{ color: "#4ECDC4" }}></i>
                </p>

                <p style={Notificationstyle.activityTitle}>
                    Profile Updated
                </p>

                <p style={Notificationstyle.activityDescription}>
                    Your profile information was successfully updated
                </p>

                <p style={Notificationstyle.date}>
                    Today
                </p>
            </div>
        </div>
    );
}

export default Notification;
