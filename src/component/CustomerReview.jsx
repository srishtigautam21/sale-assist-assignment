import React, { useState } from "react";
import { useReview } from "../context/Reviews";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import photo1 from "../asset/photo1.jpg";

const CustomerReview = () => {
  const { data } = useReview();
  const [noOfReviews, setNoOfReviews] = useState(1);

  return (
    <div className='flex flex-col gap-5 w-full h-screen bg-main  py-[50px] px-[50px] items-center justify-center'>
      <div className='text-text2 text-[45px] font-semibold'>
        What Our Customers Say
      </div>
      <div className='flex gap-5 justify-center items-center'>
        <div className='cursor-pointer hover:text-text2'>
          <FaAngleLeft
            onClick={() => {
              noOfReviews === 1
                ? setNoOfReviews(5)
                : setNoOfReviews(noOfReviews - 1);
            }}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div className='flex gap-5'>
          {data.length ? (
            data?.slice(noOfReviews * 2 - 2, noOfReviews * 2).map((item) => {
              return (
                <div key={item.ID}>
                  <div className='w-[550px] h-[400px] shadow-iconShadow rounded-2xl flex flex-col justify-center items-start p-10 gap-3 relative'>
                    <div className='text-text1 text-[18px] leading-[35px]'>
                      {item.Reviews}
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                      <img
                        src={photo1}
                        alt='patient-img'
                        className='rounded-[50%] object-cover w-[40px] h-[40px]'
                      />
                      <div className='text-text1 font-semibold text-[20px] leading-[35px] flex flex-col'>
                        {item.Name}
                        <span className='text-text1 text-[12px] leading-[22px] italic '>
                          Patient
                        </span>
                      </div>
                    </div>
                    <div className='rounded-[50%] object-cover w-[40px] h-[40px] bg-blue text-center absolute top-[-12px] right-[-12px]'>
                      <span className='text-white text-[30px]'>❝</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='text-text2 text-[20px] font-semibold h-full w-[1000px] text-center'>
              Loading....
            </div>
          )}
        </div>
        <div className='cursor-pointer  hover:text-text2'>
          <FaAngleRight
            onClick={() => {
              noOfReviews === 5
                ? setNoOfReviews(1)
                : setNoOfReviews(noOfReviews + 1);
            }}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
