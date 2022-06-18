import React, { useState } from "react";
import LoginIllustration from "../../assets/img/login.jpg";
import { useWindowSize } from "@react-hook/window-size";
import { IoMailOutline, IoLockClosed } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const account = { email: "admin@gmail.com", password: "12345" };
  const [cred, setCred] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [width, height] = useWindowSize();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    cred.email === account.email && cred.password === account.password
      ? navigate("/dashboard")
      : setError(true);
  };

  return width < 1000 ? (
    <div className="w-screen h-screen grid grid-cols-12 overflow-x-hidden  place-content-center place-items-center">
      <form
        className={`col-span-12 relative font-Poppins flex flex-col justify-start sm:border sm:border-slate-800 p-5 pt-16 sm:p-16 rounded-md`}
        onSubmit={handleSubmit}
      >
        <div className="absolute w-20 h-20 -translate-x-1/2 -top-10 inset-x-1/2 bg-[#1E293B] flex items-center justify-center rounded-full">
          <BsStack className="text-[#EEE] text-3xl" />
        </div>
        <h2 className="text-center text-[24px] font-bold text-[#333333] mb-1">
          Hello Again!
        </h2>
        <h3 className="text-center font-normal text-lg mb-9">Welcome Back</h3>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Email Address"
            className="border-none outline-none w-full h-14 shadow-md rounded-full pl-16"
            value={cred.email}
            onChange={(e) => setCred({ ...cred, email: e.target.value })}
          />
          <IoMailOutline className="absolute left-7 text-2xl text-[#333333] opacity-30 top-4" />
        </div>
        <div className="relative mb-6">
          <input
            type="password"
            placeholder="Password"
            className="border-none outline-none w-full h-14 shadow-md rounded-full pl-16"
            value={cred.password}
            onChange={(e) => setCred({ ...cred, password: e.target.value })}
          />
          <IoLockClosed className="absolute left-7 text-2xl text-[#333333] opacity-30 top-4" />
        </div>
        <div className="flex flex-row items-center ml-8">
          <input type="checkbox" className="mr-2" id="check" />
          <label
            className="text-base text-[#555555] font-normal"
            htmlFor="check"
          >
            Remember Me
          </label>
        </div>
        {error && <p className="text-red-500 mt-2">Wrong Email or Password</p>}
        <button
          type="submit"
          className="bg-[#1E293B] text-white h-16 w-full rounded-full mb-5 mt-6"
        >
          Login
        </button>
        <p className="text-base opacity-70 cursor-pointer">Forgot Password</p>
      </form>
    </div>
  ) : (
    <div className="w-screen h-screen grid grid-cols-12 pl-20 overflow-x-hidden pr-12">
      <div
        className={`${
          width < 1000 ? "hidden" : width < 1280 ? "col-span-6" : "col-span-7"
        } self-center`}
      >
        <img src={LoginIllustration} alt="" />
      </div>
      <form
        className={`${
          width < 1280 ? "col-span-6" : "col-span-5"
        } mt-36 font-Poppins flex flex-col justify-start pl-12 self-center`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-left text-[24px] font-bold text-[#333333] mb-1">
          Hello Again!
        </h2>
        <h3 className="text-left font-normal text-lg mb-9">Welcome Back</h3>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Email Address"
            className="border-none outline-none w-full h-14 shadow-md rounded-full pl-16"
            value={cred.email}
            onChange={(e) => setCred({ ...cred, email: e.target.value })}
          />
          <IoMailOutline className="absolute left-7 text-2xl text-[#333333] opacity-30 top-4" />
        </div>
        <div className="relative mb-6">
          <input
            type="password"
            placeholder="Password"
            className="border-none outline-none w-full h-14 shadow-md rounded-full pl-16"
            value={cred.password}
            onChange={(e) => setCred({ ...cred, password: e.target.value })}
          />
          <IoLockClosed className="absolute left-7 text-2xl text-[#333333] opacity-30 top-4" />
        </div>
        <div className="flex flex-row items-center ml-8">
          <input type="checkbox" className="mr-2" id="check" />
          <label
            className="text-base text-[#555555] font-normal"
            htmlFor="check"
          >
            Remember Me
          </label>
        </div>
        {error && <p className="text-red-500 mt-2">Wrong Email or Password</p>}
        <button
          type="submit"
          className="bg-[#1E293B] text-white h-16 w-full rounded-full mb-5 mt-6"
        >
          Login
        </button>
        <p className="text-base opacity-70 cursor-pointer">Forgot Password</p>
      </form>
    </div>
  );
};

export default Login;
