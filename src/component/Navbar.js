import React from "react";
import logo from "../assests/logo (9) 2 (1).png";
import { IoSearch } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";


function Navbar() {
  return (
    <div>
      <div className=" flex bg-white justify-evenly items-center">
        <div className="">
          <div className="logo">
            <img src={logo} alt="error" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 w-[70%]">
          <div className="flex gap-4 font-base text-xl  text-[#393939]">
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Product</a>
            <a href="/">Personal Care</a>
            <a href="/">Wellness</a>
            <a href="/">Legal</a>
          </div>
          <div className=" flex justify-between items-center  w-[20%]">
            <div className=" flex justify-center items-center gap-2">
              <div className="border-l-2 border-[#A9A9A9]  border-r-2">
                <IoSearch size={22} className=" ml-2 mr-2"/>
              </div>
              <div>
                <FaFacebookF size={22}/>
              </div>
              <div>
                <FaXTwitter size={22}/>
              </div>
              <div className=" border-r-2 border-[#A9A9A9]">
                <IoLogoInstagram size={22} className=" mr-2"/>
              </div>
              <HiShoppingCart size={22}/>
            </div>
            <div className="w-[10%] flex gap-4 ml-2">
              <button className="bg-white border border-black px-2 py-1 font-semibold">Genonogy</button>
              <button className="bg-[#490082] text-white px-6">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
