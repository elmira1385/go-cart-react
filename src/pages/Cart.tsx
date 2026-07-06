import React from "react";
import { useAddToBasket } from "../store/useAddToBasket";
import { IoTrashBinOutline } from "react-icons/io5";

const Cart = () => {
  const { clearOne, products, setProduct } = useAddToBasket();
  const totalPrice = products.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const tax2 = totalPrice * 0.02;
  const totalAmount = totalPrice + tax2;
  return (
    <div className="flex flex-col p-6 gap-20 justify-between">
      <div className="flex flex-col flex-1 max-w-4xl gap-4 ">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-medium ">My Cart</p>
          <div className="flex items-center gap-3">
            <p className="text-slate-600">items in your cart</p>
            <a
              className="flex items-center gap-1 text-green-500 text-sm"
              href="/"
            >
              Add more
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
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  text-gray-500 text-[12px] ">
            <p className="text-left">Product</p>
            <p className="text-center">Quantity</p>
            <p className="text-center">SubTotal</p>
            <p className="text-center">remove</p>
          </div>
          <div className="flex flex-col gap-2">
            {products.map((item) => {
              const each = products.find((i) => i.id === item?.id);
              const qty = each?.qty;

              return (
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr] justify-center items-center">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-3 p-2 items-center justify-center size-16 bg-slate-100  rounded-md">
                      <img
                        alt=""
                        loading="lazy"
                        decoding="async"
                        data-nimg="1"
                        className=""
                        src={item.images[0]}
                      />
                    </div>
                    <div>
                      <p className="text-[12px]">{item.title.slice(0, 12)}</p>
                      <p className="text-[12px]">
                        $ <span>{item.price}</span>
                      </p>
                    </div>
                  </div>
                  <div className=" flex items-center justify-between gap-2 p-1  rounded border border-slate-200 text-sm text-slate-600">
                    <button
                      onClick={() => {
                        clearOne(item.id);
                      }}
                      className=" select-none"
                    >
                      -
                    </button>
                    <p>{qty}</p>
                    <button
                      onClick={() => {
                        setProduct(item);
                      }}
                      className=" select-none"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-center text-[12px]">
                    $ {item.price * item.qty}
                  </p>
                  <div
                    onClick={() => {
                      clearOne(item.id);
                    }}
                    className="flex justify-center items-center"
                  >
                    <IoTrashBinOutline />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="  bg-gray-100 p-5 ">
        <p className="text-2xl font-medium">Order Summary</p>
        <hr className="border-gray-300 my-6"></hr>
        <div className="flex flex-col ">
          <p className="text-base font-medium uppercase">Delivery Address</p>
          <div className="relative flex justify-between items-start mt-2">
            <p className="text-gray-500">No address found</p>
            <button className="text-primary hover:underline cursor-pointer">
              Change
            </button>
          </div>
          <p className="text-base font-medium uppercase pt-6">Payment Method</p>
          <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>
        <hr className="border-gray-300 my-6"></hr>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-gray-500">
            <p>Price</p>
            <p>
              $<span>{totalPrice}</span>
            </p>
          </div>
          <div className="flex justify-between text-gray-500">
            <p>Shipping Fee</p>
            <p className="text-primary">free</p>
          </div>
          <div className="flex justify-between text-gray-500">
            <p>Tax (2%)</p>
            <p>
              $<span>{tax2}</span>
            </p>
          </div>
          <div className="flex justify-between text-lg text-gray-600">
            <p>Total Amount:</p>
            <p>
              $<span>{totalAmount}</span>
            </p>
          </div>
        </div>
        <button className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium bg-primary-dull transition-all">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
