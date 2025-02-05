import React from "react";

const ResumeCard = ({ title, subTitle, des, src }) => {
  return (
    <section
    className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowAll
    flex flex-col bg-gradient-to-r from-bodyColors to-[#202327] group hover:bg-gradient-to-b
    hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={src}
          className="w-full object-cover duration-300"
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div className="w-full mt-5 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between flex-col">
              <h3 className="uppercase text-lg font-normal text-designColor">
                {title}
              </h3>
              <p
                className="capitalize text-xl mt-2 text-gray-400 
          group-hover:text-white duration-300">
                {subTitle}
              </p>
            </div>
            <p className="text-sm tracking-wide mt-3 group-hover:text-gray-100 duration-300">
              {des}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeCard;
