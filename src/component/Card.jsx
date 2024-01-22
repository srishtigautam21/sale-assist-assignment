import React from "react";
import { FaAngleRight } from "react-icons/fa";

import { TbDental } from "react-icons/tb";
// <TbDental />
import { PiBrainLight } from "react-icons/pi";
// <PiBrainLight />
import { BsLungs } from "react-icons/bs";
// <BsLungs />
import { TbReportMedical } from "react-icons/tb";
// <TbReportMedical />

const Card = () => {
  return (
    <div className='flex gap-5 items-center justify-center my-10 cursor-pointer'>
      <div className='bg-white rounded-2xl w-[250px] h-[300px] p-12 flex flex-col items-center justify-center gap-3 shadow-iconShadow'>
        <TbDental
          style={{ width: "114px", height: "128px", color: "#007DF2" }}
        />
        <div className='text-text1 text-[20px] font-bold'>Dental Care</div>
      </div>
      <div className='bg-blue rounded-2xl w-[250px] h-[300px] p-12 flex flex-col items-center justify-center gap-3 shadow-iconShadow'>
        <BsLungs style={{ width: "114px", height: "128px", color: "#ffff" }} />
        <div className='text-white text-[20px] font-bold'>Pulmonary</div>
        <div className='text-white text-[16px] font-semibold flex justify-between items-center gap-7'>
          Learn More
          <span style={{ paddingTop: "3px" }}>
            <FaAngleRight />
          </span>
        </div>
      </div>
      <div className='bg-white rounded-2xl w-[250px] h-[300px] p-12 flex flex-col items-center justify-center gap-3 shadow-iconShadow'>
        <PiBrainLight
          style={{ width: "114px", height: "128px", color: "#007DF2" }}
        />
        <div className='text-text1 text-[20px] font-bold'>Neurological</div>
      </div>
      <div className='bg-white rounded-2xl w-[250px] h-[300px] p-12 flex flex-col items-center justify-center gap-3 shadow-iconShadow'>
        <TbReportMedical
          style={{ width: "114px", height: "128px", color: "#007DF2" }}
        />
        <div className='text-text1 text-[20px] font-bold'>Prediatrics</div>
      </div>
    </div>
  );
};

export default Card;
