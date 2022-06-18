import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useWindowSize } from "@react-hook/window-size";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Avatar from "../../assets/img/avatar.png";
import { Link } from "react-router-dom";

const Topbar = ({ setSidebar }) => {
  const [drop, setDrop] = useState(false);
  const [width, height] = useWindowSize();

  return (
    <div className="fixed top-0 right-0 left-0 h-12 bg-white z-10 flex items-center">
      <BiMenu
        className="absolute text-2xl ml-7"
        onClick={() => setSidebar(true)}
      />
      <div className="flex flex-row items-center absolute right-7 ">
        <div
          className="relative flex flex-row items-center cursor-pointer"
          onClick={() => setDrop(!drop)}
        >
          <img
            src={Avatar}
            className="w-[25px] h-[25px] object-cover  border rounded-full"
            alt="Avatar Icon"
          />
          <p
            className={`text-base font-Poppins ml-2 ${
              width < 640 ? "hidden" : "block"
            }`}
          >
            My Account
          </p>
          <RiArrowDropDownLine className="text-2xl " />
          <div
            className={`w-36 h-auto absolute -bottom-[90px] right-2 font-Poppins bg-white border border-gray-300 text-left ${
              drop ? "block" : "hidden"
            }`}
          >
            <Link
              className="pl-2 pb-2 pt-2 flex flex-row items-center  text-[#333] hover:bg-[#1E293B] hover:text-white"
              to="/profile"
            >
              <IoLogOutOutline />
              <p className="ml-2">My Profile</p>
            </Link>
            <hr className="m=" />
            <Link
              className="pl-2 flex flex-row items-center text-[#333] hover:bg-red-400 hover:text-white pb-2 pt-2"
              to="/"
            >
              <CgProfile />
              <p className="ml-2">Logout</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
