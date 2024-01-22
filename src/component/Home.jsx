import React from "react";

const Home = () => {
  return (
    <div className='bg-main w-full h-screen flex gap-6 py-[50px] px-[50px]'>
      {/* <div className=''> */}
      <div className='flex flex-col gap-5 m-auto'>
        <div className='text-text1 text-[24px] font-bold'>
          Welcome to MediCare+ Clinic
        </div>
        <div className='text-text2 text-[64px] font-bold'>Best Specialists</div>
        <div className='text-text1 text-[20px]'>
          We are on the leading edge of cancer care. Providing the full
          continuum of cancer treatments and supportive care services in a
          single convenient location.
        </div>
        <button className='w-[259px] h-[60px] bg-blue text-white rounded-3xl border-none'>
          Make an Appointment
        </button>
      </div>
      <div className='w-[650px] h-[500px] bg-offwhitebox rounded-2xl'></div>
      {/* </div> */}
    </div>
  );
};

export default Home;
