import React from "react";
import logo from "../assests/logo (9) 2 (1).png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { LuYoutube } from "react-icons/lu";

function Footer() {
  return (
    <div className=" py-2 h-56 flex flex-col justify-center gap-5 mx-16">
      <div className=" flex justify-between items-center">
        <div>
          <img src={logo} alt="error" />
        </div>
        <div className=" flex gap-8 justify-center items-center text-lg text-[#490082] font-medium">
          <a href="/">Aboutus</a>
          <a href="/">Products</a>
          <a href="/">Blogs</a>
          <a href="/">Contact Us</a>
        </div>
        <div className=" flex justify-center items-center gap-4 text-2xl text-[#490082]">
          <FaFacebookF />
          <IoLogoInstagram />
          <LuYoutube />
        </div>
      </div>
      <div className=" flex justify-between items-center text-gray-500">
        <div className=" flex gap-8">
          <p>Terms & Privacy Policy</p>
          <p>Disclaimer</p>
          <p>Shipping Policy</p>
          <p>Refund Policy</p>
        </div>
        <div className=" flex justify-center items-center gap-8 ">
        <p>©2023 Victous - All rights reserved.</p>
        <p>Designed & Developed by</p>
        <p>Md Khurshed Alam</p>

        </div>
      </div>
    </div>
  );
}

export default Footer;
