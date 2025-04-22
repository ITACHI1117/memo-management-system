import React from "react";
import { ImForward } from "react-icons/im";
import { IoTrashOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";

function GridMemoMessageSection({
  ActiveMessage,
  handleMemoApproval,
  handleMemoDecline,
  loggedInUser,
  openCatg,
}) {
  return (
    <>
      {!ActiveMessage ? (
        <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
          <AiTwotoneMail className="text-9xl" />
          <h3> Open a Memo </h3>
        </div>
      ) : (
        <div className="message w-full h-full relative border-l-[1px] border-[#C9C9C9] p-2.5 md:pl-6 md:pr-6 pt-5 overflow-hidden overflow-y-scroll pb-25">
          {/* Top section */}
          <div className="message_top_section w-full flex justify-between items-center pb-2.5 border-b-[2px] border-[#C9C9C9]">
            <div className=" flex gap-2.5 items-center">
              <img
                src={ActiveMessage.Image}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "100%",
                }}
              />
              <div>
                <h3>{ActiveMessage.sender}</h3>
                <p className="text-[14px]">
                  <span>{ActiveMessage.senderMail}</span>
                </p>
              </div>
            </div>
            {/* date */}
            <p className="text-[14px] text-right w-30">
              {ActiveMessage.longDate} {ActiveMessage.time}
            </p>
          </div>
          {/* second section */}
          <div className="flex gap-2.5 mt-2.5 pb-2.5 border-b-[2px] border-[#C9C9C9] justify-between">
            <div className="flex gap-2.5 ">
              <ImForward style={{ fontSize: "25px", cursor: "pointer" }} />
              {/* <FaRegStar style={{ fontSize: "25px", cursor: "pointer" }} /> */}
              <IoTrashOutline style={{ fontSize: "25px", cursor: "pointer" }} />
            </div>
            <div>
              <p className="text-[14px]">Status: {ActiveMessage.validation}</p>
            </div>
          </div>

          {/* Full Message section */}
          <div
            style={{ scrollbarWidth: "none" }}
            className="overflow-scroll mt-5 "
          >
            {/* memo subject */}
            <h2 className="mb-5">{ActiveMessage.subject}</h2>
            {/* memo */}
            <p>{ActiveMessage.message}</p>
          </div>

          {/* Memo Validation */}
          {/* Check if Logged in user is not a student befor displaying this component */}
          {(loggedInUser.LoggedInUser !== "student") & (openCatg == "Inbox") ? (
            <div className="fixed flex justify-between right-5 bottom-2.5">
              {/* <textarea type="text" placeholder="Type something..." /> */}
              <div className="flex gap-2.5">
                <button
                  onClick={handleMemoDecline}
                  className="bg-red-500 text-white rounded-[10px] md:pt-3.5 md:pb-3.5 md:p-9 px-5 cursor-pointer"
                >
                  Decline
                </button>
                <button
                  onClick={handleMemoApproval}
                  className="bg-green-500 text-white rounded-[10px] md:pt-3.5 md:pb-3.5 md:p-9 px-5 py-2 cursor-pointer"
                >
                  Approve
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default GridMemoMessageSection;
