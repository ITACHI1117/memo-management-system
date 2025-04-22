import React from "react";
import { NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import "../LoginStyles.css";
import signUpImg from "../assets/images/signUpImg.png";
import element from "../assets/images/Element.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import crawfordLogo from "../assets/images/crawfordlogo.jpg";
import { redirect } from "react-router";
import { useNavigate } from "react-router";

function SignUpPage() {
  let navigate = useNavigate();
  const handleSignUp = (e) => {
    console.log("signing up");

    e.preventDefault();

    navigate("/memos");
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
            <img src={signUpImg} alt="" className="absolute bottom-0" />
          </div>
          {/* login form */}
          <div className="md:w-[40%] w-full h-[100vh] flex items-center ">
            <div className="w-full flex flex-col items-center justify-center p-10 gap-10">
              <h1 className="text-black text-2xl font-bold">Sign Up</h1>
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
                    className="border-[#043873] border-2  w-[100%]  rounded-2xl p-3 mt-4"
                  />
                </div>
                <div className="input">
                  <label htmlFor="password" className="mb-4">
                    Password
                  </label>
                  <select
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                    className="border-[#043873] border-2  w-[100%]  rounded-2xl p-3 mt-4 cursor-pointer"
                  >
                    <option value="student">Student</option>
                    <option value="student">Academic Staff</option>
                    <option value="student">Non Academic Staff</option>
                    <option value="student">Management</option>
                    <option value="student">Staff</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#043873] text-white p-3 rounded-2xl cursor-pointer"
                  onClick={(e) => handleSignUp(e)}
                >
                  Sign up
                </button>
              </form>
              <p>
                Don't have an account?{" "}
                <NavLink to="/login" className="text-[#075ab9]">
                  Login
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

export default SignUpPage;
