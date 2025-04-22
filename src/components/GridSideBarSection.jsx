import React, { useState } from "react";
import profileIMage from "../assets/images/image1.png";

function GridSideBarSection({
  Categories,
  activeCatg,
  handlecCatgClick,
  handleNewMemoMOdal,
  handleLogOut,
}) {
  return (
    <>
      <div className={`w-full min-h-screen bg-[#043873] p-2.5 pt-2.5 relative`}>
        {/* user small profile */}
        <div className="flex gap-2.5 mb-2.5 justify-between">
          <div className="flex md:flex-row f gap-2.5 items-center">
            <img
              src={profileIMage}
              alt=""
              style={{ width: "50px", height: "50px" }}
              className="object-cover rounded-full"
            />
            <div>
              <h4 className="text-white">Jane Doe</h4>
              <small className="text-white">janedoe@gmail.com</small>
            </div>
          </div>
          {window.innerWidth < 768 && (
            <button
              onClick={handleNewMemoMOdal}
              className="bg-white p-2.5 rounded-l-3xl "
            >
              {" "}
              + New Message
            </button>
          )}
        </div>
        <hr className="text-white" />
        {/* New mwssage button */}
        {window.innerWidth > 768 && (
          <button
            onClick={handleNewMemoMOdal}
            className="mt-5 bg-white text-[18px] p-3.5 border-none rounded-r-4xl text-[#043873 mb-5 cursor-pointer hover:bg-white hover:border-2 hover:border-[#5D5FEF] new_msg_button"
          >
            {" "}
            + New Message
          </button>
        )}

        {/* Categories List */}
        <div className="cat_list">
          <ul className="flex md:flex-col gap-10 w-full pt-2.5">
            {Categories.map(({ id, name, icon, notification }) => {
              return (
                <li key={id} onClick={() => handlecCatgClick(id, name)}>
                  <div
                    className={`flex justify-between items-center cursor-pointer transition-[0.3s] ${
                      activeCatg === id
                        ? "border-l-[3px] pl-2.5 border-white"
                        : ""
                    }`}
                  >
                    <div className="flex gap-2.5 items-center">
                      {icon}
                      <p className="text-white">{name}</p>
                    </div>
                    <div className="text-white rounded-full p-1.5 text-[12px]">
                      {/* <p>{notification}</p> */}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {window.innerWidth > 768 && (
          <button
            onClick={handleLogOut}
            className=" absolute bottom-1.5 mt-5 bg-white text-[18px] p-2.5 border-none rounded-r-4xl text-[#043873 mb-5 cursor-pointer hover:bg-white hover:border-2 hover:border-[#5D5FEF] new_msg_button"
          >
            {" "}
            Log out
          </button>
        )}
      </div>
    </>
  );
}

export default GridSideBarSection;
