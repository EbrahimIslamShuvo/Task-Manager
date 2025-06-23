import React from 'react';
import { SiFiles } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import deletephoto from '../../assets/delete.png';
import ButtonOne from '../../Component/Shared/ButtonOne';

const TaskCard = ({ task }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Pending':
                return 'text-[#E343E6]';
            case 'Ongoing':
                return 'text-[#DD9221]';
            case 'Done':
                return 'text-[#21D789]';
            default:
                return 'text-blue-600';
        }
    };

    return (
        <div className="flex flex-col gap-3 border border-gray-400 shadow shadow-gray-400 p-5 rounded-xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-[#60E5AE]">
                        <SiFiles className='text-xl' />
                    </div>
                    <NavLink to={`/dashboard/task/${task.id}`}>
                        <h1 className='text-2xl font-semibold'>{task.name}</h1>
                    </NavLink>
                </div>

                <label htmlFor={`deleteButton-${task.id}`} className="cursor-pointer">
                    <MdDelete className='text-2xl hover:-translate-y-1 duration-300 text-red-500' />
                </label>
                <input type="checkbox" id={`deleteButton-${task.id}`} className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box flex flex-col items-center justify-center">
                        <img src={deletephoto} alt="Delete Confirmation" />
                        <h3 className='text-4xl my-4 font-semibold'>Are You Sure?</h3>
                        <div className="flex justify-center items-center gap-10">
                            <NavLink to={"/"}>
                                <ButtonOne name="Yes" color="#60E5AE" width="100px" />
                            </NavLink>
                        </div>
                    </div>
                    <label className="modal-backdrop" htmlFor={`deleteButton-${task.id}`}>Close</label>
                </div>
            </div>

            <p className='text-lg text-gray-400'>{task.short_description}</p>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FcCalendar className='text-2xl' />
                    <p className='text-lg font-semibold'>{task.end_date}</p>
                </div>

                <div className={`flex items-center gap-1 ${getStatusClass(task.status)}`}>
                    <GoDotFill />
                    <p>{task.status}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
