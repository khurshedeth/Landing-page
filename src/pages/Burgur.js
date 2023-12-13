import React from "react";
import Ai from "../assests/ai.png";

function Burgur() {
  return (
    <div className="">
      <div className=" grid grid-cols-2 items-center text-center">
        <div className=" bg-pink-600 opacity-100">
          <img src={Ai} alt="errr" className=" mix-blend-multiply w-full h-[44rem]" />
        </div>
        <div className=" w-[80%] h-48 mx-auto  text-right">
          <h1 className=" font-bold text-4xl text-[#1F1F1F]">
            GIVE A BOOST TO YOUR MENTAL <br />
            HEALTH
          </h1>
          <p className=" font-thin text-2xl text-[#1F1F1F]">
            Wellness lies in everyones hand!
          </p>
          <button className=" bg-[#490082] font-bold text-white text-2xl w-56 px-4 py-4 mt-10">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Burgur;
