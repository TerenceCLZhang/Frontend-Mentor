import type { UnknownAction } from "@reduxjs/toolkit";
import type { Dispatch } from "react";
import type { CartItemType } from "../types/CartItemType";
import { removeFromCart } from "../state/cartSlice";

interface Props {
  dispatch: Dispatch<UnknownAction>;
  item: CartItemType;
}

const CartItem = ({ dispatch, item }: Props) => {
  return (
    <div className="border-b border-rose-100 pb-5 flex items-center justify-between">
      <div>
        <span className="font-semibold">{item.name}</span>
        <div className="flex gap-2">
          <span className="text-red font-semibold mr-2">{item.amount}x</span>
          <span className="text-rose-500">
            @ ${item.pricePerProduct.toFixed(2)}
          </span>
          <span className="text-rose-500 font-semibold">
            ${item.totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
      <button
        type="button"
        aria-label="Remove item from cart"
        className="w-5 h-5 border-2 border-rose-300 rounded-full hover:border-rose-900 group"
        onClick={() => dispatch(removeFromCart(item.name))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
          className="m-auto"
        >
          <path
            className="fill-[#CAAFA7] group-hover:fill-rose-900"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
