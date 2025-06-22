import React from 'react';
import Error from '../Error/Error';
import NavBar from '../../Component/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer';

const Home = () => {
    return (
        <div>
            <div className=" sticky h-fit top-0">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;