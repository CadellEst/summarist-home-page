import React from "react";
import {logo} from "../../Assets/image.png";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { BsPen } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

export default function UserNav() {
  return (
    <>
      <div className="fixed flex flex-col bg-slate-50 min-w-[200px] h-full ">
        <div>
          <img src={logo} alt="https://www.magikusstudios.com/" className="w-10" />
        </div>
        <div className="flex flex-col p-4">
          <div className="flex flex-row items-center">
            <IoHomeOutline className="text-2xl" />
            <a href="/for-you" className="p-2 text-md">
              For You
            </a>
          </div>
          <div className="flex flex-row items-center">
            <CiBookmark className="text-2xl" />
            <a href="/for-you" className="p-2 text-md">
              My Library
            </a>
          </div>
          <div className="flex flex-row items-center">
            <BsPen className="text-2xl" />
            <a href="/for-you" className="p-2 text-md">
              Highlights
            </a>
          </div>
          <div className="flex flex-row items-center">
            <TfiSearch className="text-2xl" />
            <a href="/for-you" className="p-2 text-md">
              Search
            </a>
          </div>
        </div>

        <div className="flex flex-col p-4">
          <div className="flex flex-row items-center">
            <IoSettingsOutline className="text-2xl" />
            <a href="" className="p-2 text-md">
              Settings
            </a>
          </div>
          <div className="flex flex-row items-center">
            <IoIosHelpCircleOutline className="text-2xl" />
            <a href="" className="p-2 text-md">
              Help & Support
            </a>
          </div>
          <div className="flex flex-row items-center">
            <IoIosLogIn className="text-2xl" />
            <a href="" className="p-2 text-md">
              Login
            </a>
          </div>
          <div className="flex flex-row items-center">
            <IoIosLogOut className="text-2xl" />
            <a href="" className="p-2 text-md">
              Logout
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
