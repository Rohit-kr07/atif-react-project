import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Views/Pages/Landingpage";
import Loginpage from "./Views/Pages/Loginpage";
import Signuppage from "./Views/Pages/signuppage";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LandingPage />}
                />

                <Route
                    path="/login"
                    element={<Loginpage />}
                />

                <Route
                    path="/signuppage"
                    element={<Signuppage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;