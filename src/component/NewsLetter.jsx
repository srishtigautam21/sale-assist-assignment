import React from "react";

const NewsLetter = () => {
  return (
    <div className='flex flex-col gap-5 w-full h-screen bg-main px-[50px] items-center justify-center'>
      <div className='bg-blue w-[900px] h-[350px] rounded-2xl flex flex-col justify-center items-center gap-5'>
        <div className='text-white text-[40px] font-bold '>
          Subscribe to Newsletter
        </div>
        <div className='text-white text-[16px] leading-4'>
          We have a wide experience in experience design and strategy
        </div>
        <div className='w-[500px] h-[80px] bg-white flex items-center justify-around rounded-lg'>
          <input
            placeholder='Enter your email address'
            type='email'
            className='w-[300px] outline-none'
          />
          <button className='w-[120px] h-[50px] bg-blue text-white rounded-3xl'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
