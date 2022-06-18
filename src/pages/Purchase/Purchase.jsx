import React, { useState } from "react";
import purchaseData from "../../utlis/data/purchaseData";
import { useWindowSize } from "@react-hook/window-size";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";

import "./purchase.css";
import { Link } from "react-router-dom";

const Purchase = () => {
  const [drop, setDrop] = useState({
    sort: false,
    row: { index: null, isDrop: false },
  });
  const [sidebar, setSidebar] = useState();
  const [width, height] = useWindowSize();
  const [search, setSearch] = useState("");

  const [purchase, setPurchase] = useState(purchaseData);

  const handleSearch = () => {
    setPurchase(purchase.filter((p) => p.name === search));
    console.log("test");
  };

  return (
    <div className="w-screen h-screen bg-[#EDEDED] overflow-x-hidden pt-20 pr-10">
      <div className={`grid grid-cols-12 ${width < 1280 ? "ml-7" : "ml-72"}`}>
        <h2 className="text-2xl font-Poppins font-medium col-span-12 text-left mb-6">
          Latest Purchase
        </h2>
        <div className="grid grid-cols-12 col-span-12 bg-white pt-6 pl-6 pb-4 pr-5 items-center">
          <div
            className={`grid grid-cols-12 ${
              width < 640
                ? "col-span-9"
                : width < 768
                ? "col-span-10"
                : "col-span-11"
            } relative`}
          >
            <input
              type="text"
              className="h-10 bg-[#F7F7FC] col-span-12 outline-none border-none rounded-lg pl-12 font-Mulish"
              placeholder="Search Here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <AiOutlineSearch className="w-5 h-5 text-[#9A9AB0] absolute left-4 top-3" />
          </div>
          <div
            className={`${
              width < 640
                ? "col-span-3"
                : width < 768
                ? "col-span-2"
                : "col-span-1"
            } `}
          >
            <div className="flex flex-row items-center justify-end relative">
              <BiFilter
                className="text-[#9A9AB0] text-2xl hover:text-black cursor-pointer"
                onClick={() => setDrop({ ...drop, sort: !drop.sort })}
              />
              <Link to="/purchase/add">
                <IoAddOutline className="text-[#9A9AB0] text-2xl hover:text-black cursor-pointer ml-3" />
              </Link>
              <div
                className={`w-max h-auto absolute right-12 -bottom-24 bg-white font-Inter z-20 text-left border border-slate-300 rounded-sm ${
                  !drop.sort && "hidden"
                }`}
              >
                <p className="cursor-pointer hover:text-white hover:bg-[#1E293B] px-5 py-1">
                  By Price
                </p>

                <p className="cursor-pointer hover:text-white hover:bg-[#1E293B] px-5 py-1">
                  By Quantity
                </p>

                <p className="cursor-pointer hover:text-white hover:bg-[#1E293B] px-5 py-1">
                  By Amount
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-12 overflow-x-auto">
            <table className="col-span-12 font-Inter mt-4 whitespace-nowrap overflow-x-hidden">
              <thead className="bg-[#1E293B] text-white rounded-tr-md rounded-tl-md">
                <tr className="rounded-tr-md rounded-tl-md">
                  <th className="rounded-tl-md">Fruit Name</th>
                  <th>Supplier</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {purchase &&
                  purchase.map((data, i) => {
                    return (
                      <tr className="row-data-purchase relative">
                        <td>{data.name}</td>
                        <td>{data.supplier}</td>
                        <td>{data.price}</td>
                        <td>{data.quantity}</td>
                        <td>
                          <div className="flex items-center">
                            <p>{data.amount}</p>
                            <HiOutlineDotsVertical
                              className="three-dots absolute right-5 hidden cursor-pointer"
                              onClick={() =>
                                setDrop({
                                  ...drop,
                                  row: {
                                    index: drop.row.index === i ? null : i,
                                  },
                                })
                              }
                            />
                            {i === drop.row.index && (
                              <div
                                className={`max-w-max  h-auto absolute right-3 top-8 bg-white z-20 border border-slate-300`}
                              >
                                <div className="cursor-pointer hover:bg-[#1E293B] px-5 py-2 hover:text-white">
                                  Update Data
                                </div>
                                <div className="cursor-pointer hover:bg-[#1E293B] px-5 py-2 hover:text-white">
                                  Delete Data
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
