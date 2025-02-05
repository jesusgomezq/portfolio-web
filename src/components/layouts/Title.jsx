import React from "react";

const Title = ({title, des}) => {
  return (
    <section className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="uppercase text-sm font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="capitalize text-3xl md:text-5xl font-bold text-gray-300">
        {des}
      </h1>
    </section>
  );
};

export default Title;
