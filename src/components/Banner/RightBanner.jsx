import React from "react";
import { bannerImg } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div
        className="w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] absolute bottom-0 bg-gradient-to-r 
            from-[#1e2024] to-[#202327] shadow-shadowAll flex justify-center 
            items-center rounded-t-lg"></div>
    </div>
  );
};

export default RightBanner;
