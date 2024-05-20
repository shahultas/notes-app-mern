import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { FaPlus } from "react-icons/fa";
import "./page.css";
import Card from "./components/Cards/Card";

const page = () => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col bg-white text-black overflow-x-hidden gap-20">
        <Navbar />
        <div className="flex flex-col flex-1 items-center mt-32">
          <div className="flex flex-row items-center justify-between px-4 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
        </div>

        {/* Card section */}
        <div className="w-full flex items-center justify-center">
          <Card />
        </div>

        {/* bottom button */}
        <div className="flex flex-col h-full w-full justify-end items-end">
          <button className="plus-btn bg-green-300 before:bg-green-600 shadow-lg shadow-gray-300 fixed">
            <FaPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
