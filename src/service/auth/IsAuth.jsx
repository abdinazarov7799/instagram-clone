import React from 'react';
import {useSettingsStore} from "../../store/settingsStore.jsx";
import {get} from "lodash";

function IsAuth(props) {
    const isLogin = useSettingsStore(state => get(state, 'isLogin', false));
    const {children} = props;
    return isLogin ? children : null
}

export default IsAuth;
