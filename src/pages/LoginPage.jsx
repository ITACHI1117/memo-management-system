import React from "react";
import { NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import "../LoginStyles.css";
import loginImg from "../assets/images/loginImg.webp";
import element from "../assets/images/Element.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import crawfordLogo from "../assets/images/crawfordlogo.jpg";
import { redirect } from "react-router";
import { useNavigate } from "react-router";
import { useUser } from "../context/LoggedInUserContext";

function LoginPage() {
  const { LoggedInUser, dispatch } = useUser();
  // login function
  let navigate = useNavigate();

  const handelFrom = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN", payload: { [e.target.name]: e.target.value } });
    localStorage.setItem(
      "LoggedInUser",
      JSON.stringify({ [e.target.name]: e.target.value })
    );
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await LoggedInUser;
    LoggedInUser && navigate("/memos");
  };

  return (
    <>
      <section className="w-full ">
        <div className="flex w-full">
          <div className="bg-[#043873] md:w-[60%] w-0 relative">
            <div className="m-3">
              <NavLink to={"/"}>
                <IoIosArrowDropleftCircle className="text-white text-4xl cursor-pointer" />
              </NavLink>
            </div>
            <div className="flex gap-4 items-center justify-center mt-15 ">
              <img
                src={crawfordLogo}
                alt=""
                className="w-15 h-15 rounded-full"
              />
              <h1 className="text-center font-bold text-4xl">
                Crawford University Memo
              </h1>
            </div>
            <img
              src={element}
              alt=""
              className="absolute top-[10%] left-0 w-full "
            />
            <img
              src={loginImg}
              loading="lazy"
              alt=""
              className="absolute bottom-0"
            />
          </div>
          {/* login form */}
          <div className="md:w-[40%] w-full h-[100vh] flex items-center ">
            <div className="w-full flex flex-col items-center justify-center p-10 gap-10">
              <h1 className="text-black text-2xl font-bold">Login</h1>
              <form action="" className="flex flex-col w-[80%] gap-4 ">
                <div>
                  <label htmlFor="email" className="text-[20px]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="border-[#043873] border-2  w-[100%]  rounded-2xl p-3"
                  />
                </div>
                <div className="input">
                  <label htmlFor="password" className="mb-4">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="border-[#043873] border-2  w-[100%]  rounded-2xl p-3 mt-4"
                  />
                </div>
                <div className="input">
                  <label htmlFor="password" className="mb-4">
                    Password
                  </label>
                  <select
                    type="password"
                    name="LoggedInUser"
                    id=""
                    placeholder="Password"
                    className="border-[#043873] border-2  w-[100%]  rounded-2xl p-3 mt-4 cursor-pointer"
                    onChange={handelFrom}
                    required
                  >
                    <option value=""></option>
                    <option value="student">Student</option>
                    <option value="Academic Staff">Academic Staff</option>
                    <option value="Non Academic Staff">
                      Non Academic Staff
                    </option>
                    <option value="Management">Management</option>
                    <option value="Staff">Staff</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#043873] text-white p-3 rounded-2xl cursor-pointer"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
              <p>
                Don't have an account?{" "}
                <NavLink to="/signUp" className="text-[#075ab9]">
                  Sign up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        {/* image section */}
      </section>
    </>
  );
}

export default LoginPage;
