import React from "react";

const Navbar = () => {
  return (
    <div className='w-full h-[80px] flex justify-between items-center px-5 bg-main'>
      <div className='text-blue font-bold font-sans text-[34px]'>
        Medi
        <span className='text-orange font-bold font-sans text-[34px]'>
          Care+
        </span>
      </div>
      <div className='flex gap-5'>
        <ul className='flex justify-around items-center gap-4 text-blue'>
          <li className='font-bold'>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>News</li>
        </ul>
        <button className='w-[170px] h-[50px] bg-blue text-white rounded-3xl border-none'>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
