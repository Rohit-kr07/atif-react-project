import Header from "../Components/Landingpagecomponents/Header";
import Leftbox from "../Components/Landingpagecomponents/Leftbox";
import AuthFlowBox from "../Components/Landingpagecomponents/AuthFlowBox";
import AboutBox from "../Components/Landingpagecomponents/AboutBox";

import { Landingpagestyle } from "../../Styles/Landingpagestyle";
import LastBox from "../Components/Landingpagecomponents/Lastbox";
import Footer from "../Components/Landingpagecomponents/Footer";

const LandingPage = () => {
    return (
        <div style={Landingpagestyle.page}>

            <Header />

            <div style={Landingpagestyle.mainContent}>

                <Leftbox />

                <AuthFlowBox />

            </div>

            <AboutBox />
            <LastBox />
            <div style={{marginTop: "50px"}}>
            <Footer />
            </div>
        </div>
    );
};

export default LandingPage;