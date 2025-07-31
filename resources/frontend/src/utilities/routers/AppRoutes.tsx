import React from "react";
import { Navigate, Route, Routes } from "react-router";
import SignIn from "../../components/signInComponent/SignIn.tsx";

import { useSelector } from "react-redux";
import {
    CheckUserAuthentication,
    CheckUserIsAdmin,
    checkUserTokenNotEmpty,
} from "./checkUserAuthentication.ts";

interface RootState {
    auth: {
        token: string;
        user_id: string | null;
        user_role: number;
        isAuthenticated: boolean;
    };
}

const AppRoutes: React.FC = () => {
    const { token, user_role, isAuthenticated } = useSelector(
        (state: RootState) => state.auth,
    );

    return (
        // Building Navigations of my application.
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
                path="/dashboard"
                element={
                    CheckUserAuthentication(isAuthenticated) &&
                    checkUserTokenNotEmpty(token) &&
                    CheckUserIsAdmin(user_role) ? (
                        <div>Dashboard</div>
                    ) : (
                        <Navigate to="/" replace />
                    )
                }
            />
        </Routes>
    );
};

export default AppRoutes;
