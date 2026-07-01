import { useState } from "react";
import { RiMenu3Fill, RiShoppingBasket2Line } from "react-icons/ri";

const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center p-4 ">
        <div className="relative text-4xl font-semibold text-t-slate-700">
          <span className="text-t-green-600">go</span>cart
          <span className="text-t-green-600 text-5xl leading-0">.</span>
          <p className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-white bg-t-green-600">
            plus
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <RiShoppingBasket2Line className="text-3xl text-t-slate-700" />
          <RiMenu3Fill
            onClick={() => {
              setOpenHeader((prev) => !prev);
            }}
            className="text-2xl text-t-slate-700"
          />
        </div>
      </div>
      {openHeader && (
        <div
          className={`fixed  w-full  bg-green-50 flex flex-col  items-start p-4 gap-4 transition-all duration-300  ${
            openHeader ? "right-0" : "-right-full"
          }`}
        >
          <p>Home</p>
          <p>All Product</p>
          <button className="bg-t-green-600 px-5 py-2 rounded-full text-white">
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
