import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ButtonOne from '../../Component/Shared/ButtonOne';
import { FaPenToSquare } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { GoDotFill } from "react-icons/go";
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css';       // Required theme
import 'primereact/resources/primereact.min.css';                // Core CSS
import 'primeicons/primeicons.css';                              // Icons

const SingleTask = () => {
    const { id } = useParams();
    const [tasks, setTasks] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [showSubmitModal, setShowSubmitModal] = useState(false);

    const statusOptions = [
        { label: "Pending", value: "Pending" },
        { label: "Ongoing", value: "Ongoing" },
        { label: "Done", value: "Done" },
        { label: "Collaborate", value: "Collaborate" },
    ];

    useEffect(() => {
        fetch("/Task.json")
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    // Find the task matching the id param
    const filter_task = tasks?.find(task => task.id === Number(id));

    // Update selectedStatus when task loads
    useEffect(() => {
        if (filter_task) {
            const initialStatus = statusOptions.find(opt => opt.value === filter_task.status);
            setSelectedStatus(initialStatus || null);
        }
    }, [filter_task]);

    // Handler for dropdown change
    const onStatusChange = (e) => {
        setSelectedStatus(e.value);
        // TODO: Add backend update logic here if needed
    };

    // Handler for Submit button click
    const handleSubmit = () => {
        if (selectedStatus?.value === "Done") {
            setShowSubmitModal(true);
        } else {
            alert("Status submitted successfully!");
            // You can add your submit logic here
        }
    };

    // Extract the string status from selectedStatus object for display and color logic
    const currentStatus = selectedStatus ? selectedStatus.value : null;

    return (
        <div>
            <div className="bg-white relative w-10/12 mx-auto rounded-lg mt-12 p-10 shadow">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold">Task Details</h1>
                    <div className="text-xl flex items-center gap-6">
                        <button
                            type="button"
                            className="flex items-center bg-[#fcf1da] gap-2 font-semibold px-3 py-2 rounded-lg text-[#FFAB01]"
                            onClick={() => alert('Edit task clicked!')}
                        >
                            <FaPenToSquare />
                            <span>Edit Task</span>
                        </button>
                        <NavLink to={"/dashboard"}>
                            <ButtonOne name={"Back"} color={"#60E5AE"} width={"100px"} />
                        </NavLink>
                    </div>
                </div>
                <div className='mt-15'>
                    {filter_task ? (
                        <div>
                            <h1 className='text-4xl font-semibold'>{filter_task.name}</h1>
                            <p className='text-lg mt-5 text-gray-500'>{filter_task.long_description}</p>

                            <div className="mt-10 flex gap-10 items-center">
                                <div>
                                    <h4 className='text-xl font-semibold mb-1'>End Date</h4>
                                    <div className="flex items-center gap-2">
                                        <FcCalendar className='text-4xl' />
                                        <p className='text-xl font-semibold'>{filter_task.end_date}</p>
                                    </div>
                                </div>
                                <div>
                                    {
                                        currentStatus === "Pending" ? (
                                            <div className="flex items-center gap-1 text-[#E343E6]">
                                                <GoDotFill />
                                                <p>Pending</p>
                                            </div>
                                        ) : currentStatus === "Ongoing" ? (
                                            <div className="flex items-center gap-1 text-[#DD9221]">
                                                <GoDotFill />
                                                <p>Ongoing</p>
                                            </div>
                                        ) : currentStatus === "Done" ? (
                                            <div className="flex items-center gap-1 text-[#21D789]">
                                                <GoDotFill />
                                                <p>Done</p>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1 text-blue-600">
                                                <GoDotFill />
                                                <p>Collaborate</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="mt-10">
                                <h4 className='text-2xl font-semibold mb-4'>Change Status</h4>
                                <Dropdown
                                    options={statusOptions}
                                    onChange={onStatusChange}
                                    value={selectedStatus}
                                    optionLabel="label"
                                    placeholder="Select Status"
                                    className="w-fit gap-3"
                                />
                            </div>
                            <div className="flex items-center gap-5 justify-end mt-6">
                                <ButtonOne name={"Delete"} color={"#FFE4DE"} width={"100px"} text={"#ff5f3b"} onClick={() => alert("Delete clicked")} />
                                <ButtonOne name={"Submit"} color={"#60E5AE"} width={"100px"} onClick={handleSubmit} />
                            </div>
                        </div>
                    ) : tasks ? (
                        <p className="text-red-500 font-semibold">Task not found.</p>
                    ) : (
                        <p>Loading task details...</p>
                    )}
                </div>
            </div>

            {/* Modal for Submit */}
            {showSubmitModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-lg text-center">
                        <h3 className="text-xl font-bold mb-4">Congratulations!</h3>
                        <p className="mb-6">You have marked this task as Done.</p>
                        <button
                            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                            onClick={() => setShowSubmitModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleTask;
