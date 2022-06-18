import React from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "@react-hook/window-size";

const AddStock = () => {
  const [width, height] = useWindowSize();
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-[#EDEDED] pt-20 pr-12">
      <div className={`grid grid-cols-12 ${width < 1280 ? "ml-7" : "ml-72"}`}>
        <h1 className="text-left text-2xl font-medium col-span-12 font-Poppins text-[#1E293B] mb-6">
          Add Stock
        </h1>
        <div className="col-span-12 grid grid-cols-12 bg-white pr-16 pl-12 text-left font-Poppins pt-9">
          <div className="col-span-12 flex flex-col mb-6">
            <label htmlFor="name">Fruit Name</label>
            <input
              type="text"
              className="outline-none border-none h-9 bg-[#EDEDED] rounded-sm mt-2"
            />
          </div>
          <div className="col-span-12 flex flex-col mb-6">
            <label htmlFor="name">Stock</label>
            <input
              type="text"
              className="outline-none border-none h-9 bg-[#EDEDED] rounded-sm mt-2"
            />
          </div>
          <div className="col-span-12 flex flex-col mb-6">
            <label htmlFor="name">Price</label>
            <input
              type="text"
              className="outline-none border-none h-9 bg-[#EDEDED] rounded-sm mt-2"
            />
          </div>

          <div className="flex flex-row items-center col-span-12 gap-6">
            <Link
              to="/inventory"
              className="w-32 h-8 bg-[#FA5454] mb-6 rounded-[4px] text-white flex items-center justify-center"
            >
              Back
            </Link>
            <button
              type="submit"
              className="w-32 h-8 bg-[#1E293B] mb-6 rounded-[4px] text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
