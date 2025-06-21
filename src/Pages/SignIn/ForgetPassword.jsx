import React from 'react';
import { IoMdStopwatch } from "react-icons/io";
import people from '../../assets/people.png'
import ButtonOne from '../../Component/Shared/ButtonOne';
const ForgetPassword = () => {
    return (
        <div>
            <div className="">
                <div className="">
                    <div className="flex justify-end">
                        <img className='w-70' src={people} alt="" />
                    </div>
                    <div className="-mt-63 relative bg-gradient-to-l from-[#22584B]/85 via-[#040612] to-[#22584B]/85 h-60 w-full"></div>
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl shadow-2xl bg-white w-11/12 mx-auto -mt-13 py-15 relative z-5">
                    <div className="bg-gradient-to-r from-[#04DE84] to-[#029A62] p-2 rounded-xl shadow-2xl">
                        <IoMdStopwatch className='text-5xl text-white' />
                    </div>
                    <h1 className='text-4xl font-semibold mt-5'>Reset your Password</h1>
                    <p className='mt-2 text-lg text-gray-400'>Strong passwords include numbers, letters, and punctuation marks.</p>
                    <div className="w-sm mt-8">
                        <div className="">
                            <h4 className='text-xl font-semibold'>Email</h4>
                            <input type="email" placeholder='Enter Your Mail' className='mt-2 shadow rounded focus:: outline-1 outline-gray-400 py-2 px-4 w-full' />
                        </div>
                        <div className="mt-5">
                            <h4 className='text-xl font-semibold'>Enter New Password</h4>
                            <input type="text" placeholder='Enter New Password' className='mt-2 shadow rounded focus:: outline-1 outline-gray-400 py-2 px-4 w-full' />
                        </div>
                        <div className="mt-5 mb-10">
                            <h4 className='text-xl font-semibold'>Enter Confirm Password</h4>
                            <input type="text" placeholder='Enter Confirm Password' className='mt-2 shadow rounded focus:: outline-1 outline-gray-400 py-2 px-4 w-full' />
                        </div>
                        <ButtonOne name={"Reset Password"} color={"#60E5AE"} width={"380px"}></ButtonOne>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;