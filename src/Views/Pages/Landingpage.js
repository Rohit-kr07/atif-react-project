import Header from "../Components/Landingpagecomponents/Header";
import Leftbox from "../Components/Landingpagecomponents/Leftbox";
import { Landingpagestyle } from "../../Styles/Landingpagestyle";

const LandingPage = () => {
    return (
        <div style={Landingpagestyle.page}>

            <Header />

            <div style={Landingpagestyle.mainContent}>

                <Leftbox />
                

            </div>

        </div>
    );
};

export default LandingPage;