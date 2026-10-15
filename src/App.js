import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Views/Pages/Landingpage";
import Loginpage from "./Views/Pages/Loginpage";
import Signuppage from "./Views/Pages/signuppage";
import Overviewpage from "./Views/Pages/Overviewpage";
import Profilepage from "./Views/Pages/Profilepage";
import Securitypage from "./Views/Pages/Securitypage";
import Notificationpage from "./Views/Pages/Notificationpage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Loginpage />} />
                <Route path="/signuppage" element={<Signuppage />} />
                <Route path="/Overviewpage" element={<Overviewpage />} />
                <Route path="/Profilepage" element={<Profilepage />} />
                <Route path="/Securitypage" element={<Securitypage />} />
                <Route path="/Notificationpage" element={<Notificationpage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;