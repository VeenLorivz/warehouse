import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import transactionData from "../../utlis/data/transactionData";
import Topbar from "../../components/Topbar/Topbar";
import { useWindowSize } from "@react-hook/window-size";
import { MdOutlineInventory2 } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import Order from "../../assets/img/order.png";
import Purchase from "../../assets/img/purchase.png";

import "./dashboard.css";

const Dashboard = () => {
  const [width, height] = useWindowSize();
  const [sidebar, setSidebar] = useState();

  return (
    <div className="bg-[#EDEDED] w-screen h-screen pt-20 overflow-x-hidden">
      <div
        className={`grid grid-cols-12 ${width < 1280 ? "ml-7" : "ml-72"} ${
          width < 1280 ? "pr-7" : "pr-10"
        }`}
      >
        <h1 className="text-3xl font-Poppins font-normal mb-8">Dashboard</h1>
        <div className="col-span-12 grid grid-cols-12 mb-8 gap-8 ">
          <div
            className={`${
              width < 380
                ? "col-span-11"
                : width < 640
                ? "col-span-12"
                : width < 1280
                ? "col-span-6"
                : "col-span-3"
            } shadow-lg rounded-md bg-white pl-5 pt-3 pr-3 pb-5`}
          >
            <div className="flex flex-row items-center w-full mb-5">
              <h2 className="text-4xl font-Roboto text-[#26D8FF] mt-2">22</h2>
              <div className="w-12 h-12 bg-[#fffdfd] shadow-lg rounded-full ml-auto flex items-center justify-center">
                <MdOutlineInventory2 className="text-2xl text-[#D2D2D2]" />
              </div>
            </div>
            <h2 className="text-left font-Poppins text-[#5F5F5F] text-base">
              Total Stock
            </h2>
          </div>
          <div
            className={`${
              width < 380
                ? "col-span-11"
                : width < 640
                ? "col-span-12"
                : width < 1280
                ? "col-span-6"
                : "col-span-3"
            } shadow-lg rounded-md bg-white pl-5 pt-3 pr-3 pb-5`}
          >
            <div className="flex flex-row items-center w-full mb-5">
              <h2 className="text-4xl font-Roboto text-[#857BFA] mt-2">10</h2>
              <div className="w-12 h-12 bg-[#fffdfd] shadow-lg rounded-full ml-auto flex items-center justify-center">
                <BsPeople className="text-2xl text-[#D2D2D2]" />
              </div>
            </div>
            <h2 className="text-left font-Poppins text-[#5F5F5F] text-base">
              Total Customers
            </h2>
          </div>
          <div
            className={`${
              width < 380
                ? "col-span-11"
                : width < 640
                ? "col-span-12"
                : width < 1280
                ? "col-span-6"
                : "col-span-3"
            } shadow-lg rounded-md bg-white pl-5 pt-3 pr-3 pb-5`}
          >
            <div className="flex flex-row items-center w-full mb-5">
              <h2 className="text-xl font-Roboto text-[#47CA55] mt-2 ml-2">
                500.000
              </h2>
              <div className="w-12 h-12 bg-[#fffdfd] shadow-lg rounded-full ml-auto flex items-center justify-center">
                <img src={Order} alt="order" className="w-6 h-6" />
              </div>
            </div>
            <h2 className="text-left font-Poppins text-[#5F5F5F] text-base">
              Total Orders
            </h2>
          </div>
          <div
            className={`${
              width < 380
                ? "col-span-11"
                : width < 640
                ? "col-span-12"
                : width < 1280
                ? "col-span-6"
                : "col-span-3"
            } shadow-lg rounded-md bg-white pl-5 pt-3 pr-3 pb-5`}
          >
            <div className="flex flex-row items-center w-full mb-5">
              <h2 className="text-xl font-Roboto text-[#FF0000] mt-2 ml-2">
                200.000
              </h2>
              <div className="w-12 h-12 bg-[#fffdfd] shadow-lg rounded-full ml-auto flex items-center justify-center">
                <img src={Purchase} alt="order" className="w-6 h-6" />
              </div>
            </div>
            <h2 className="text-left font-Poppins text-[#5F5F5F] text-base $wi">
              Total Purchase
            </h2>
          </div>
        </div>
        <h2 className="text-2xl font-Poppins mb-5 font-normal">Transaction</h2>
        <div className="col-span-12 grid grid-cols-12 overflow-x-auto">
          <table className="col-span-12 w-auto font-Inter mb-5 shadow-lg whitespace-nowrap ">
            <thead className="bg-[#1E293B] text-white rounded-tr-md rounded-tl-md">
              <tr className="rounded-tr-md rounded-tl-md">
                <th className="rounded-tl-md">Fruit Name</th>
                <th>Status</th>
                <th>Price</th>
                <th>Quantity</th>
                <th className="rounded-tr-md">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {transactionData.map((data, i) => {
                return (
                  <tr>
                    <td>{data.name}</td>
                    <td>
                      <div
                        className={`w-max px-2 py-3 flex items-center h-5 ${
                          data.status === "Order"
                            ? "bg-[#FF7070]"
                            : "bg-[#47CA55]"
                        }  rounded-md text-white`}
                      >
                        {data.status}
                      </div>
                    </td>
                    <td>{data.price}</td>
                    <td>{data.quantity}</td>
                    <td>{data.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
