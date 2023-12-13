import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";


function Hero() {
  return (
    <div className=" flex justify-start items-center text-white h-screen">
      <div className=" w-[90%] flex flex-col mx-auto">
        <div className="mb-4">
          <p className=" font-thin text-xl text-[#FFFFFF] opacity-40 ">
            01.PRODUCT NAME
          </p>
          <h1 className=" text-4xl font-bold">SCIENCE OF TRANSFORMING LIVES</h1>
        </div>

        <div className=" flex justify-between items-center mt-7">
          <button className=" bg-[#490082] font-bold text-white text-2xl px-4 py-4">Know More</button>
          <div className=" flex justify-between space-x-6 text-3xl">
            <button className="bg-[#490082] font-bol px-4 py-4 text-center"><IoIosArrowRoundForward/></button>
            <button className="bg-[#490082] font-bol px-4 py-4 text-center"><IoIosArrowRoundBack/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
