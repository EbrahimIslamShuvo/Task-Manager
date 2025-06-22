import React from "react";
import signUp from "../../assets/signUp.png";
import { NavLink } from "react-router-dom";
import ButtonOne from "../../Component/Shared/ButtonOne";

const SignUp = () => {
  return (
    <div>
      <div className="bg-gray-200">
        <div className="flex justify-center items-center h-screen">
          <div
            data-aos="fade-left"
            className="bg-gradient-to-br from-[#1F4841] via-[#040612] to-[#1F4841] h-160 w-120 flex justify-center items-center"
          >
            <img className="w-90 " src={signUp} alt="Login illustration" />
          </div>
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center items-center bg-white h-160 px-15"
          >
            <div className="flex flex-col items-center mb-6">
              <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
              <h4 className="text-gray-600">
                To Create Account, Please Fill in the From Below
              </h4>
            </div>

            <form className="flex flex-col space-y-3 w-96">
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Full Name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#60E5AE]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#60E5AE]"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-semibold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#60E5AE]"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-semibold mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Retype Your Password"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#60E5AE]"
                  required
                />
              </div>

              <NavLink to={"/"}>
                <ButtonOne name="Sign Up" color="#60E5AE" width="100%" />
              </NavLink>

              <div className="divider text-center font-semibold my-4">OR</div>

              <p className="text-center">
                Already have an account?
                <NavLink to="/" className="font-semibold">
                  <span>Log In</span>
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
