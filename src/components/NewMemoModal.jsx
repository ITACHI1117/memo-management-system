import React, { useState } from "react";
import profileIMage from "../assets/images/image1.png";
import { MdCancel } from "react-icons/md";
import { ToastContainer, toast, Bounce } from "react-toastify";

function NewMemoModal({ setNewMessageModalOpen }) {
  const notify = () => toast("MeMo Sent Successfully ✅");
  // The current date
  const currentDate = new Date(Date.now());
  console.log(currentDate.toLocaleString());

  const [formData, setFormData] = useState({
    id: "genrated ID",
    Image: profileIMage,
    sender: "", //Pass in the current user name manually here
    senderMail: "janedoe@gmail.com", // pass in the current user email manually here
    subject: "",
    message: "",
    receiver: "",
    date: currentDate,
    unread: true,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prevDate) => ({
      ...prevDate,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewMemoModalOpen();
    notify();
    console.log(formData);
  };
  const handleNewMemoModalOpen = () => {
    setNewMessageModalOpen(false);
  };
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.46)" }}
      className="absolute w-full h-[100vh]  overflow-hidden items-center justify-center flex"
    >
      {/* modal */}
      <div className="md:w-[60%] md:h-[70%] w-full h-full bg-white md:rounded-3xl overflow-hidden relative">
        {/* memo inf */}
        <h1 className="pl-5 pt-2.5 text-black text-4xl font-bold">New Memo</h1>
        <div className="w-full p-2.5 pt-3.5 flex justify-between gap-6">
          <div className="flex gap-2.5 w-full items-center">
            <img
              src={profileIMage}
              alt=""
              style={{ width: "50px", height: "50px" }}
              className="object-cover rounded-full"
            />
            <div className="flex w-full ">
              <form className="flex flex-col  w-full">
                <div className="w-full flex gap-2.5">
                  <label htmlFor="">From:</label>
                  <input
                    name="senderMail"
                    type="text"
                    value={formData.senderMail}
                    onChange={handleChange}
                    placeholder="janedoe@gmail.com"
                    disabled={true}
                    className="w-full outline-none border-b-2 border-transparent"
                  />
                </div>
                <hr className="bg-gray-400 text-gray-400 " />
                <div className="w-full flex gap-2.5">
                  <label htmlFor="">To:</label>
                  <input
                    name="receiver"
                    type="text"
                    value={formData.receiver}
                    onChange={handleChange}
                    className="w-full outline-none border-b-2 border-transparent"
                  />
                </div>
                <hr className="bg-gray-400 text-gray-400 " />
                <div className="w-full flex gap-2.5">
                  <label htmlFor="">Subject:</label>
                  <input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full outline-none border-b-2 border-transparent"
                  />
                </div>
                <hr className="bg-gray-400 text-gray-400 " />
              </form>
            </div>
          </div>

          {/* close button */}
          <MdCancel
            className="text-3xl cursor-pointer text-red-700"
            onClick={handleNewMemoModalOpen}
          />
        </div>
        {/* Text Box */}
        <div className="w-full h-[70%] pl-6 pr-6 pt-6 overflow-hidden ">
          <textarea
            name="message"
            id=""
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here"
            className="w-full h-[90%] box-siz outline-none resize-none "
            // style={{ height: "500px" }}
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="absolute right-4.5 bottom-4.5 text-white rounded-[10px] p-2.5 pl-9 pr-9 bg-[#043873] cursor-pointer "
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default NewMemoModal;
