import React from "react";
import doctor from "../asset/doctor.png";
import emergency from "../asset/emergency.png";
import ambulance from "../asset/ambulance.png";

const InnovativeClinic = () => {
  return (
    <div className='flex gap-5 w-full h-screen px-[40px] items-center relative mb-5'>
      <div className='flex flex-col gap-5 '>
        <div className='text-text2 text-[40px] font-semibold'>
          Clinic With Innovation
        </div>
        <div className='text-text2 text-[16px] leading-5'>
          We provide the most full medical services, so every person could have
          <br></br>
          the oppurtunity to receive qualitative medical help.
        </div>
      </div>
      <div className='bg-white h-[200px] w-[250px] rounded-2xl shadow-iconShadow absolute top-20 right-80 flex flex-col items-center p-3'>
        <img src={doctor} alt='doctor' className='w-[150px] h-[150px] ' />
        <div className='text-text2 text-[20px] font-semibold'>
          Qualified Doctors
        </div>
      </div>
      <div className='bg-white h-[200px] w-[250px] rounded-2xl shadow-iconShadow absolute bottom-2 right-80 flex flex-col items-center p-3'>
        <img src={ambulance} alt='ambulance' className='w-[150px] h-[150px] ' />
        <div className='text-text2 text-[20px] font-semibold'>
          24 Hours Service
        </div>
      </div>
      <div className='bg-white h-[200px] w-[250px] rounded-2xl shadow-iconShadow absolute top-[40%] right-12 flex flex-col items-center p-3'>
        <img src={emergency} alt='emergency' className='w-[150px] h-[150px] ' />
        <div className='text-text2 text-[20px] font-semibold'>
          Emergency Care
        </div>
      </div>
    </div>
  );
};

export default InnovativeClinic;
