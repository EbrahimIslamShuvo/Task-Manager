import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { FaPenToSquare } from "react-icons/fa6";
import TaskCard from './TaskCard';
import { NavLink } from 'react-router-dom';

const TaskList = () => {
    const taskCategories = ["All Category", "Work", "Personal", "Study"];
    const taskStatus = ["All Task", "Ongoing", "Pending", "Collaborative", "Done"];

    const [selectedCategory, setSelectedCategory] = useState("All Category");
    const [selectedStatus, setSelectedStatus] = useState("All Task");

    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        fetch("Task.json")
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);
    const filteredTasks = tasks?.filter(task => {
        const categoryMatch =
            selectedCategory === "All Category" || task.category === selectedCategory;
        const statusMatch =
            selectedStatus === "All Task" || task.status === selectedStatus;
        return categoryMatch && statusMatch;
    });

    return (
        <div>
            <div className="bg-white relative w-10/12 mx-auto rounded-lg mt-12 p-10 shadow">
                <div className="flex items-center justify-between mb-8">
                    <h1 className='text-3xl font-semibold'>All Task List</h1>
                    <div className="flex items-center gap-10">
                        <Dropdown
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.value)}
                            options={taskCategories}
                            placeholder="Select Task Category"
                            className="w-fit gap-3"
                        />
                        <Dropdown
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.value)}
                            options={taskStatus}
                            placeholder="Select Task Status"
                            className="w-fit gap-3"
                        />
                        <NavLink to={"/error"}>
                            <div className="bg-[#60E5AE] py-2 px-4 rounded-lg flex items-center gap-1 cursor-pointer">
                                <FaPenToSquare className='text-lg' />
                                <p>Create New Task</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    {
                        filteredTasks?.length > 0 ? (
                            filteredTasks.map((task, index) => (
                                <TaskCard key={index} task={task} />
                            ))
                        ) : (
                            <p className="col-span-3 text-center text-gray-500">No tasks found.</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TaskList;
