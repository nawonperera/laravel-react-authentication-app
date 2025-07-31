import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface RootState {
    auth: {
        token: string;
        user_id: string | null;
        user_role: number | null;
        isAuthenticated: boolean;
    };
}

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { token, user_role, isAuthenticated } = useSelector(
        (state: RootState) => state.auth,
    );

    if (!token || user_role !== 1 || !isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
