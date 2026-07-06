import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useProducts } from "../../api";
import { useAddToBasket } from "../../store/useAddToBasket";

const ProductId = () => {
  const { ProductId } = useParams();
  const { data } = useProducts();
  const route = useNavigate();
  const item = data?.find((item) => item.id === Number(ProductId));
  const [mainImage, setMainImage] = useState("");
  const { setProduct, products,clearOne } = useAddToBasket();
  const each = products.find((i) => i.id === item?.id);
  const qty = each?.qty||0;
  if (!item) return <p>Loading...</p>;
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="  text-t-slate-700 text-sm flex">
        <p
          onClick={() => {
            route("/");
          }}
        >
          Home /
        </p>
        <p
          onClick={() => {
            route("/pages/AllProducts");
          }}
        >
          Products /
        </p>
        <p> {item?.title.slice(0, 12)}</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className=" p-10 bg-slate-100 rounded-lg ">
            <img
              className="rounded-lg"
              src={mainImage || item?.images[0]}
              alt=""
            />
          </div>
          <div className="flex sm:flex-col gap-3">
            {item?.images.map((i, index) => (
              <div
                onClick={() => {
                  setMainImage(i);
                }}
                key={index}
                className="bg-slate-100 p-4 rounded-lg group cursor-pointer"
              >
                <img src={i} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col p-4 gap-6 items-start justify-start">
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="text-3xl font-semibold text-slate-800">
              {item?.title.slice(0, 12)}
            </h1>
            <div className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#00C950"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent mt-0.5"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#00C950"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent mt-0.5"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#00C950"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent mt-0.5"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#00C950"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent mt-0.5"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#D1D5DB"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star text-transparent mt-0.5"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <p className="text-sm ml-3 text-slate-500">4 stars</p>
            </div>
          </div>
          <p className="text-2xl font-semibold text-t-slate-800">
            $<span>{item?.price}</span>
          </p>
          <>
            {qty === 0 ? (
              <button
                onClick={() => {
                  setProduct(item);
                }}
                className="bg-t-slate-800 text-white px-10 py-3 text-sm font-medium rounded hover:bg-slate-900 active:scale-95 transition"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-end gap-5 ">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-slate-800 font-semibold">
                    Quantity
                  </p>
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
                </div>
                <button onClick={()=>{
                  route("/pages/Cart")
                }} className="bg-slate-800 text-white px-10 py-3 text-sm font-medium rounded hover:bg-slate-900 active:scale-95 transition">
                  View Cart
                </button>
              </div>
            )}
          </>

          <div className="flex flex-col gap-4 text-slate-500">
            <p className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-earth text-slate-400"
                aria-hidden="true"
              >
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              Free shipping worldwide
            </p>
            <p className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-credit-card text-slate-400"
                aria-hidden="true"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
              100% Secured Payment
            </p>
            <p className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user text-slate-400"
                aria-hidden="true"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Trusted by top brands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
