import { create } from "zustand";
import type { IProduct } from "../api";

type TBasket = {
  products: Cart[];
  setProduct: (Product: IProduct) => void;
  clearOne: (id: number) => void;
};
type Cart = IProduct & {
  qty: number;
};

export const useAddToBasket = create<TBasket>()((set) => ({
  products: [],
  setProduct: (product) =>
    set((state) => {
      const exists = state.products.find((p) => p.id === product.id);
      if (exists) {
        return {
          products: state.products.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          ),
        };
      } else {
        return {
          products: [...state.products, { ...product, qty: 1 }],
        };
      }
    }),

  clearOne: (id) =>
    set((state) => {
      const exists = state.products.find((p) => p.id === id);
      if (!exists) return state;

      if (exists.qty === 1) {
        return {
          products: state.products.filter((item) => item.id !== id),
        };
      } else {
        return {
          products: state.products.map((item) =>
            item.id === id ? { ...item, qty: item.qty - 1 } : item,
          ),
        };
      }
    }),
}));
