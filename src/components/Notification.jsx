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

import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Notification = () => {
  const { currentColor, setNotificationState } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">
            Notifications
          </p>
          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange-theme "
          >
            {" "}
            5 New
          </button>
        </div>
        <button
          type="button"
          onClick={() => setNotificationState(false)}
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="text-2xl p-2 hover:bg-light-gray hover:drop-shadow-xl transition duration-250 ease-in-out"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
