import React from "react";
import { Header } from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Routes } from "./routes";

import { AppBody } from "./styles/App.styles";
import { GlobalStyle } from "./styles/global";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firabase";
import Login from "./pages/Login";

function App() {
    const [user] = useAuthState(auth);
    
    return (
        <>
            <AppBody>
                <GlobalStyle />
                {!user ? (
                    <Login />
                ): (
                    <>
                    <Header />
                    <Sidebar />
                    <Routes />
                    </>
                )}
            </AppBody>
        </>
    );
}

export default App;
