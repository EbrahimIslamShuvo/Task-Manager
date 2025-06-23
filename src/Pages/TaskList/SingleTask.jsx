import React, { useEffect, useState } from 'react';
import { FaPenToSquare } from 'react-icons/fa6';
import { NavLink, useParams } from 'react-router-dom';
import { FcCalendar } from 'react-icons/fc';
import { GoDotFill } from 'react-icons/go';
import ButtonOne from '../../Component/Shared/ButtonOne';
import { Dropdown } from 'primereact/dropdown';
import deletephoto from '../../assets/delete.png';
import congrats from '../../assets/congrats.png'; // Assuming you have a congrats image

const SingleTask = () => {
    const { id } = useParams();
    const [tasks, setTasks] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);

    // Define possible task statuses
    const statusOptions = [
        { label: 'Pending', value: 'Pending' },
        { label: 'Ongoing', value: 'Ongoing' },
        { label: 'Done', value: 'Done' },
        { label: 'Collaborate', value: 'Collaborate' }
    ];

    useEffect(() => {
        // Fetch tasks from local JSON or API
        fetch('/Task.json')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    const filter_task = tasks?.find(task => task.id === Number(id));

    const handleSubmit = () => {
        // You can update the task status here or call backend API
        alert('Status submitted successfully!');
    };

    const handleStatusChange = (e) => {
        setSelectedStatus(e.value);
        // Optionally update backend here
    };

    return (
        <div>
            <div className="bg-white relative w-10/12 mx-auto rounded-lg mt-12 p-10 shadow">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold">Task Details</h1>
                    <div className="text-xl flex items-center gap-6">
                        <NavLink to="/error">
                            <button
                                type="button"
                                className="flex items-center bg-[#fcf1da] gap-2 font-semibold px-3 py-2 rounded-lg text-[#FFAB01]"
                            >
                                <FaPenToSquare />
                                <span>Edit Task</span>
                            </button>
                        </NavLink>
                        <NavLink to="/dashboard">
                            <ButtonOne name={"Back"} color={"#60E5AE"} width={"100px"} />
                        </NavLink>
                    </div>
                </div>

                <div className="mt-15">
                    {filter_task ? (
                        <div>
                            <h1 className="text-4xl font-semibold">{filter_task.name}</h1>
                            <p className="text-lg mt-5 text-gray-500">{filter_task.long_description}</p>

                            <div className="mt-10 flex gap-10 items-center">
                                <div>
                                    <h4 className="text-xl font-semibold mb-1">End Date</h4>
                                    <div className="flex items-center gap-2">
                                        <FcCalendar className="text-4xl" />
                                        <p className="text-xl font-semibold">{filter_task.end_date}</p>
                                    </div>
                                </div>

                                {/* Task Status Rendering */}
                                <div>
                                    {filter_task.status === 'Pending' ? (
                                        <div className="flex items-center gap-1 text-[#E343E6]">
                                            <GoDotFill />
                                            <p>Pending</p>
                                        </div>
                                    ) : filter_task.status === 'Ongoing' ? (
                                        <div className="flex items-center gap-1 text-[#DD9221]">
                                            <GoDotFill />
                                            <p>Ongoing</p>
                                        </div>
                                    ) : filter_task.status === 'Done' ? (
                                        <div className="flex items-center gap-1 text-[#21D789]">
                                            <GoDotFill />
                                            <p>Done</p>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1 text-blue-600">
                                            <GoDotFill />
                                            <p>Collaborate</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Status Dropdown */}
                            <div className="mt-10">
                                <h4 className="text-2xl font-semibold mb-4">Change Status</h4>
                                <Dropdown
                                    options={statusOptions}
                                    onChange={handleStatusChange}
                                    value={selectedStatus}
                                    optionLabel="label"
                                    placeholder="Select Status"
                                    className="w-fit gap-3"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-5 justify-end mt-6">

                                {/* Delete Button & Modal */}
                                <label htmlFor={`deleteModal-${filter_task.id}`} className="cursor-pointer">
                                    <ButtonOne name={"Delete"} color={"#FFE4DE"} width={"100px"} />
                                </label>
                                <input type="checkbox" id={`deleteModal-${filter_task.id}`} className="modal-toggle" />
                                <div className="modal" role="dialog">
                                    <div className="modal-box flex flex-col items-center justify-center">
                                        <img src={deletephoto} alt="Delete Confirmation" />
                                        <h3 className='text-4xl my-4 font-semibold'>Are You Sure?</h3>
                                        <div className="flex justify-center items-center gap-10">
                                            <NavLink to={"/dashboard"}>
                                                <ButtonOne name="Yes" color="#60E5AE" width="100px" />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <label className="modal-backdrop" htmlFor={`deleteModal-${filter_task.id}`}>Close</label>
                                </div>

                                {/* Submit Button & Congrats Modal */}
                                <label htmlFor={`congratsModal-${filter_task.id}`} className="cursor-pointer">
                                    <ButtonOne name={"Submit"} color={"#60E5AE"} width={"100px"} onClick={handleSubmit} />
                                </label>
                                <input type="checkbox" id={`congratsModal-${filter_task.id}`} className="modal-toggle" />
                                <div className="modal" role="dialog">
                                    <div className="modal-box flex flex-col items-center justify-center">
                                        <img src={congrats} alt="Congrats" />
                                        <div className="my-4 text-center">
                                            <h3 className='text-4xl font-semibold'>Congratulations</h3>
                                            <p className='text-gray-300'>Congratulations! You have successfully completed the task and you got 20 points.</p>
                                        </div>
                                        <div className="flex justify-center items-center gap-10">
                                            <NavLink to={"/dashboard"}>
                                                <ButtonOne name="Back to Dashboard" color="#60E5AE" width="200px" />
                                            </NavLink>

                                        </div>
                                    </div>
                                    <label className="modal-backdrop" htmlFor={`congratsModal-${filter_task.id}`}>Close</label>
                                </div>

                            </div>
                        </div>
                    ) : tasks ? (
                        <p className="text-red-500 font-semibold">Task not found.</p>
                    ) : (
                        <p>Loading task details...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleTask;
