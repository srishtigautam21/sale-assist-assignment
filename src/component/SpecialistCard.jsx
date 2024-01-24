import React from "react";

const SpecialistCard = () => {
  const doctors = [
    {
      name: "Dr. Awaatif Al",
      dept: "Dental Care",
    },
    {
      name: "Dr. Filipa Gaspar",
      dept: "Cardiology",
    },
    {
      name: "Dr. Sukhmeet Gorae",
      dept: "Neurological",
    },
    {
      name: "Neurological",
      dept: "Pediatrics",
    },
  ];
  return (
    <div className='flex gap-5 items-center justify-center my-10 cursor-pointer'>
      {doctors.map((item) => {
        return (
          <div
            key={item.name}
            className='bg-white rounded-2xl w-[230px] h-[300px] shadow-iconShadow flex flex-col'
          >
            <div className='bg-card h-[220px] w-full rounded-t-2xl'></div>
            <div className='p-2 text-text2 text-[18px] font-bold'>
              {item.name}
            </div>
            <div className='pl-2 text-text2 text-[15px]'>{item.dept}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SpecialistCard;
