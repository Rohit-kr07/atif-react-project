import React from "react";
import { HelpSupportstyle } from "../../Styles/HelpSupportstyle";
import FAQBox from "./FAQBox";

function HelpSupport() {
    return (
        <div style={HelpSupportstyle.container}>
            <h3 style={HelpSupportstyle.heading}>
                Help & Support
            </h3>

            <div style={HelpSupportstyle.subheading}>
                <p style={HelpSupportstyle.question}>
                    <i className="fa-solid fa-question"
                       style={HelpSupportstyle.icon}></i>
                    &nbsp;&nbsp;Frequently Asked Questions
                </p>
            </div>

            <FAQBox
                question="How do I update my profile?"
                answer='Click on "Profile Settings" in the sidebar to edit your personal information, address, and other details.'
            />

            <FAQBox
                question="Is my data secure?"
                answer="This is a demo application that stores data in your browser's localStorage. In a production app, data would be encrypted and stored securely on servers."
            />

            <FAQBox
                question="How do I update my profile?"
                answer='Click on "Profile Settings" in the sidebar to edit your personal information, address, and other details.'
            />

            <p style={HelpSupportstyle.contact}>
                <i className="fa-solid fa-phone"
                   style={HelpSupportstyle.icon}></i>
                &nbsp;&nbsp;Contact Support
            </p>

            <p style={HelpSupportstyle.contactText}>
                This is a demonstration application for learning web development.
                In a real application, you would find contact information and
                support options here.
            </p>
        </div>
    );
}

export default HelpSupport;