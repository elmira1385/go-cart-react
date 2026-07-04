import React from "react";

interface ITamplateTitleOfProducts{
    title:string,
    count:number |undefined
}
const TamplateTitleOfProducts = ({title,count}:ITamplateTitleOfProducts) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-2xl font-bold text-t-slate-800">{title}</h2>
      <div
        className="flex items-center gap-5 text-sm text-t-slate-600 "
      >
        <p className=" text-center">{`Showing ${count} of 12 products`}</p>
        <button className="text-t-green-500 flex items-center gap-1">
          View more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TamplateTitleOfProducts;
