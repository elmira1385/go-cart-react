import React from 'react'

const JoinNewsletter = () => {
  return (
     <div className="flex flex-col  gap-8">
        <div className="flex flex-col justify-center items-center text-center gap-3 ">
          <h1 className="text-t-slate-900 text-2xl font-medium">
            Join Newsletter
          </h1>
          <p className="text-t-slate-800 ">
            Subscribe to get exclusive deals, new arrivals, and insider updates
            delivered straight to your inbox every week.
          </p>
        </div>
        <div className=" flex justify-between pl-3 pr-2 py-2 bg-[#f1f4f9] border-3 border-white outline-2 outline-slate-200 rounded-full">
          <input
            className="outline-0 "
            type="text"
            placeholder="Enter your email address"
          />
          <button className="text-white right-20  px-6 py-4 text-sm  rounded-full bg-[#00c94f] ">
            Get Updates
          </button>
        </div>
      </div>
  )
}

export default JoinNewsletter