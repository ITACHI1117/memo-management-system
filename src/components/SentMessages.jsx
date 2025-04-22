import React, { useState } from "react";
import profileIMage from "../assets/images/image1.png";
import profileIMage2 from "../assets/images/img2.png";
import profileIMage3 from "../assets/images/img3.png";
import { IoSearch } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useMessage } from "../context/MessageContext";

const MessageArray = [
  {
    id: 1,
    Image: profileIMage,
    sender: "Onel More",
    subject: "Invitation to the team event",
    message:
      "I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games",
    date: "Oct 24",
    unread: true,
    validation: "Pending",
  },
  {
    id: 2,
    Image: profileIMage2,
    sender: "Grace Collins",
    subject: "Invitation to the team event",
    message:
      "I hope this email finds you well. As you are aware, the COVID-19 pandemic has forced many businesses to adapt to a remote work model, and we have been no exception. Over the past year, our team has been ...",
    date: "Oct 24",
    unread: false,
    validation: "Pending",
  },
  {
    id: 3,
    Image: profileIMage3,
    sender: "Mark Marner",
    subject: "Invitation to the team event",
    message:
      "I hope this email finds you well. As you are aware, the COVID-19 pandemic has forced many businesses to adapt to a remote work model, and we have been no exception. Over the past year, our team has been ...",
    date: "Oct 24",
    unread: false,
    validation: "Pending",
  },
  {
    id: 4,
    Image: profileIMage2,
    sender: "Frank  Muler",
    subject: "Invitation to the team event",
    message:
      "I hope this email finds you well. As you are aware, the COVID-19 pandemic has forced many businesses to adapt to a remote work model, and we have been no exception. Over the past year, our team has been ...",
    date: "Oct 24",
    unread: false,
    validation: "Approved",
  },
  {
    id: 7,
    Image: profileIMage2,
    sender: "Danetia Don",
    subject: "Invitation to the team event",
    message:
      "I hope this email finds you well. As you are aware, the COVID-19 pandemic has forced many businesses to adapt to a remote work model, and we have been no exception. Over the past year, our team has been ...",
    date: "Oct 24",
    unread: false,
    validation: "Declined",
  },
  {
    id: 5,
    Image: profileIMage2,
    sender: "Akomolafe John",
    subject: "Invitation to the team event",
    message:
      "I hope this email finds you well. As you are aware, the COVID-19 pandemic has forced many businesses to adapt to a remote work model, and we have been no exception. Over the past year, our team has been ...",
    date: "Oct 24",
    unread: false,
    validation: "Approved",
  },
];

function SentMessages({ setActiveMessage, activeMessage }) {
  //   const [activeMessage, setActiveMessage] = useState(0);
  const { dispatch, ActiveMessage } = useMessage();
  const handleDisplayMessage = (id) => {
    dispatch({ type: "OPEN_MESSAGE", payload: MessageArray[id - 1] });
    setActiveMessage(id);
  };
  return (
    <>
      <div className="message_list_header">
        <h1 className="text-black text-[30px] font-(family-name:<Roboto, serif>)">
          Sent
        </h1>
        {/* <div>
               <p>500 Messages</p>
               <GoDotFill style={{color:"gray"}} />
               <p>6 Unread</p>
             </div> */}
      </div>

      {/* search bar */}
      <div className="flex items-center mt-2.5">
        <div className="bg-[#F9F9F9] rounded-[10px] pl-5 flex items-center justify-center">
          <IoSearch style={{ color: "#C9C9C9" }} />
          <input
            type="text"
            placeholder="Search"
            className="p-2.5 pr-10 border-none outline-none bg-transparent"
          />
        </div>
      </div>
      {/* tabs */}
      <div className="tabs">
        <ul>
          <li className="activeTab">
            <p>All Memos</p>
          </li>
          {/* <li><p>Read</p></li>
                       <li><p>Unread</p></li> */}
        </ul>
      </div>

      {/* message list */}
      {/* message in list */}
      <div
        style={{
          overflowY: "scroll",
          height: "80vh",
          paddingBottom: "50px",
          position: "relative",
        }}
      >
        {MessageArray.map(({ id, sender, Image, message }) => {
          return (
            <div
              key={id}
              className={`mt-5 transition-[0.3s] pl-2.5 ${
                activeMessage == id ? "border-l-[7px] border-[#043873]" : ""
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => handleDisplayMessage(id)}
            >
              {/* first roe */}

              <div className="flex items-center justify-between relative ">
                <div className="bg-[#043873] rounded-full w-1.5 h-1.5 text-[12px] text-white absolute -ml-1.5 "></div>
                <div className="flex gap-2.5 items-center">
                  <img
                    src={Image}
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      borderRadius: "100%",
                      marginLeft: "5px",
                    }}
                  />
                  <div>
                    <h4>{sender}</h4>
                    <small>Invitation to the team event</small>
                  </div>
                </div>

                <p>Oct 24</p>
              </div>
              {/* second row */}
              <div className="mt-2.5">
                <small className="text-[#888888]">
                  {message.length > 300
                    ? message.substring(0, 200) + "..."
                    : message}
                </small>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SentMessages;
