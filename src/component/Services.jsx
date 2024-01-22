import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div className='flex flex-col w-full h-screen bg-main  py-[100px] px-[50px] items-center justify-center'>
      <div className='font-semibold text-[45px] text-text2'>Our Services</div>
      <div className='text-[20px] text-text2 leading-9'>
        We provide the most full medical services, so every person could heave
        the oppurtunity to receive qualitative medical help.
      </div>
      <Card />
    </div>
  );
};

export default Services;
