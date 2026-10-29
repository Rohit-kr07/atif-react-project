import Sidebar from "../Components/Sidebar";
import Headersection from "../Components/Headersection";
import { common } from "../../Styles/Commonpagestyle";
import HelpSupport from "../Components/HelpSupport";

const HelpSupportpage = () => {
    return(
        <div style={common.maindiv}>
            <Sidebar />
            <div style={common.rightbox}>
                <Headersection />
                <HelpSupport />
            </div>
        </div>
    )
}
export default HelpSupportpage