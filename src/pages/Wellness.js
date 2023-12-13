import React from "react";
import "../Wellness.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function Wellness() {
  return (
    <div className="well-background grayscale">
      <div className=" h-screen flex justify-center items-end text-white">
        <div className="w-[80%] h-60">
          <h1>STORY OF WELLNESS</h1>
          <div className=" flex justify-between items-center mt-7">
            <button className=" bg-[#490082] font-bold text-white text-2xl px-4 py-4">
              Know More
            </button>
            <div className=" flex justify-between space-x-6 text-3xl">
              <div className="filter-wrapper">
                <button className="bg-[#490082] font-bol px-4 py-4 text-center filter-icn">
                  <IoIosArrowRoundForward />
                </button>
                <button className="bg-[#490082] font-bol px-4 py-4 text-center filter-icn">
                  <IoIosArrowRoundBack />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wellness;
