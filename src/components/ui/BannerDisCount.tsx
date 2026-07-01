import React, { useState } from "react";

const BannerDisCount = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="flex justify-between  transition-all items-center bg-linear-to-r from-violet-500 via-[#9938CA] to-[#E0724A] py-3 px-6">
          <p className="text-white text-sm font-bold">
            Get 20% OFF on Your First Order!
          </p>
          <button onClick={()=>{
            setShow(false)
          }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="12.532"
                width="17.498"
                height="2.1"
                rx="1.05"
                transform="rotate(-45.74 0 12.532)"
                fill="#fff"
              ></rect>
              <rect
                x="12.533"
                y="13.915"
                width="17.498"
                height="2.1"
                rx="1.05"
                transform="rotate(-135.74 12.533 13.915)"
                fill="#fff"
              ></rect>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default BannerDisCount;
