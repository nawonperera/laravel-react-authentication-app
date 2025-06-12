import React from "react";
import AppRoutes from "./utilities/routers/AppRoutes.tsx";
import { BrowserRouter } from "react-router";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    );
};

export default App;
