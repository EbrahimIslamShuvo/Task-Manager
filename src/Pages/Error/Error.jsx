import React from 'react';
import ball from '../../assets/ball.png'
import error from '../../assets/error.png'
import plant from '../../assets/plant.png'
import shape from '../../assets/shape.png'
import floor from '../../assets/Floor.png'
import people from '../../assets/people.png'
import ButtonOne from '../../Component/Shared/ButtonOne';
import { NavLink } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <div className="">
                <div className="">
                    <div className="flex justify-end">
                        <img className='w-70' src={people} alt="" />
                    </div>
                    <div className="-mt-63 relative bg-gradient-to-l from-[#22584B]/85 via-[#040612] to-[#22584B]/85 h-60 w-full"></div>
                </div>
                <div className="bg-white w-11/12 mx-auto rounded-lg -mt-15 relative z-5 flex flex-col items-center">
                    <div className="flex flex-col items-center w-full p-15">
                        <img
                            className='w-140'
                            src={shape}
                            alt=""
                            style={{ filter: 'brightness(0) saturate(100%) invert(90%) sepia(20%) saturate(300%) hue-rotate(150deg)' }}

                        />
                        <img className='-mt-115 -ml-18 relative w-115' src={error} alt="" />
                        <img className='relative z-1 -mt-7 -ml-25' src={ball} alt="" />
                        <img className=' -mt-65 ml-94 relative z-1' src={plant} alt="" />
                        <img className='relative -mt-3' src={floor} alt="" />
                        <p className='relative teko-font text-3xl -mt-35 -ml-90'>Opss.. <br />Page Not Found</p>
                    </div>
                    <NavLink to={"/dashboard"}>
                        <div className="mt-45">
                            <ButtonOne name={"Back To Home"} color={"#60E5AE"} width={"400px"}></ButtonOne>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Error;