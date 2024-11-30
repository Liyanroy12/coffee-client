import React from 'react';
import Navber from './Navber';
import { Outlet } from 'react-router-dom';

const Layouts = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Layouts;