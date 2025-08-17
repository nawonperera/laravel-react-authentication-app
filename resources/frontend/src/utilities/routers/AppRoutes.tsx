import React from "react";
import { Navigate, Route, Routes } from "react-router";
import SignIn from "../../components/signInComponent/SignIn.tsx";

import { useSelector } from "react-redux";
import {
    CheckUserAuthentication,
    CheckUserIsAdmin,
    checkUserTokenNotEmpty,
} from "./checkUserAuthentication.ts";
import Products from "../../components/products/Products.tsx";
import type {RootState} from "../../store.tsx";



const AppRoutes: React.FC = () => {
    const { token, user_role, isAuthenticated } = useSelector(
        (state: RootState) => state.authentication,
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
                        <Products />
                    ) : (
                        <Navigate to="/" replace />
                    )
                }
            />
        </Routes>
    );
};

export default AppRoutes;
