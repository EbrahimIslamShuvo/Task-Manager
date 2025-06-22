import React from 'react';
import { SiFiles } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";
import { NavLink } from 'react-router-dom';

const TaskCard = ({ task }) => {
    return (
        <div>
            <div className=" flex flex-col gap-3 border border-gray-400 shadow shadow-gray-400 p-5 rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-[#60E5AE]">
                            <SiFiles className='text-xl' />
                        </div>
                        <NavLink to={`/dashboard/task/${task.id}`}>
                            <h1 className='text-2xl font-semibold'>{task.name}</h1>
                        </NavLink>
                    </div>
                    <MdDelete className='text-2xl hover:-translate-y-1 duration-300 text-red-500'></MdDelete>
                </div>
                <p className='text-lg text-gray-400'>{task.short_description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <FcCalendar className='text-2xl' />
                        <p className='text-lg font-semibold'>{task.end_date}</p>
                    </div>
                    <div className="">
                        {
                            task.status == "Pending" ? (
                                <div className="flex items-center gap-1 text-[#E343E6]">
                                    <GoDotFill />
                                    <p>{task.status}</p>
                                </div>
                            ) : task.status == "Ongoing" ? (
                                <div className="flex items-center gap-1 text-[#DD9221]">
                                    <GoDotFill />
                                    <p>{task.status}</p>
                                </div>
                            ) : task.status == "Done" ? (
                                <div className="flex items-center gap-1 text-[#21D789]">
                                    <GoDotFill />
                                    <p>{task.status}</p>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1 text-blue-600">
                                    <GoDotFill />
                                    <p>{task.status}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;