import React, { useEffect, useState } from "react";
import "../mainPage.css";
import { BsInbox } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import Inbox from "../components/Inbox";
import SentMessages from "../components/SentMessages";
import { useMessage } from "../context/MessageContext";
import NewMemoModal from "../components/NewMemoModal";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router";
import GridMemoSection from "../components/GridMemoSection";
import GridMemoMessageSection from "../components/GridMemoMessageSection";
import GridSideBarSection from "../components/GridSideBarSection";
import "../../inboxMessages.json";
import { useUser } from "../context/LoggedInUserContext";

function MainPage() {
  const { ActiveMessage } = useMessage();
  const { LoggedInUser } = useUser();

  // console.log(LoggedInUser);

  const [activeCatg, setActiveCatg] = useState(1);
  const [activeMessage, setActiveMessage] = useState(0);
  const [openCatg, setOpenCatg] = useState("Inbox");
  const [newMemoModalOpen, setNewMessageModalOpen] = useState(false);
  const [isReplaced, setIsReplaced] = useState(false);
  const [data, setData] = useState();

  const Categories = [
    {
      id: 1,
      name: "Inbox",
      icon: <BsInbox style={{ fontSize: "25px", color: "white" }} />,
      notification: 6,
      content: (
        <Inbox
          setActiveMessage={setActiveMessage}
          activeMessage={activeMessage}
        />
      ),
    },
    {
      id: 2,
      name: "Sent",
      icon: <LiaTelegram style={{ fontSize: "25px", color: "white" }} />,
      notification: 0,
      content: (
        <SentMessages
          setActiveMessage={setActiveMessage}
          activeMessage={activeMessage}
        />
      ),
    },
  ];

  const handlecCatgClick = (id, name) => {
    setActiveCatg(id);
    setOpenCatg(name);
    setActiveMessage(0); // This is to close the message section when a category is clicked
  };

  const handleNewMemoMOdal = () => {
    setNewMessageModalOpen(true);
  };

  // logout function
  let navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("LoggedInUser");
    navigate("/login");
  };

  useEffect(() => {
    const savedUser = localStorage.getItem("LoggedInUser");
    console.log(savedUser);

    !LoggedInUser & (savedUser == null) && navigate("/login");
  }, [LoggedInUser]);

  //   Memo validation for Logged in Staffs
  const handleMemoDecline = () => {
    // send Notifications to students or other staff that memo has been declined
    toast.error("Memo Declined");
  };

  const handleMemoApproval = () => {
    // send Notifications to students or other staff that memo has been approved
    toast.success("Memo Approved");
  };

  //   Dummy constant for logged in user
  //   use this to check who is logged in and change the UI accordingly (keyword staff is important )
  // const loggedInUser = "student";

  return (
    <div className="md:grid flex flex-col w-full min-h-screen h-full md:grid-cols-[1.5fr_minmax(200px,_2fr)_5fr] ">
      {window.innerWidth < 768 ? (
        <>
          <GridSideBarSection
            Categories={Categories}
            activeCatg={activeCatg}
            handlecCatgClick={handlecCatgClick}
            handleNewMemoMOdal={handleNewMemoMOdal}
            handleLogOut={handleLogOut}
          />
          {/* add the onclick here */}
          {activeMessage ? (
            <GridMemoMessageSection
              ActiveMessage={ActiveMessage}
              handleMemoApproval={handleMemoApproval}
              handleMemoDecline={handleMemoDecline}
              loggedInUser={LoggedInUser}
              openCatg={openCatg}
            />
          ) : (
            <GridMemoSection Categories={Categories} activeCatg={activeCatg} />
          )}
        </>
      ) : (
        /* second section of the grid */
        <>
          <GridSideBarSection
            Categories={Categories}
            activeCatg={activeCatg}
            handlecCatgClick={handlecCatgClick}
            handleNewMemoMOdal={handleNewMemoMOdal}
            handleLogOut={handleLogOut}
          />
          <GridMemoSection Categories={Categories} activeCatg={activeCatg} />
          <GridMemoMessageSection
            ActiveMessage={ActiveMessage}
            handleMemoApproval={handleMemoApproval}
            handleMemoDecline={handleMemoDecline}
            loggedInUser={LoggedInUser}
            openCatg={openCatg}
          />
        </>
      )}

      {/* New Memo */}
      {newMemoModalOpen && (
        <NewMemoModal setNewMessageModalOpen={setNewMessageModalOpen} />
      )}

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default MainPage;
