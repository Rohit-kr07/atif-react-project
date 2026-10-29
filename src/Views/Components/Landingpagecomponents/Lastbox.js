import React from "react";
import { LastBoxstyle } from "../../../Styles/Lastboxstyle";
import Sixbox from "./Sixbox";

function LastBox() {
    return (
        <div style={LastBoxstyle.container}>
            <h2 style={LastBoxstyle.heading}>
                What's Included
            </h2>

            <div style={LastBoxstyle.row}>
                <Sixbox
                    heading="Authentication Templates"
                    text="Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration."
                />

                <Sixbox
                    heading="Authentication Templates"
                    text="Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration."
                />

                <Sixbox
                    heading="Authentication Templates"
                    text="Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration."
                />

                <Sixbox
                    heading="Authentication Templates"
                    text="Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration."
                />

                <Sixbox
                    heading="Authentication Templates"
                    text="Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration."
                />

                <Sixbox
                    heading="Authentication Templates"
                    text="Beautiful login and signup forms with real-time validation, error handling, and seamless localStorage integration."
                />
            </div>
        </div>
    );
}

export default LastBox;