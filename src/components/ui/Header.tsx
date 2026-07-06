import { useState } from "react";
import { RiMenu3Fill, RiShoppingBasket2Line } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router";
import { useAddToBasket } from "../../store/useAddToBasket";

const Header = () => {
  const { products } = useAddToBasket();

  const [openHeader, setOpenHeader] = useState(false);
  const totalProduct = products.reduce((sum, item) => sum + item.qty, 0);
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
        <div className="flex gap-6 justify-center items-center">
          <Link to="/pages/Cart">
            <div className="relative">
              <RiShoppingBasket2Line className="text-3xl text-t-slate-700 " />
              <div className="absolute -top-2 -right-3 text-white size-2 rounded-full flex justify-center items-center text-center p-3 bg-t-green-600">
                {totalProduct}
              </div>
            </div>
          </Link>
          {openHeader ? (
            <TiDeleteOutline
              onClick={() => {
                setOpenHeader((prev) => !prev);
              }}
              className="text-2xl text-t-slate-700"
            />
          ) : (
            <RiMenu3Fill
              onClick={() => {
                setOpenHeader((prev) => !prev);
              }}
              className="text-2xl text-t-slate-700"
            />
          )}
        </div>
      </div>
      {openHeader && (
        <div
          className={`fixed  w-full  flex flex-col bg-white items-start p-4 gap-4 transition-all duration-300  ${
            openHeader ? "right-0" : "-right-full"
          }`}
        >
          <Link
            onClick={() => {
              setOpenHeader(false);
            }}
            to="/"
          >
            {" "}
            Home
          </Link>
          <Link
            onClick={() => {
              setOpenHeader(false);
            }}
            to="/pages/AllProducts"
          >
            {" "}
            All Product
          </Link>

          <button className="bg-t-green-600 px-5 py-2 rounded-full text-white">
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
