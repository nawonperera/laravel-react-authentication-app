import React from "react";
import { Route, Routes } from "react-router";
import SignIn from "../../components/signInComponent/SignIn.tsx";

const AppRoutes: React.FC = () => {
    return (
        // Building Navigations of my application.
        <Routes>
            <Route path="/" element={<SignIn />} />
        </Routes>
    );
};

export default AppRoutes;
