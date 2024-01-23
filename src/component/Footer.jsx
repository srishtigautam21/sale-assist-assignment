import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='w-full h-[50px] flex justify-between items-center p-10 bg-main'>
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
        </div>
      </div>
      <div className='w-full h-[200px] bg-footer flex flex-col p-5 items-start justify-center gap-5'>
        <div className='flex gap-5'>
          <div className='w-[30px] h-[30px] rounded-[50%] text-center bg-white flex items-center justify-center '>
            <FaFacebookF style={{ color: "#667C94" }} />
          </div>
          <div className='w-[30px] h-[30px] rounded-[50%] text-center bg-white flex items-center justify-center'>
            <FaGoogle style={{ color: "#667C94" }} />
          </div>
          <div className='w-[30px] h-[30px] rounded-[50%] text-center bg-white flex items-center justify-center'>
            <FaTwitter style={{ color: "#667C94" }} />
          </div>
        </div>
        <div className='text-gray text-[14px] leading-5 font-semibold'>
          ©2020 PodPayment - 2020
        </div>
      </div>
    </div>
  );
};

export default Footer;
