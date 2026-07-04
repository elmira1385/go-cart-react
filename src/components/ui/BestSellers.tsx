import React from "react";
import TamplateTitleOfProducts from "./TamplateTitleOfProducts";
import TamplateOfProducts from "./TamplateOfProducts";
import { useProducts } from "../../api";

const BestSellers = () => {
  const { data } = useProducts();
  const bestData = data?.slice(0, 8);
  return (
    <div className="flex flex-col gap-10">
      <TamplateTitleOfProducts title="Best Selling" count={bestData?.length} />
      <TamplateOfProducts product={bestData} />
    </div>
  );
};

export default BestSellers;
