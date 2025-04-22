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
    senderMail: "onelmore@gmail.com",
    subject: "Invitation to the team event",
    message:
      "I am pleased to invite you all to our team building event that will be held next Friday, January 21st at 2 pm. The event will be held at the company's conference hall, we will have games",
    date: "Oct 24",
    longDate: "24th Dec, 2022",
    time: "10:00 AM",
    unread: true,
    validation: "Approved",
  },
  {
    id: 2,
    Image: profileIMage2,
    sender: "Grace Collins",
    senderMail: "gracecollins@gmail.com",
    subject: "Invitation to the team event",
    message:
      "Dear Team, I hope this email finds you well. As you are aware, the COVID-19 pandemic has forced many businesses to adapt to a remote work model, and we have been no exception. Over the past year, our team has been working remotely, and it has become clear that this is a viable option for us. We have been closely monitoring the situation and have observed that remote work has several benefits, such as increased productivity, cost savings, and employee satisfaction. It also allows for more flexibility and work-life balance for our team members. I would like to schedule a team meeting to discuss this proposal further and hear your thoughts and concerns. Please let me know if you have any availability next week, and we will schedule the meeting accordingly. In the meantime, please let me know if you have any questions or concerns. Thank you for your time and consideration. Best regards, Home Boy",
    date: "Oct 24",
    longDate: "24th Dec, 2022",
    time: "10:00 AM",
    unread: false,
    validation: "Pending",
  },
  {
    id: 3,
    Image: profileIMage3,
    sender: "Mark Marner",
    senderMail: "markmarner@gmail.com",
    subject: "Invitation to the team event",
    message:
      "Dear Hiring Manager, I am excited to apply for the Front-End Mobile App Developer role at Vhaye & Kess . With over two years of experience in mobile app development, I specialize in building high-performance, user-friendly applications using React Native and JavaScript. My expertise includes UI/UX design, performance optimization, API integration, and state management, ensuring seamless and responsive app experiences. I am passionate about crafting intuitive mobile solutions and continuously improving functionality and efficiency. I would love the opportunity to contribute my skills to your team. Please let me know a convenient time to discuss how I can add value to your projects. Best regards, Ajogu Joseph",
    date: "Oct 24",
    longDate: "24th Dec, 2022",
    time: "10:00 AM",
    unread: false,
    validation: "Approved",
  },
  {
    id: 4,
    Image: profileIMage2,
    sender: "Frank Muler",
    senderMail: "frankmuller@gmail.com",
    subject: "Invitation to the team event",
    message:
      "I hope this email finds you well. As you are aware, the COVID-19 pandemic has forced many businesses to adapt to a remote work model, and we have been no exception. Over the past year, our team has been ...",
    date: "Oct 24",
    longDate: "24th Dec, 2022",
    time: "10:00 AM",
    unread: false,
    validation: "Declined",
  },
  {
    id: 5,
    Image: profileIMage2,
    sender: "Danetia Don",
    senderMail: "danetiadon@gmail.com",
    subject: "Invitation to the team event",
    message:
      "I hope this email finds you well. As you are aware, the COVID-19 pandemic has forced many businesses to adapt to a remote work model, and we have been no exception. Over the past year, our team has been ...",
    date: "Oct 24",
    longDate: "24th Dec, 2022",
    time: "10:00 AM",
    unread: false,
    validation: "Pending",
  },
  {
    id: 6,
    Image: profileIMage2,
    sender: "Akomolafe John",
    senderMail: "akomolafejohn@gmail.com",
    subject: "Invitation to the team event",
    message:
      "I hope this email finds you well. As you are aware, the COVID-19 pandemic has forced many businesses to adapt to a remote work model, and we have been no exception. Over the past year, our team has been ...",
    date: "Oct 24",
    longDate: "24th Dec, 2022",
    time: "10:00 AM",
    unread: false,
    validation: "Approved",
  },
];

function Inbox({ setActiveMessage, activeMessage }) {
  //   const [activeMessage, setActiveMessage] = useState(0);
  const { dispatch, ActiveMessage } = useMessage();
  const handleDisplayMessage = (id) => {
    dispatch({ type: "OPEN_MESSAGE", payload: MessageArray[id - 1] });
    setActiveMessage(id);
  };
  return (
    <>
      <div className="message_list_header font-[Roboto, serif]">
        <h1 className="text-black text-[30px] font-(family-name:<Roboto, serif>)">
          Inbox
        </h1>
      </div>
      {/* search bar */}
      <div className="flex items-center mt-2.5 ">
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
      <div className="flex gap-5 mt-5 w-full">
        <ul className="flex w-full justify-between">
          <li className="pb-2.5 border-b-[4px] border-[#888888] cursor-pointer">
            <p>All messages</p>
          </li>
        </ul>
      </div>

      {/* message list */}
      {/* message in list */}
      <div
        style={{
          overflowY: "scroll",
          height: "80vh",
          paddingBottom: "200px",
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
                <div className="flex gap-2.5 items-center ">
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

export default Inbox;
