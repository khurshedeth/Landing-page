import React from "react";
import "../Neuron.css";
import Mathew from "../assests/Image.png";
import Rating from "../assests/Rating Group.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function Neuron() {
  return (
    <div className="neuron-sec h-screen">
      <div className=" flex justify-center items-center h-full text-white">
        <div className="w-[80%]  h-80 flex justify-center flex-col items-center">
          <div className=" flex justify-end items-center gap-4">
            <img src={Mathew} alt="error" />

            <div className=" flex flex-col gap-2">
              <p>Mathew</p>
              <img src={Rating} alt="error" />
            </div>
          </div>
          <div className=" flex justify-center items-center text-center flex-col">
            <p className=" font-semibold text-2xl w-[880px]">
              “Very well products in this prices, where you will get full
              result. Very pleased with the purchase.”
            </p>
            <div className=" flex space-x-2 mt-10">
              <button className="bg-[#490082] font-bol px-4 py-4 text-center">
                <IoIosArrowRoundForward />
              </button>
              <button className="bg-[#490082] font-bol px-4 py-4 text-center">
                <IoIosArrowRoundBack />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Neuron;
