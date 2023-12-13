import React from "react";
import apple from "../assests/shape 1 (1).png";

function Story() {
  return ( 
    <div className=" py-4">
      <div className="  w-[90%] mx-auto md:grid grid-cols-2 items-center text-center">
        <div>
          <img src={apple} alt="error" />
        </div>
        <div className=" flex flex-col text-start justify-center"> 
          <p className=" text-[#1F1F1F] font-thin text-2xl">ABOUT US</p>
          <h1 className=" text-[#1F1F1F] font-bold text-[40px]">OUR STORY</h1>
          <p className=" font-normal text-base mt-8">
            The <span className=" text-[#490082] font-medium text-base cursor-pointer">VICTOUS Mission</span> Family creates positive impact in
            the world by helping people look and feel young, while empowering
            each other to unleash our potential
          </p>
          <p className=" mt-8">
            In 2020, <span className=" text-[#490082] font-medium text-base cursor-pointer">VICTOUS Mission</span> experienced double-digit growth across world
            regions, ranging from 12% to 42%. This growth was achieved despite
            the COVID-19 pandemic forcing the company to virtually stream
            hundreds of events and move approximately 775 employees to remote
            work. Jeunesse has been recognized with more than 30 growth-related
            awards, including five consecutive years ranking on the Inc. 5000
            Fastest Growing Companies in America and ranking among the Top 20
            companies on the Direct Selling News Global 100 list since 2016.
          </p>
          <button className=" bg-[#490082] font-bold text-white text-2xl px-4 py-4 w-56 mt-5">Know More</button>

        </div>
      </div>
    </div>
  );
}

export default Story;
