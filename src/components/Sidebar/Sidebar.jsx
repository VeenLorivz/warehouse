import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { BsStack, BsFillHouseFill, BsFillPeopleFill } from "react-icons/bs";
import { MdInventory, MdLocalShipping } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";

const Sidebar = ({ sidebar, setSidebar }) => {
  const { pathname } = useLocation();
  const ref = useRef(null);
  const [splitPath, setSplitPath] = useState();
  const [width, height] = useWindowSize();

  useEffect(() => {
    setSplitPath(pathname.split("/"));
  }, [pathname]);

  useEffect(() => {
    width >= 1280 ? setSidebar(true) : setSidebar(false);
  }, [width]);

  useEffect(() => {
    document.addEventListener("mousedown", Clickout);
    return () => {
      document.removeEventListener("mousedown", Clickout);
    };
  }, [width < 1280]);

  const Clickout = (e) => {
    width < 1280 &&
      ref.current &&
      !ref.current.contains(e.target) &&
      setSidebar(false);
  };

  return width < 1280 ? (
    <motion.div
      className="w-60 fixed left-0 top-0 bottom-0 bg-[#1E293B] z-20"
      animate={{
        left: sidebar
          ? "0"
          : width < 640
          ? "-70%"
          : width < 1000
          ? "-39%"
          : width < 1280 && width > 1200
          ? "-20%"
          : "-85%",
      }}
      initial={{ left: sidebar ? "-85%" : "0" }}
      transition={{ duration: 0.5, easings: [0.3, 0.3] }}
      ref={ref}
    >
      <div className="ml-7 text-[#D2D2D2] flex flex-row items-center mt-5">
        <BsStack className="mr-3 text-3xl" />
        <h1 className="text-xl font-Poppins">Warehouse</h1>
      </div>
      {splitPath && (
        <div className="ml-12 text-[#AFAFAF] mt-16 font-Inter">
          <Link
            className={`flex flex-row items-center mb-6 ${
              splitPath[1] === "dashboard" ? "text-white" : "text-[#AFAFAF]"
            } hover:text-[#FFFFFF]`}
            to="/dashboard"
            onClick={() => width < 1280 && setSidebar(false)}
          >
            <BsFillHouseFill className="text-2xl mr-2" />
            <h3 className="text-base">Dashboard</h3>
          </Link>
          <Link
            className={`flex flex-row ${
              splitPath[1] === "purchase" ? "text-white" : "text-[#AFAFAF]"
            } items-center mb-6 hover:text-[#FFFFFF]`}
            to="/purchase"
            onClick={() => width < 1280 && setSidebar(false)}
          >
            <CgShoppingBag className="text-2xl mr-2" />
            <h3 className="text-base">Purchase</h3>
          </Link>
          <Link
            className={`flex flex-row ${
              splitPath[1] === "orders" ? "text-white" : "text-[#AFAFAF]"
            } items-center mb-6 hover:text-[#FFFFFF]`}
            to="/orders"
            onClick={() => width < 1280 && setSidebar(false)}
          >
            <MdLocalShipping className="text-2xl mr-2" />
            <h3 className="text-base">Orders</h3>
          </Link>
          <Link
            className={`flex flex-row ${
              splitPath[1] === "inventory" ? "text-white" : "text-[#AFAFAF]"
            } items-center mb-6 hover:text-[#FFFFFF]`}
            to="/inventory"
            onClick={() => width < 1280 && setSidebar(false)}
          >
            <MdInventory className="text-2xl mr-2" />
            <h3 className="text-base">Inventory</h3>
          </Link>
        </div>
      )}
    </motion.div>
  ) : (
    <div className="w-60 fixed left-0 top-0 bottom-0 bg-[#1E293B] z-20">
      <div className="ml-7 text-[#D2D2D2] flex flex-row items-center mt-5">
        <BsStack className="mr-3 text-3xl" />
        <h1 className="text-xl font-Poppins">Warehouse</h1>
      </div>
      {splitPath && (
        <div className="ml-12 text-[#AFAFAF] mt-16 font-Inter">
          <Link
            className={`flex flex-row items-center mb-6 ${
              splitPath[1] === "dashboard" ? "text-white" : "text-[#AFAFAF]"
            } hover:text-[#FFFFFF]`}
            to="/dashboard"
            onClick={() => width < 1280 && setSidebar(false)}
          >
            <BsFillHouseFill className="text-2xl mr-2" />
            <h3 className="text-base">Dashboard</h3>
          </Link>
          <Link
            className={`flex flex-row ${
              splitPath[1] === "purchase" ? "text-white" : "text-[#AFAFAF]"
            } items-center mb-6 hover:text-[#FFFFFF]`}
            to="/purchase"
            onClick={() => width < 1280 && setSidebar(false)}
          >
            <CgShoppingBag className="text-2xl mr-2" />
            <h3 className="text-base">Purchase</h3>
          </Link>
          <Link
            className={`flex flex-row ${
              splitPath[1] === "orders" ? "text-white" : "text-[#AFAFAF]"
            } items-center mb-6 hover:text-[#FFFFFF]`}
            to="/orders"
            onClick={() => width < 1280 && setSidebar(false)}
          >
            <MdLocalShipping className="text-2xl mr-2" />
            <h3 className="text-base">Orders</h3>
          </Link>
          <Link
            className={`flex flex-row ${
              splitPath[1] === "inventory" ? "text-white" : "text-[#AFAFAF]"
            } items-center mb-6 hover:text-[#FFFFFF]`}
            to="/inventory"
            onClick={() => width < 1280 && setSidebar(false)}
          >
            <MdInventory className="text-2xl mr-2" />
            <h3 className="text-base">Inventory</h3>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
