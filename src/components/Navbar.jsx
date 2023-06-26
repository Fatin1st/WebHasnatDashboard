/***************************************************************************************
 *                                                                                      *
 *                                CODE SHOWCASE LICENSE                                 *
 *                                                                                      *
 ***************************************************************************************/

/* NOTICE: This license applies to the code contained within this file and all the 
   accompanying files in the repository. By accessing or using the code, you agree to 
   be bound by the terms and conditions of this license. If you do not agree to these 
   terms and conditions, do not copy, modify, distribute, or otherwise use the code. */

/* DISCLAIMER: The code provided in this repository is for showcase purposes only. 
   It is owned by Fatin Hasnat and is protected by copyright laws. The code is not 
   intended for use in any production environment or for any commercial purposes. 
   The code is provided "as is," without warranty of any kind, express or implied, 
   including but not limited to the warranties of merchantability, fitness for a 
   particular purpose, and non-infringement. In no event shall Fatin Hasnat be liable 
   for any claim, damages, or other liability arising from the use or distribution 
   of the code. */

/* WARNING: Any unauthorized use, reproduction, or distribution of the code contained 
   in this repository is strictly prohibited. Fatin Hasnat reserves all rights to 
   take appropriate legal action against individuals or entities found to be in 
   violation of this license. */

/**************************************************************************************/

import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/fatin_avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    setScreenSize,
    currentColor,
    cartState,
    setCartState,
    chatState,
    setChatState,
    notificationState,
    setNotificationState,
    userProfileState,
    setUserProfileState,
  } = useStateContext();

  // Screensize Finder Func starts
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Screensize Finder Func ends

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title={"Menu"}
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        {cartState && <Cart />}
        {chatState && <Chat />}
        {notificationState && <Notification />}
        {userProfileState && <UserProfile />}

        <NavButton
          title={"Cart"}
          customFunc={() => setCartState(true)}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title={"Chat"}
          dotColor={"#03C9D7"}
          customFunc={() => setChatState(true)}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title={"Notification"}
          dotColor={"#03C9D7"}
          customFunc={() => setNotificationState(true)}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="ml-2 flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => setUserProfileState(true)}
          >
            <img src={avatar} className="rounded-full w-8 h-8" />

            <p className="flex">
              <span className="text-gray-400 text-base">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-base">
                Fatin
              </span>
              <MdKeyboardArrowDown className="text-gray-400 text-14 ml-2 mt-1" />
            </p>
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;
