import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

// SERVICE
import IsAuth from "../service/auth/IsAuth.jsx";
import IsGuest from "../service/auth/IsGuest.jsx";
// SERVICE


// LAYOUT
import AuthLayout from "../layout/auth/AuthLayout.jsx";
import MainLayout from "../layout/profile/ProfileLayout.jsx";
// LAYOUT

// AUTH PART
import Register from "../modules/auth/Register.jsx";
import Login from "../modules/auth/Login.jsx";
// AUTH PART

// PROFILE PART
import Posts from "../modules/profile/Posts";
// PROFILE PART

function Router(props) {
    return (
        <BrowserRouter>
            <IsAuth>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Posts />}/>
                        <Route path={"*"} element={<Navigate to={"/"} replace />}/>
                    </Route>
                </Routes>
            </IsAuth>
            <IsGuest>
                <Routes>
                    <Route path={"/auth"} element={<AuthLayout />}>
                        <Route index element={<Login />}/>
                        <Route path={"sign-up"} element={<Register />}/>
                        <Route path={"*"} element={<Navigate to={"/auth"} replace />}/>
                    </Route>
                </Routes>
            </IsGuest>

        </BrowserRouter>
    );
}

export default Router;
