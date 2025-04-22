import { useState } from "react";
import heroImg from "../assets/images/crawfordlogo.jpg";
import element from "../assets/images/Element.png";
import crawfordheroimg from "../assets/images/crawfordheroimg.jpg";
import crawfordHeroImg from "../assets/images/crawfordHeroImg.webp";
import mainMemoPageImg from "../assets/images/FeaturesImg.png";
import howItWorksImg from "../assets/images/howItWorksImg.jpg";
import { NavLink } from "react-router";
import LoginPage from "./LoginPage";

function LandingPage() {
  return (
    <>
      <section className="w-full flex justify-center bg-[#043873] h-[100vh] px-5 relative z-[1] overflow-hidden">
        <img
          src={element}
          alt=""
          loading="lazy"
          className="absolute top-[30%] left-0 w-full z-[-1] "
        />
        {/* navigation bar */}
        <div className="w-[95%]">
          <div className="h-16 flex justify-between items-center pb-10 pt-15">
            {/* logo */}
            <div className="items-center flex gap-2.5">
              <img
                src={heroImg}
                loading="lazy"
                alt=""
                className="md:w-15 md:h-15 w-10 h-10 rounded-full"
              />
              <h1 className="font-bold md:text-2xl text-[16px] text-wrap md:w-full w-5">
                Crawford University Memo{" "}
              </h1>
            </div>

            <NavLink
              to={"/login"}
              className="bg-white text-[#043873] rounded-2xl p-2 md:px-10 px-5 cursor-pointer z-10"
            >
              Login
            </NavLink>
          </div>
          {/* hero section */}

          <div className="mt-[50px] flex md:flex-row flex-col justify-between items-center z-20">
            <div className="md:w-[50%]">
              <h1 className="text-white md:text-5xl text-3xl font-bold mb-3.5 ">
                Crawford University Memo Management System
              </h1>
              <p className="text-white mb-3.5">
                A digital platform designed to streamline memo distribution
                within schools, ensuring efficient communication between
                administrators, staff, and students. With real-time
                notifications, acknowledgment tracking, and secure storage, it
                eliminates paper-based memos, enhancing organization and
                accountability.
              </p>
              <button className="bg-white text-[#043873] rounded-2xl p-3 px-10 cursor-pointer">
                Get started
              </button>
            </div>
            <div className="md:w-[50%]">
              <div className="w-[100%] h-[400px]  z-10">
                <img
                  src={crawfordHeroImg}
                  alt=""
                  className="w-full md:scale-200 scale-250"
                />
              </div>
              {/* <img src={heroImg} alt="" /> */}
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-full flex  justify-center p-20 px-5 relative z-[1] mt-10">
        <div className="items-center flex md:flex-row flex-col-reverse w-[95%]">
          <div className="md:w-[50%]">
            <div className=" z-10">
              <img
                src={mainMemoPageImg}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="md:w-[50%] items-center flex flex-col md:mb-0 mb-5">
            <h1 className="text-black md:text-6xl text-4xl font-bold text-center mb-10">
              Features
            </h1>
            <ul>
              <li className="li-style">
                Centralized Memo System – Send, receive, and manage memos all in
                one place.
              </li>
              <li className="li-style">
                Instant Notifications – Get real-time updates on important
                memos.
              </li>
              <li className="li-style">
                Read & Acknowledge Tracking – See who has read and responded to
                memos.
              </li>
              <li className="li-style">
                Attachments & Documents – Send memos with PDFs, images, and
                other files.
              </li>
              <li className="li-style">
                Role-Based Access – Control who can send, view, and manage
                memos.
              </li>
              <li className="li-style">
                Smart Search & Filters – Quickly find past memos with an
                advanced search system.
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* {How it works} */}
      <section className="w-full flex justify-center p-20 px-5 relative z-[1] mt-10">
        <div className="items-center flex md:flex-row-reverse flex-col-reverse w-[95%]">
          <div className="md:w-[50%]">
            <div className="md:w-[90%] md:h-[400px]  z-10">
              <img
                src={howItWorksImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-[50%] items-center flex flex-col md:mb-0 mb-5">
            <h1 className="text-black md:text-6xl text-4xl font-bold text-center mb-10">
              How it Works
            </h1>
            <ul>
              <li className="li-style">
                Admin Creates a Memo – Draft and send memos to specific staff or
                students.
              </li>
              <li className="li-style">
                Instant Delivery – Recipients receive notifications via email or
                the app.
              </li>
              <li className="li-style">
                Read Confirmation – Track who has opened and acknowledged the
                memo.
              </li>
              <li className="li-style">
                Secure Storage – Memos are archived for future reference.
              </li>
              <li className="li-style">
                Seamless Integration – Works with existing school management
                systems.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-[#043873] flex flex-col justify-center items-center w-full">
        <div className="max-w-7xl w-full flex flex-col md:items-center justify-center gap-2 p-5 lg:p-10">
          <div className="mt-6 flex flex-col lg:grid lg:grid-cols-4 gap-8">
            {/* <img src={Logo} alt="" className="w-[150px]" /> */}
            <article className="flex flex-col gap-1 lg:gap-3">
              <h5 className="text-white font-bold">Contact US</h5>
              <ul className="text-white font-Euclid_Light">
                <li>
                  <a href="">+234 7036 0881 35</a>
                </li>
                <li>
                  <a href="">+234 8038 1940 61</a>
                </li>
                <li>
                  <a href="">info@crawforduniversity.edu.ng</a>
                </li>
              </ul>
            </article>
            <article className="flex flex-col gap-1">
              <h5 className="text-white font-bold">About</h5>
              <ul className="text-white font-Euclid_Light">
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Academic Staff</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <a href="">Helpdesk</a>
                </li>
              </ul>
            </article>
            <article className="flex flex-col gap-1">
              <h5 className="text-white font-bold">Useful Links</h5>
              <ul className="text-white font-Euclid_Light">
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Academic Staff</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <a href="">Helpdesk</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </article>
            <article className="flex flex-col gap-1">
              <h5 className="text-white font-bold">Featured Cources</h5>
              <ul className="text-white font-Euclid_Light">
                <li>
                  <a href="">Bio Chemistry</a>
                </li>
                <li>
                  <a href="">Industrial Chemistry</a>
                </li>
                <li>
                  <a href="">Microbiology</a>
                </li>
                <li>
                  <a href="">Physics with Electronics</a>
                </li>
                <li>
                  <a href="">Business Administration and Management</a>
                </li>
              </ul>
            </article>
          </div>
        </div>
        <div className="w-full h-20">
          <hr />
          <p className="text-[#ffffffaa] mt-5 w-full text-center">
            Copyright © Crawford University 2024
          </p>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
