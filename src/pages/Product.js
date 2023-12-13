import React from "react";
import Pic from "../assests/image 1 (2).png";
import "../Product.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function Product() {
  return (
    <div className=" py-2 bg-[#490082] relative">
      <div className=" h-screen w-[90%] grid grid-cols-2 mx-auto items-center text-center relative">
        <div className=" flex flex-col items-start justify-end relative left-36 top-10 text-justify z-10">
          <p className=" font-thin text-xl text-[#FFFFFF] opacity-40 mb-0 ">
            FEATURED PRODUCTS
          </p>
          <h1 className=" font-bold text-[40px] text-white">
            LUMINESCE Cellular Rejuvenation
          </h1>
          <h1 className="font-bold text-[40px] text-white leading-10">Serum</h1>
          <p className="font-thin text-xl text-[#FFFFFF] opacity-40 mt-12">
            Rs.6,999
          </p>

          <button className="bg-white mt-16 w-36 py-4 px-2 font-bold">
            BUY NOW
          </button>
        </div>
        <div className="image-container bg-[#490082] inline-block relative">
          <img
            src={Pic}
            alt="rror"
            className="colorized-image mix-blend-multiply h-screen"
          />
          <div className=" flex justify-end items-center space-x-2 inset-0 absolute mt-80 w-full">
            <button className="bg-white font-bol px-6 py-6 text-center">
              <IoIosArrowRoundForward />
            </button>
            <button className="bg-white font-bol px-6 py-6 text-center">
              <IoIosArrowRoundBack />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
