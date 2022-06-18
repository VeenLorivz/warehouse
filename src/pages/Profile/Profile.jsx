import React from "react";
import { useWindowSize } from "@react-hook/window-size";
import Avatar from "../../assets/img/avatar.png";
import { Link } from "react-router-dom";
import { AiOutlineCamera } from "react-icons/ai";

const Profile = () => {
  const [width, height] = useWindowSize();
  return (
    <div className="w-screen h-screen bg-[#EDEDED] overflow-x-hidden pt-16">
      <div className={`grid grid-cols-12 ${width < 1280 ? "ml-7" : "ml-72"}`}>
        <h1 className="text-left text-2xl leading-9 font-medium font-Poppins col-span-12 mb-5">
          My Profile
        </h1>
        <div className="bg-white col-span-12 grid grid-cols-12 pt-8 pl-12 font-Poppins pr-14">
          <div className="relative w-[135px] h-[135px] mb-6">
            <img
              src={Avatar}
              alt=""
              className="max-w-[135px] max-h-[135px] object-cover rounded-full border border-slate-300 "
            />
            <span className="w-8 h-8 rounded-full bg-[#1E293B] absolute right-3 bottom-0 flex items-center justify-center cursor-pointer">
              <AiOutlineCamera className="text-[#AFAFAF]" />
            </span>
          </div>
          <div className="col-span-12 flex flex-col text-left mb-6">
            <label htmlFor="username" className="text-base mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="admin"
              className="outline-none border-none h-9 bg-[#EDEDED] rounded-sm mt-2 pl-7"
            />
          </div>
          <div className="col-span-12 flex flex-col text-left mb-6">
            <label htmlFor="username" className="text-base mb-2">
              email
            </label>
            <input
              type="email"
              placeholder="admin@gmail.com"
              className="outline-none border-none h-9 bg-[#EDEDED] rounded-sm mt-2 pl-7"
            />
          </div>
          <div className="col-span-12 flex flex-col text-left mb-6">
            <label htmlFor="username" className="text-base mb-2">
              password
            </label>
            <input
              type="text"
              placeholder="*******"
              className="outline-none border-none h-9 bg-[#EDEDED] rounded-sm mt-2 pl-7"
            />
          </div>
          <div className="flex flex-row items-center col-span-12 gap-6">
            <Link
              to="/dashboard"
              className="w-32 h-8 bg-[#FA5454] mb-6 rounded-[4px] text-white flex items-center justify-center"
            >
              Back
            </Link>
            <button
              type="submit"
              className="w-32 h-8 bg-[#1E293B] mb-6 rounded-[4px] text-white"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
