import React from 'react';
import {Outlet} from "react-router-dom";
import Logo from "../../assets/icons/Logo-Instagram.png";
function AuthLayout(props) {
    return (
        <div>
            <div className='mt-2'>
                <img src={Logo} width={190} height={110} alt={"instagram image"}/>
            </div>
            <Outlet />
        </div>
    );
}

export default AuthLayout;
