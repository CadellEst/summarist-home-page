import React from "react";
import Logo from "../../Assets/logo.png";
import Image from "next/image";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { BsPen } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";

export default function UserNav(auth) {
  return (
    <div className="bg-slate-100 w-[200px] min-w-[200px] fixed top-0 left-0 h-lvh z-50 ">
      <div className="relative flex flex-col px-4 h-screen ">
        <div className="w-fit ">
          <Image className="max-w-40 pt-5 pb-8 fixed" src={Logo} />
        </div>
        <div className="flex flex-col fixed py-8 translate-y-16">
          <div className="flex flex-row items-center py-3">
            <IoHomeOutline className="text-2xl" />
            <a href="/for-you" className="p-2 text-md">
              For You
            </a>
          </div>
          <div className="flex flex-row items-center py-3">
            <CiBookmark className="text-2xl" />
            <a href="/for-you" className="p-2 text-md">
              My Library
            </a>
          </div>
          <div className="flex flex-row items-center py-3">
            <BsPen className="text-2xl" />
            <a href="/for-you" className="p-2 text-md">
              Highlights
            </a>
          </div>
          <div className="flex flex-row items-center py-3">
            <TfiSearch className="text-2xl" />
            <a href="/for-you" className="p-2 text-md">
              Search
            </a>
          </div>
        </div>

        <div className="flex flex-col py-8 fixed bottom-0">
          <div className="flex flex-row items-center py-3">
            <IoSettingsOutline className="text-2xl" />
            <a href="" className="p-2 text-md">
              Settings
            </a>
          </div>
          <div className="flex flex-row items-center py-3">
            <IoIosHelpCircleOutline className="text-2xl" />
            <a href="" className="p-2 text-md">
              Help & Support
            </a>
          </div>
          {!auth ? (
            <div className="flex flex-row items-center py-3">
              <IoIosLogIn className="text-2xl" />
              <a href="" className="p-2 text-md">
                Login
              </a>
            </div>
          ) : (
            <div className="flex flex-row items-center py-3">
              <IoIosLogOut className="text-2xl" />
              <a href="" className="p-2 text-md" onClick={null}>
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
