import React from 'react';
import {Outlet} from "react-router-dom";
import Logo from "../../assets/icons/Logo-Instagram.png";
function AuthLayout(props) {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default AuthLayout;
