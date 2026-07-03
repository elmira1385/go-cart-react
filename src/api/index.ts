import { useQuery } from "@tanstack/react-query";
import axios from "axios";

 export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}
const getProducts = async () => {
  const { data } = await axios.get(
    "https://api.escuelajs.co/api/v1/products?categoryId=2",
  );
  return data;
};

export const useProducts = () => {
  return useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};
