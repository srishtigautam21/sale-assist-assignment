import React from "react";
import SpecialistCard from "./SpecialistCard";

const Specialist = () => {
  return (
    <div className='flex flex-col gap-5 w-full h-screen bg-main  px-[50px] items-center justify-center'>
      <div className='text-text2 text-[45px] font-bold leading-[60px]'>
        We Have The Best Specialist
      </div>
      <div className='text-text2 text-[20px] leading-[30px]'>
        We have a wide experience in experience design and strategy, with
        locally-rooted knowledge.
      </div>
      <SpecialistCard />
    </div>
  );
};

export default Specialist;
