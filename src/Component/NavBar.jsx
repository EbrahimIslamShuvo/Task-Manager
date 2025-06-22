import React, { useState } from 'react';
import people from '../assets/Roadmap Design (1).svg';
import logo from '../assets/logo.png';
import { BiTask } from "react-icons/bi";
import { PiSpinnerBallBold } from "react-icons/pi";
import man from '../assets/portrait-smiling-handsome-man-isolated-against-white-background-caucasian-male-model-blue-smart-casual-clothing-studio-202971745.webp';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState("tm");
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    return (
        <div>
            <div className="">
                <div className="flex justify-end">
                    <img className="w-110" src={people} alt="" />
                </div>
                <div className="-mt-71 relative bg-gradient-to-l from-[#22584B]/85 via-[#040612] to-[#22584B]/85 h-75 w-full"></div>
                <div className="relative z-7 -mt-69 flex justify-between w-10/12 mx-auto">
                    <NavLink to={"/dashboard"}>
                        <img src={logo} alt="Logo" />
                    </NavLink>

                    <div className="flex items-center gap-7">
                        <NavLink to={"/dashboard"}>
                            <div
                                className={`flex items-center gap-1.5 cursor-pointer ${activeTab === "tm" ? "text-[#60E5AE]" : "text-white"}`}
                                onClick={() => setActiveTab("tm")}
                            >
                                <BiTask className="text-xl" />
                                <p>Task List</p>
                            </div>
                        </NavLink>
                        <NavLink to={"/dashboard/spin"}>
                            <div
                                className={`flex items-center gap-1.5 cursor-pointer ${activeTab === "spin" ? "text-[#60E5AE]" : "text-white"}`}
                                onClick={() => setActiveTab("spin")}
                            >
                                <PiSpinnerBallBold className="text-xl" />
                                <p>Spin</p>
                            </div>
                        </NavLink>
                    </div>

                    <div className="relative">
                        <div
                            className="flex items-center gap-3 text-white font-semibold cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            <img className="w-8 rounded-full" src={man} alt="User" />
                            <p>Thomus J.</p>
                        </div>

                        {showDropdown && (
                            <NavLink to={"/"}>
                                <div className="absolute right-0 mt-5 w-30 bg-transparent text-[#60E5AE] rounded border shadow-lg z-50">
                                    <button
                                        className="block w-full text-center px-4 py-2"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </NavLink>
                        )}
                    </div>
                </div>
                <div className="w-10/12 mx-auto mt-10 relative">
                    <h1 className='text-[#60E5AE] text-3xl font-semibold'>Hi Thomus J.</h1>
                    <h2 className='text-white text-6xl font-bold'>Welcome to Dashboard</h2>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
